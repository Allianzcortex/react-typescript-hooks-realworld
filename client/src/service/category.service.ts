// api/admin/category
import axios from "axios"

export const categoryService = {getAllCategories}

function getAllCategories() {
    return axios.get('/api/category')
}

function logout() {

}

// TODO implement it later
function register() {
}


