import {Module} from "@nestjs/common";
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import {UsersModule} from "../users/users.module";
import {RolesModule} from "../roles/roles.module";
import {AuthModule} from "../auth/auth.module";


@Module({
  controllers: [AdminController],
  providers: [AdminService],
  imports: [
      UsersModule,
      RolesModule,
      AuthModule
  ]
})
export class AdminModule {}