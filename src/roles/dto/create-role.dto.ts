import {RoleType} from "../types";


export class CreateRoleDto {
    readonly value: RoleType
    readonly description: string
}