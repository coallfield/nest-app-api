import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {ManipulateRoleDto} from "./dto/manipulate-role.dto";
import {UsersService} from "../users/users.service";
import {RolesService} from "../roles/roles.service";
import {BanUserDto} from "./dto/ban-user.dto";

@Injectable()
export class AdminService {

    constructor(
        private readonly usersService: UsersService,
        private readonly rolesService: RolesService
    ) {}


    async addRole(dto: ManipulateRoleDto) {
        const user = await this.usersService.getUserByPk(dto.userId)
        const role = await this.rolesService.getRoleByValue(dto.value)

        if(user && role) {
            await user.$add('role', role.id)
            return dto
        }
        throw new HttpException('User or role not found', HttpStatus.NOT_FOUND)

    }


    async deleteRole(dto: ManipulateRoleDto) {
        const user = await this.usersService.getUserByPk(dto.userId)
        const role = await this.rolesService.getRoleByValue(dto.value)

        if(user && role) {
            await user.$remove('role', role.id)
            return {
                message: `Role ${dto.value} removed from user ${dto.userId}`
            }
        }

        throw new HttpException('User or role not found', HttpStatus.NOT_FOUND);
    }


    async banUser(dto: BanUserDto) {
        const user = await this.usersService.getUserByPk(dto.userId)

        if(!user) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND)
        }

        user.banned = true;
        user.banReason = dto.banReason
        await user.save()
        return user
    }

}
