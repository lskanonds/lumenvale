/**
 * Whether search engines may index this deployment.
 *
 * Closed unless `ALLOW_INDEXING=1`, so anything that is not the live site (preview
 * deploys, a laptop, a copy of the database) is shut by default and cannot be opened by
 * forgetting to close it. An environment variable rather than code, so launch day is a
 * setting and a redeploy.
 *
 * Read by both the robots meta tag in the root layout and /robots.txt, which must agree.
 */
export const indexable = process.env.ALLOW_INDEXING === '1'
