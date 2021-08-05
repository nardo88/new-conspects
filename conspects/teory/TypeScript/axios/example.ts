
import axios from './axios'

type AxiosResponse<T> = {
    data: T
    
}

type Response = {
    _id: string
    login: string
}


const instance = axios.create({
    withCredentials: true,
    headers: {
        'api-key': 'b29d6c23'
    },
    baseURL: 'hhtps://www.some-api.com'
})


const userAPI = {
    getUsers(currentPage: number, pageSize: number){
        return instance.get<Response>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}




export default userAPI