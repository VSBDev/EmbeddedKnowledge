/**
 * Derive a static chart from declarative source.
 *
 * Format v1 keeps lesson visuals inert: the JSON carries data and encoding, and a renderer produces
 * the picture. That rule is why charts are not a plotting library embedded in a lesson. Nothing here
 * executes in the learner's browser, nothing fetches a URL, and the same source will render the same
 * chart in any future presentation.
 *
 * Every chart also emits its data as a table. A distribution a learner cannot see is still a set of
 * numbers they must be able to read, so the text equivalent is part of the chart, not a courtesy
 * attached to it.
 */

const W = 720;
const H = 380;
const PAD = { top: 28, right: 24, bottom: 56, left: 64 };
const PLOT = { w: W - PAD.left - PAD.right, h: H - PAD.top - PAD.bottom };

const esc = (value = "") =>
  String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;").replaceAll("'", "&#39;");

const round = (n) => Math.round(n * 100) / 100;
const normalPdf = (x, mean, sd) => Math.exp(-((x - mean) ** 2) / (2 * sd * sd)) / (sd * Math.sqrt(2 * Math.PI));

// Resolve the data range for each axis, preferring the declared bounds so a lesson can hold two
// charts to the same scale when it is comparing them.
function bounds(chart) {
  const xs = [];
  const ys = [];
  for (const s of chart.series || []) {
    for (const p of s.points || []) { xs.push(p.x); ys.push(p.y); }
    for (const b of s.bins || []) { xs.push(b.from, b.to); ys.push(b.count); }
    if (s.summary) xs.push(s.summary.min, s.summary.max);
    if (typeof s.mean === "number" && typeof s.sd === "number") {
      xs.push(s.mean - 4 * s.sd, s.mean + 4 * s.sd);
      ys.push(normalPdf(s.mean, s.mean, s.sd));
    }
  }
  for (const m of chart.markers || []) xs.push(m.x);
  const xMin = chart.xAxis.min ?? (xs.length ? Math.min(...xs) : 0);
  const xMax = chart.xAxis.max ?? (xs.length ? Math.max(...xs) : 1);
  const yMin = chart.yAxis.min ?? 0;
  const yMax = chart.yAxis.max ?? (ys.length ? Math.max(...ys) * 1.1 : 1);
  return { xMin, xMax: xMax === xMin ? xMin + 1 : xMax, yMin, yMax: yMax === yMin ? yMin + 1 : yMax };
}

function scales(b) {
  return {
    x: (v) => PAD.left + ((v - b.xMin) / (b.xMax - b.xMin)) * PLOT.w,
    y: (v) => PAD.top + PLOT.h - ((v - b.yMin) / (b.yMax - b.yMin)) * PLOT.h
  };
}

function axes(chart, b, s) {
  const axisLabel = (a) => esc(a.unit ? `${a.label} (${a.unit})` : a.label);
  const ticks = (axis, isX) => {
    const list = axis.ticks?.length
      ? axis.ticks
      : Array.from({ length: 5 }, (_, i) => {
          const lo = isX ? b.xMin : b.yMin;
          const hi = isX ? b.xMax : b.yMax;
          const at = lo + ((hi - lo) * i) / 4;
          return { at, label: String(round(at)) };
        });
    return list.map((t) => {
      if (isX) {
        const x = s.x(t.at);
        return `<line x1="${round(x)}" y1="${PAD.top + PLOT.h}" x2="${round(x)}" y2="${PAD.top + PLOT.h + 5}" class="ek-chart-tick"/>`
          + `<text x="${round(x)}" y="${PAD.top + PLOT.h + 20}" class="ek-chart-ticklabel" text-anchor="middle">${esc(t.label)}</text>`;
      }
      const y = s.y(t.at);
      return `<line x1="${PAD.left - 5}" y1="${round(y)}" x2="${PAD.left}" y2="${round(y)}" class="ek-chart-tick"/>`
        + `<text x="${PAD.left - 9}" y="${round(y) + 4}" class="ek-chart-ticklabel" text-anchor="end">${esc(t.label)}</text>`;
    }).join("");
  };
  return `<line x1="${PAD.left}" y1="${PAD.top}" x2="${PAD.left}" y2="${PAD.top + PLOT.h}" class="ek-chart-axis"/>
    <line x1="${PAD.left}" y1="${PAD.top + PLOT.h}" x2="${PAD.left + PLOT.w}" y2="${PAD.top + PLOT.h}" class="ek-chart-axis"/>
    ${ticks(chart.xAxis, true)}${ticks(chart.yAxis, false)}
    <text x="${PAD.left + PLOT.w / 2}" y="${H - 12}" class="ek-chart-axislabel" text-anchor="middle">${axisLabel(chart.xAxis)}</text>
    <text x="16" y="${PAD.top + PLOT.h / 2}" class="ek-chart-axislabel" text-anchor="middle" transform="rotate(-90 16 ${PAD.top + PLOT.h / 2})">${axisLabel(chart.yAxis)}</text>`;
}

