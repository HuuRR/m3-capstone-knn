import axios from "axios";
const token= localStorage.getItem("@KNN-TOKEN")
export const api = axios.create({
    baseURL:"https://knn-db.herokuapp.com/",
    headers: {'Authorization': 'Bearer'+token},
    timeout: 15000,
})