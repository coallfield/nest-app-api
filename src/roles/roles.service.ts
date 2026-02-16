import {Inject, Injectable} from '@nestjs/common';
import {CreateRoleDto} from "./dto/create-role.dto";
import {constants} from "./constants";
import {Role} from "./roles.model";
import {RoleType} from "./types";

@Injectable()
export class RolesService {

    constructor(@Inject(constants.ROLES_REPOSITORY) private rolesRepository: typeof Role) {
    }

    async createRole(dto: CreateRoleDto) {
        return this.rolesRepository.create(dto)
    }

    async getRoleByValue(value: RoleType) {
        return this.rolesRepository.findOne({
            where: {
                value: value
            }
        })
    }

}
