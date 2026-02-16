import {forwardRef, Module} from "@nestjs/common";
import {UsersController} from "./users.controller";
import {UsersService} from "./users.service";
import {usersProviders} from "./users.providers";
import {RolesModule} from "../roles/roles.module";
import {AuthModule} from "../auth/auth.module";

@Module({
    controllers: [UsersController],
    providers: [UsersService, ...usersProviders],
    imports: [
        RolesModule,
        forwardRef(() => AuthModule)
    ],
    exports: [
        UsersService,
    ]

})
export class UsersModule {

}