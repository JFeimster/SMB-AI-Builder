export interface RateLimitConfig { windowMs: number; max: number; }
export interface RateLimitResult { allowed: boolean; remaining: number; resetAt: number; }
interface Bucket { count: number; resetAt: number; }
export function createRateLimiter(config: RateLimitConfig) { const store = new Map<string, Bucket>(); return function check(key: string): RateLimitResult { const now = Date.now(); let bucket = store.get(key); if (!bucket || now >= bucket.resetAt) { bucket = { count: 0, resetAt: now + config.windowMs, }; store.set(key, bucket); } bucket.count += 1; return { allowed: bucket.count <= config.max, remaining: Math.max(0, config.max - bucket.count), resetAt: bucket.resetAt, }; }; }
