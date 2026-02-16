import {
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
} from "@nestjs/common";

import {Reflector} from "@nestjs/core";
import {ROLES_KEY} from "./roles-auth.decorator";
import {RoleType} from "../roles/types";
import {User} from "../users/users.model";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        try {
            const requiredRoles = this.reflector.getAllAndOverride<RoleType[]>(ROLES_KEY, [
                context.getHandler(),
                context.getClass(),
            ]);

            if (!requiredRoles) {
                return true;
            }

            const { user } = context.switchToHttp().getRequest<Request & {user: User}>();

            if (!user || !user.roles) {
                return false;
            }

            return user.roles.some(role => requiredRoles.includes(role.value));
        } catch (e) {
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }

    }
}