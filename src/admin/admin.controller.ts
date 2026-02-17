import {Body, Controller, Delete, Post, UseGuards} from '@nestjs/common';
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {Roles} from "../auth/roles-auth.decorator";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {RolesGuard} from "../auth/roles.guard";
import { ManipulateRoleDto} from "./dto/manipulate-role.dto";
import {AdminService} from "./admin.service";
import {BanUserDto} from "./dto/ban-user.dto";

@Controller('admin')
export class AdminController {

    constructor(private adminService: AdminService) {}

    @ApiOperation({summary: 'Add role'})
    @ApiResponse({status: 200})
    @Roles('ADMIN')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post('role')
    addRole(@Body() dto: ManipulateRoleDto) {
        return this.adminService.addRole(dto)
    }

    @ApiOperation({summary: "Deletes role from user"})
    @ApiResponse({status: 200})
    @Roles('ADMIN')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete('role')
    deleteRole(@Body() dto: ManipulateRoleDto) {
        return this.adminService.deleteRole(dto)
    }

    @ApiOperation({summary: "Ban user"})
    @ApiResponse({status: 200})
    @Roles('ADMIN')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post('ban')
    ban(@Body() dto: BanUserDto) {
        return this.adminService.banUser(dto)
    }



}
