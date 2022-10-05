import  axios  from "axios";



async function getSections(id) {
    console.log(id)
    const url = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`;
    try {
        const promise = await axios.get(url)
        return promise.data
    } catch (error) {
        console.log(error.response.data);
    }
}
export { getSections}

