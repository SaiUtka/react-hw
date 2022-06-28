import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
});

const getUsers = () => axiosInstance.get('').then(value => value.data);
const getPosts = (id) => axiosInstance.get(id + '/posts').then(value => value.data)

export  {getUsers, getPosts}