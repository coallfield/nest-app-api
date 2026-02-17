import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {CreateRoleDto} from "./dto/create-role.dto";
import {RoleType} from "./types";


import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {Role} from "./roles.model";



@Controller('roles')
export class RolesController {

    constructor(
        private roleService: RolesService,
    ) {}

    @ApiOperation({summary: 'Creating role'})
    @ApiResponse({status: 200, type: Role})
    @Post()
    create(@Body() dto: CreateRoleDto) {
        return this.roleService.createRole(dto)
    }

    @ApiOperation({summary: 'Get role by value'})
    @ApiResponse({status: 200, type: Role})
    @Get('/:value')
    getByValue(@Param('value') value: RoleType) {
        return this.roleService.getRoleByValue(value)
    }

}
