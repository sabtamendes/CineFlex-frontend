import axios from "axios";

const url = "https://mock-api.driven.com.br/api/v5/cineflex/movies";

async function getMovies() {
    try {
        const promise = await axios.get(url)
        return promise.data
    } catch (error) {
        console.log(error.response.data);
    }
}
export { getMovies }