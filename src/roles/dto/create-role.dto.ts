import {RoleType} from "../types";
import {ApiProperty} from "@nestjs/swagger";


export class CreateRoleDto {
    @ApiProperty({example: 'ADMIN'})
    readonly value: RoleType
    @ApiProperty({example: 'Administration'})
    readonly description: string
}