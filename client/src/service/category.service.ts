// api/admin/category
import axios from "axios"

export const categoryService = {getAllCategories, saveCategory,deleteCategory}

function getAllCategories() {
    return axios.get('/api/admin/category')
}

function saveCategory(value: string) {
    // return axios.post('/api/admin/category', {
    //     params: {
    //         name: value
    //     }
    // })
    return axios.post('/api/admin/category?name=' + value)
}

function deleteCategory(value: string) {
    return axios.delete('/api/admin/category?name=' + value)
}

function logout() {

}

// TODO implement it later
function register() {
}


