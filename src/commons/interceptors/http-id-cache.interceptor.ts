import {
  CACHE_KEY_METADATA,
  CacheInterceptor,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';

// cache by id pattern
@Injectable()
export class HttpParamIdCacheInterceptor extends CacheInterceptor {
  trackBy(context: ExecutionContext): string | undefined {
    const cacheKey = this.reflector.get(
      CACHE_KEY_METADATA,
      context.getHandler(),
    );

    if (cacheKey) {
      const request = context.switchToHttp().getRequest();
      return `${cacheKey}:${request.params.id}`;
    }

    return super.trackBy(context);
  }
}
