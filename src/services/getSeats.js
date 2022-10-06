import  axios  from "axios";

async function getSeats(id) {

    const url = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`;
    try {
        const promise = await axios.get(url)
        return promise.data
    } catch (error) {
        console.log(error.response.data);
    }
}
export { getSeats}
