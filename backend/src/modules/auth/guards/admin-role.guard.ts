import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

import { Role } from "@common/enums/roles.enum";
import { UserService } from "@user/user.service";

@Injectable()
export class AdminRoleGuard implements CanActivate {
    constructor (private userService: UserService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();

        if(request?.user) {

            const { userId, password } = request.user;

            const user = await this.userService.findOne({userId});

            if (user.role == Role.ADMIN && password == user.password) {
                return true;
            }

            return false;
        }

        return false;
    }

}