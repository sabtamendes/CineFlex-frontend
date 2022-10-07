import axios from "axios";

async function getSections(id) {

    const url = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`;
    try {
        const promise = await axios.get(url);
        return promise.data;

    } catch (error) {
        console.log(error.response.data);
    }
}
export { getSections }

