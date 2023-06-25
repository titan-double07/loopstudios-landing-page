
import axios from 'axios'
import useSWR from 'swr'

const fetcher = (...args) => axios.get(...args).then(res => res.data)

const useRandomImages = (query, count) => {
    const url = `/api/randomImages?query=${query}&count=${count}`;
    const { data, error, isLoading } = useSWR(url, fetcher)
    return { data, error, isLoading }
}

export default useRandomImages
