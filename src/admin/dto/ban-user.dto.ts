import {ApiProperty} from "@nestjs/swagger";


export class BanUserDto {
    @ApiProperty({example: 10})
    readonly userId: number
    @ApiProperty({example: 'Spam'})
    readonly banReason: string
}