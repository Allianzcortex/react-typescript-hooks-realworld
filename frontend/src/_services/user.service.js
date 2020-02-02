import {restfulApiService} from "./service";

const baseUrl = "http://localhost:4000/api/v1/"
const headers = {
    'Content-Type': 'application/json'
}

function register() {
    return restfulApiService.get(baseUrl + 'register', {
        headers: headers
    })
}

function login() {

}

function logout() {

}

export const userSerivce = {register, login, logout}
