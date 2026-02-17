import {RoleType} from "../../roles/types";
import {ApiProperty} from "@nestjs/swagger";
import {IsInt, IsString} from "class-validator";


export class ManipulateRoleDto{
    @ApiProperty({example: 'ADMIN'})
    @IsString({
        message: 'Value must be string'
    })
    readonly value: RoleType

    @ApiProperty({example: 10})
    @IsInt({
        message: 'Value must be number'
    })
    readonly userId: number
}