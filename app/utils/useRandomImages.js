
import { createApi } from 'unsplash-js';
import axios from 'axios'
import useSWR from 'swr'

const fetcher = (...args) => axios.get(...args).then(res => res.data)

const useRandomImages = (query, count) => {


    const url = `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_API_KEY}&query=${query}&count=${count}`;
    const { data, error, isLoading } = useSWR(url, fetcher)
    return { data, error, isLoading }
}
// const useRandomImages = (query, count) => {
//     const url = `/api/randomImages?query=${query}&count=${count}`;
//     const { data, error, isLoading } = useSWR(url, fetcher)
//     return { data, error, isLoading }
// }

export default useRandomImages
