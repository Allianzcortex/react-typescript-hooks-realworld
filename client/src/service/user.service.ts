import axios from "axios"

export const userService = {login,logout,register}

function login(email: string, password: string) {
    console.log("request is sent");
    return axios.post('api/login', JSON.stringify({email, password})
    )
}

function logout() {

}

// TODO implement it later
function register() {
}


