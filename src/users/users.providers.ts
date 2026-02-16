import {User} from "./users.model";
import {constants} from "./constants";


export const usersProviders: SchemaProvider<typeof User>[] = [
    {
        provide: constants.USERS_REPOSITORY,
        useValue: User
    }
]