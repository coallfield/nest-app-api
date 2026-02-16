
import { Sequelize } from 'sequelize-typescript';
import {User} from "../users/users.model";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";


export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB,
                models: [User, Role, UserRoles],


            });
            sequelize.addModels([User, Role, UserRoles])
            await sequelize.sync();
            return sequelize;
        },
    },
];
