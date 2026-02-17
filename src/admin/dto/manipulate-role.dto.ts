import {RoleType} from "../../roles/types";
import {ApiProperty} from "@nestjs/swagger";


export class ManipulateRoleDto{
    @ApiProperty({example: 'ADMIN'})
    readonly value: RoleType
    @ApiProperty({example: 10})
    readonly userId: number
}