function curvePoints(series, b) {
  const step = (b.xMax - b.xMin) / 160;
  const out = [];
  for (let x = b.xMin; x <= b.xMax + 1e-9; x += step) out.push({ x, y: normalPdf(x, series.mean, series.sd) });
  return out;
}

function marks(chart, b, s) {
  let out = "";
  const clampX = (v) => Math.min(Math.max(v, b.xMin), b.xMax);

  for (const [i, region] of (chart.shadedRegions || []).entries()) {
    const from = region.from === "-inf" ? b.xMin : clampX(Number(region.from));
    const to = region.to === "inf" ? b.xMax : clampX(Number(region.to));
    const curve = (chart.series || []).find((x) => typeof x.mean === "number");
    if (curve) {
      const pts = curvePoints(curve, b).filter((p) => p.x >= from && p.x <= to);
      if (pts.length) {
        const d = `M ${round(s.x(from))} ${round(s.y(0))} `
          + pts.map((p) => `L ${round(s.x(p.x))} ${round(s.y(p.y))}`).join(" ")
          + ` L ${round(s.x(to))} ${round(s.y(0))} Z`;
        out += `<path d="${d}" class="ek-chart-shade ek-chart-shade--${i}"/>`;
      }
    } else {
      out += `<rect x="${round(s.x(from))}" y="${PAD.top}" width="${round(s.x(to) - s.x(from))}" height="${PLOT.h}" class="ek-chart-shade ek-chart-shade--${i}"/>`;
    }
  }
  for (const marker of chart.markers || []) {
    const x = round(s.x(clampX(marker.x)));
    out += `<line x1="${x}" y1="${PAD.top}" x2="${x}" y2="${PAD.top + PLOT.h}" class="ek-chart-marker"/>`
      + `<text x="${x}" y="${PAD.top - 8}" class="ek-chart-markerlabel" text-anchor="middle">${esc(marker.label)}</text>`;
  }
  return out;
}

function plot(chart, b, s) {
  let out = "";
  for (const [i, series] of (chart.series || []).entries()) {
    const cls = `ek-chart-series--${i}`;
    if (typeof series.mean === "number" && typeof series.sd === "number") {
      const d = curvePoints(series, b).map((p, j) => `${j ? "L" : "M"} ${round(s.x(p.x))} ${round(s.y(p.y))}`).join(" ");
      out += `<path d="${d}" class="ek-chart-line ${cls}" fill="none"/>`;
    }
    if (series.points?.length) {
      if (chart.type === "scatter") {
        out += series.points.map((p) => `<circle cx="${round(s.x(p.x))}" cy="${round(s.y(p.y))}" r="4" class="ek-chart-point ${cls}"/>`).join("");
      } else {
        const d = series.points.map((p, j) => `${j ? "L" : "M"} ${round(s.x(p.x))} ${round(s.y(p.y))}`).join(" ");
        out += `<path d="${d}" class="ek-chart-line ${cls}" fill="none"/>`;
      }
    }
    if (series.bins?.length) {
      out += series.bins.map((bin) => {
        const x = s.x(bin.from);
        const w = Math.max(s.x(bin.to) - x - 1, 1);
        const y = s.y(bin.count);
        return `<rect x="${round(x)}" y="${round(y)}" width="${round(w)}" height="${round(PAD.top + PLOT.h - y)}" class="ek-chart-bar ${cls}"/>`;
      }).join("");
    }
    if (series.categories?.length) {
      const slot = PLOT.w / series.categories.length;
      out += series.categories.map((cat, j) => {
        const x = PAD.left + j * slot + slot * 0.2;
        const y = s.y(cat.value);
        return `<rect x="${round(x)}" y="${round(y)}" width="${round(slot * 0.6)}" height="${round(PAD.top + PLOT.h - y)}" class="ek-chart-bar ${cls}"/>`
          + `<text x="${round(x + slot * 0.3)}" y="${PAD.top + PLOT.h + 20}" class="ek-chart-ticklabel" text-anchor="middle">${esc(cat.label)}</text>`;
      }).join("");
    }
    if (series.summary) {
      const { min, q1, median, q3, max } = series.summary;
      const mid = PAD.top + PLOT.h / 2;
      const half = 26;
      out += `<line x1="${round(s.x(min))}" y1="${mid}" x2="${round(s.x(max))}" y2="${mid}" class="ek-chart-axis"/>`
        + `<rect x="${round(s.x(q1))}" y="${mid - half}" width="${round(s.x(q3) - s.x(q1))}" height="${half * 2}" class="ek-chart-bar ${cls}"/>`
        + `<line x1="${round(s.x(median))}" y1="${mid - half}" x2="${round(s.x(median))}" y2="${mid + half}" class="ek-chart-marker"/>`;
    }
  }
  return out;
}

