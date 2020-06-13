export interface RootState {
    test: null | { type: string, msg: string },
    auth: {
        loggedIn: Boolean,
        user: object
    }
}

export interface Category {
    id: null | Number,
    name: string
}
