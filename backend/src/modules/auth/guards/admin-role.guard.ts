import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

import { UserRole } from "../../user/enums/user.enum";
import { UserService } from "../../user/service/user.service";

@Injectable()
export class AdminRoleGuard implements CanActivate {
    constructor (private userService: UserService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();

        if(request?.user) {

            const { userId, password } = request.user;

            const user = await this.userService.findOne({userId});

            if (user.role == UserRole.ADMIN && password == user.password) {
                return true;
            }

            return false;
        }

        return true;
    }

}