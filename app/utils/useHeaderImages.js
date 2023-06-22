import axios from 'axios'
import useSWR from 'swr'

const fetcher = (...args) => axios.get(...args).then(res => res.data)

 const useHeaderImages = (query, amount) => {
     const url = ` http://192.168.199.40:3000/api/unsplash?query=${query}&per_page=${amount}`;
     const { data, error, isLoading } = useSWR(url, fetcher, {
         revalidateIfStale: false,
         revalidateOnFocus: false,
         revalidateOnReconnect: false
     })
    return {data,error,isLoading}
}
export default useHeaderImages

