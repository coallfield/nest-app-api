import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {UserRoles} from "./user-roles.model";
import {RoleType} from "./types";


interface RoleCreationAttrs {
    value: string,
    description: string,
}


enum RoleValues {
    ADMIN = "ADMIN",
    USER = "USER",
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs> {

    @ApiProperty({example: '1', description: 'Unique id'})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    declare id: number;

    @ApiProperty({example: RoleValues.ADMIN})
    @Column({
        type: DataType.ENUM(...Object.values(RoleValues)),
        unique: true,
        allowNull: false,
    })
    value: RoleType

    @ApiProperty({example: 'Administration'})
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description: string

    @BelongsToMany(() => User, () => UserRoles)
    users: User[]


}