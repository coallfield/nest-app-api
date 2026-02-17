import {RoleType} from "../types";
import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";


export class CreateRoleDto {
    @ApiProperty({example: 'ADMIN'})
    @IsString({
        message: 'Value must be string'
    })
    readonly value: RoleType


    @ApiProperty({example: 'Administration'})
    @IsString({
        message: 'Value must be string'
    })
    readonly description: string
}