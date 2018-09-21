import axios from 'axios';
export const FETCH_POST = "FETCH_POST";

const base_url =`http://reduxblog.herokuapp.com/api`;
const api_key = `?key=PAPERCLIP2323`

export function fetchPosts(){
    const request = axios.get(`${base_url}/posts${api_key}`);

    return{
        type: FETCH_POST,
        payload: request
    }
}