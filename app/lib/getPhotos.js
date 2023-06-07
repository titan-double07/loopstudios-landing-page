import axios from 'axios'

const getPhotos = async (query,amount) => {
    const res = await axios(`http://localhost:3000/api/unsplash?query=${query}&per_page=${amount}`);
    const photos = res.data
    return photos
}

export default getPhotos