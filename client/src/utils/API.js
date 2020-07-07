import axios from "axios";


export default {
    getSearch: (search) => {
        return axios.get("/api/books/search/" + search);
    }
};