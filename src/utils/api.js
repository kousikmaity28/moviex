import axios from "axios"
const BASE_URL="https://api.themoviedb.org/3/";
const TMDB_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTEzOGU0MGUwOTE4ZWQ3OWQ5OGM0OTQ1MGM4MWEzNSIsInN1YiI6IjY0ZmM0N2I2ZGI0ZWQ2MTAzNDNkZWRiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-5xww3jII5Lb3cdm_spaEoMwXY-1NtwFysubKEOrbc8";

const headers={
    Authorization:"bearer " + TMDB_TOKEN
}

export const FetchApidata=async(url,params)=>{
    try {
        const {data}= await axios.get(BASE_URL + url,
            {headers,params}
        )
        return data;
    } catch (error) {
        console.log(error)
        return error
    }

}