import { Injectable } from "@nestjs/common/decorators";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JWTAuthGuard extends AuthGuard('jwt') {}