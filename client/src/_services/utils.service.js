import {restfulApiService} from "./service";

const baseUrl = "http://localhost:5000/api/v1/"
const headers = {
    'Content-Type': 'application/json'
}

function getAllTopics() {
    return restfulApiService.get(baseUrl + 'topics',)
}


export const utilSerivce = {getAllTopics}
