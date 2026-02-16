import {ApiProperty} from "@nestjs/swagger";


export class CreateUserDto {
    @ApiProperty({example: 'somebody@gmail.com'})
    readonly email: string
    @ApiProperty({example: '123'})
    readonly password: string
}