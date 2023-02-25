import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";

import appConfig from "src/config/app.config";
import { JwtUserDto } from "./dto/JwtUser.dto";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: appConfig().appSecret,
        });
    }

    async validate(payload: JwtUserDto) {
        return {
            userId: payload.userId,
            password: payload.password,
        };
    }
}