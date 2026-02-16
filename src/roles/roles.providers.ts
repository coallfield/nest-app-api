import {Role} from "./roles.model";
import {constants} from "./constants";

export const rolesProviders: SchemaProvider<typeof Role>[] = [
    {
        provide: constants.ROLES_REPOSITORY,
        useValue: Role
    }
]