import {Inject, Injectable, InternalServerErrorException} from "@nestjs/common";
import {User} from "./users.model";
import {CreateUserDto} from "./dto/create-user.dto";
import {constants} from "./constants";
import {RolesService} from "../roles/roles.service";

@Injectable()
export class UsersService {

    constructor(
        @Inject(constants.USERS_REPOSITORY) private usersRepository: typeof User,
        private rolesService: RolesService
    ) {}

    async createUser(dto: CreateUserDto) {
       const user = await this.usersRepository.create(dto)
        const role = await this.rolesService.getRoleByValue('USER')

        if(!role) {
            throw new InternalServerErrorException()
        }

        await user.$set('roles', [role.id])
        user.roles = [role]

        return user

    }

    async getAllUsers() {
        return this.usersRepository.findAll({
            include: {
                all: true,
            }
        })

    }

    async getUserByPk(id: number) {
        return this.usersRepository.findByPk(id)
    }

    async getUserByEmail(email: string) {
        return this.usersRepository.findOne({
            where: {
                email: email
            },
            include: {
                all: true
            }
        })
    }




}