import {ApiProperty} from "@nestjs/swagger";
import {IsInt, IsString} from "class-validator";


export class BanUserDto {
    @ApiProperty({example: 10})
    @IsInt({
        message: 'Value must be number'
    })
    readonly userId: number


    @ApiProperty({example: 'Spam'})
    @IsString({
        message: 'Value must be string'
    })
    readonly banReason: string
}