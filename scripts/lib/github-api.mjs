const retryableStatuses = new Set([429, 500, 502, 503, 504]);
const defaultSleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

/** Bounded, fail-closed GitHub JSON request with retries for transient failures. */
export async function githubApiJson({ url, token, headers = {}, fetchImpl = fetch, sleep = defaultSleep, maxAttempts = 3 }) {
  let lastError;
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      const response = await fetchImpl(url, {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${token}`,
          "X-GitHub-Api-Version": "2022-11-28",
          ...headers
        }
      });
      if (response.ok) return response.json();
      const message = await response.text();
      const error = new Error(`GitHub API returned ${response.status} for ${url}: ${message.slice(0, 240)}`);
      error.status = response.status;
      lastError = error;
      if (!retryableStatuses.has(response.status) || attempt === maxAttempts) throw error;
      const retryAfterHeader = response.headers?.get?.("retry-after");
      const retryAfterSeconds = retryAfterHeader === null || retryAfterHeader === undefined ? Number.NaN : Number(retryAfterHeader);
      const delay = Number.isFinite(retryAfterSeconds) && retryAfterSeconds >= 0
        ? Math.min(retryAfterSeconds * 1000, 2000)
        : 250 * (2 ** (attempt - 1));
      await sleep(delay);
    } catch (error) {
      lastError = error;
      if (error.status || attempt === maxAttempts) throw error;
      await sleep(250 * (2 ** (attempt - 1)));
    }
  }
  throw lastError;
}
