import { Module } from '@nestjs/common';
import {DatabaseModule} from "./database/database.module";
import {ConfigModule} from "@nestjs/config";
import {UsersModule} from "./users/users.module";
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import {AdminModule} from "./admin/admin.module";

@Module({
  imports: [
      ConfigModule.forRoot({
          envFilePath: `.${process.env.NODE_ENV}.env`
      }),
      DatabaseModule,
      UsersModule,
      RolesModule,
      AuthModule,
      AdminModule
  ],
  controllers: [],
  providers: [],

})
export class AppModule {}
