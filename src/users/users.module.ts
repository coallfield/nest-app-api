import {Module} from "@nestjs/common";
import {UsersController} from "./users.controller";
import {UsersService} from "./users.service";
import {usersProviders} from "./users.providers";
import {RolesModule} from "../roles/roles.module";

@Module({
    controllers: [UsersController],
    providers: [UsersService, ...usersProviders],
    imports: [
        RolesModule
    ],
    exports: [
        UsersService,
    ]

})
export class UsersModule {

}