import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

import { UserService } from "src/modules/user/service/user.service";

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(
        private reflector: Reflector, 
        private userService: UserService
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        
        const request = context.switchToHttp().getRequest();

        if(request?.user) {

            const { userId } = request.user;

            const user = await this.userService.findOne({userId});

            return roles.includes(user.role);
        }

        return false;
    }
}