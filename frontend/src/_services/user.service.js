import {restfulApiService} from "./service";

const baseUrl = "http://localhost:4000/api/v1/"
const headers = {
    'Content-Type': 'application/json'
}

function register({user,email,password}) {
    return restfulApiService.post(baseUrl + 'register', {
        user:user,
        email:email,
        password:password
    })
}

function login() {

}

function logout() {

}

export const userSerivce = {register, login, logout}
