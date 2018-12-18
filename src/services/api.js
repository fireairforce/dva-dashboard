import request from '../utils/request';
const baseURL = "http://154.8.214.49:8080/";
export async function loginit(params){
    const body = {
        login_name: params.a,
        password: params.b,
        login_type:"yzzh"
    }
    return request({
        url:`${baseURL}yzzh/login`,
        method: 'post',
        data:body,  
    })
}