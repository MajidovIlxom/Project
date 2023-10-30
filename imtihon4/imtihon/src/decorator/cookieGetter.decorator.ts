
import { ExecutionContext, UnauthorizedException, createParamDecorator } from "@nestjs/common";

export const CookieGetter = createParamDecorator(
  async (data: string, context: ExecutionContext): Promise<string> => {
    const request = context.switchToHttp().getRequest();
    if (!request) {
      throw new UnauthorizedException('Request object is undefined');
    }
    const refreshtoken = request.cookies['refresh_token'];
    if (!refreshtoken) {
      throw new UnauthorizedException('Token is not found');
    } 
    return refreshtoken;
  }
);
