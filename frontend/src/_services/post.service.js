import {restfulApiService} from "./service";

const baseUrl = "http://localhost:5000/api/v1/"
const headers = {
    'Content-Type': 'application/json'
}

function getAllPosts() {
    return restfulApiService.get(baseUrl + 'posts',)
}


export const postSerivce = {getAllPosts}
