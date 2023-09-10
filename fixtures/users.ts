import {User} from "../interfaces/user";

export const users: User = {
    displayName: "xxxxxx",
    credential: {
        username: "xxxxxxx",
        password: "xxxxxxxx"
    }
}

export const invalidUser: User[] = [{
    displayName: "other",
    credential: {
        username: "other",
        password: "xxxxxxxx"
    }
},
    {
        displayName: "9999 Account",
        credential: {
            username: "99999Account",
            password: "xxxxxxxx"
        }
    },]

export const suspendedUser: User[] = [{
    displayName: "jomyut",
    credential: {
        username: "jomyut",
        password: "xxxxxxxx"
    }
}]