// The text equivalent. Charts are read by people who cannot see them and by agents that never render
// SVG, so the numbers appear verbatim rather than as a description of a picture.
function dataTable(chart) {
  const rows = [];
  for (const series of chart.series || []) {
    if (typeof series.mean === "number") rows.push([series.label, `mean ${series.mean}, standard deviation ${series.sd}`]);
    for (const p of series.points || []) rows.push([series.label, `${chart.xAxis.label} ${p.x}, ${chart.yAxis.label} ${p.y}`]);
    for (const c of series.categories || []) rows.push([series.label, `${c.label}: ${c.value}`]);
    for (const b of series.bins || []) rows.push([series.label, `${b.from} to ${b.to}: ${b.count}`]);
    if (series.summary) {
      const s = series.summary;
      rows.push([series.label, `minimum ${s.min}, lower quartile ${s.q1}, median ${s.median}, upper quartile ${s.q3}, maximum ${s.max}`]);
    }
  }
  for (const r of chart.shadedRegions || []) rows.push(["Shaded region", `${r.from} to ${r.to}: ${r.label}`]);
  for (const m of chart.markers || []) rows.push(["Marker", `${chart.xAxis.label} ${m.x}: ${m.label}`]);
  if (!rows.length) return "";
  return `<table class="ek-chart-table"><caption>Chart data</caption><thead><tr><th scope="col">Series</th><th scope="col">Value</th></tr></thead><tbody>`
    + rows.map((r) => `<tr><td>${esc(r[0])}</td><td>${esc(r[1])}</td></tr>`).join("")
    + `</tbody></table>`;
}

export function renderChartSvg(chart) {
  const b = bounds(chart);
  const s = scales(b);
  return `<svg viewBox="0 0 ${W} ${H}" class="ek-chart-svg" role="img" aria-label="${esc(chart.alt)}" xmlns="http://www.w3.org/2000/svg">`
    + `<title>${esc(chart.alt)}</title>`
    + marks(chart, b, s) + plot(chart, b, s) + axes(chart, b, s)
    + `</svg>`;
}

export function renderChartHtml(chart, sourceRelativePath) {
  const legend = (chart.series || []).length > 1
    ? `<ul class="ek-chart-legend">${chart.series.map((x, i) => `<li class="ek-chart-series--${i}">${esc(x.label)}</li>`).join("")}</ul>`
    : "";
  return `<figure class="ek-block ek-chart" data-directive="chart" data-chart-source="${esc(sourceRelativePath)}">
    <div class="ek-block-label directive-label">Chart</div>
    ${chart.title ? `<p class="ek-chart-title">${esc(chart.title)}</p>` : ""}
    ${renderChartSvg(chart)}
    ${legend}
    <figcaption>${esc(chart.alt)}</figcaption>
    <details class="ek-long-description"><summary>Read the chart as text</summary><p>${esc(chart.longDescription)}</p>${dataTable(chart)}</details>
  </figure>`;
}
