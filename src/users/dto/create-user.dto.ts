import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";


export class CreateUserDto {
    @ApiProperty({example: 'somebody@gmail.com'})
    @IsString({
        message: 'Value must be string',
    })
    @IsEmail({}, {
        message: 'Invalid email',
    })
    readonly email: string


    @ApiProperty({example: '123'})
    @IsString({
        message: 'Value must be string',
    })
    @Length(8, 16, {
        message: 'Password must be at least 8 characters and less than 16 characters',
    })
    readonly password: string
}