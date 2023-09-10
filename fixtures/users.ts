import {User} from "../interfaces/user";

export const users: User = {
    displayName: "poppy",
    credential: {
        username: "poppy",
        password: "123456"
    }
}

export const invalidUser: User[] = [{
    displayName: "other",
    credential: {
        username: "other",
        password: "123456"
    }
},
    {
        displayName: "9999 Account",
        credential: {
            username: "99999Account",
            password: "123456"
        }
    }]

export const suspendedUser: User[] = [{
    displayName: "jomyut",
    credential: {
        username: "jomyut",
        password: "123456"
    }
}]
