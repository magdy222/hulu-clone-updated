import axios from "axios";

const BASE_URL = "https://image.tmdb.org/t/p/original/"
const API_KEY = process.env.API_KEY

const MovieDetails = () => {
  return (
    <div>MovieDetails</div>
  )
}

export default MovieDetails

export async function getStaticProps (){
    const res = await axios(`${BASE_URL}/popular?api_key=${API_KEY}&language=en-US&page=1`)
    const movie = res.data;


    return{
        props: {movie}
    }
}

export async function getStaticPaths(){
    const res = await axios(`${BASE_URL}/popular?api_key=${API_KEY}&language=en-US&page=1`)
    const movies = res.data.results;


    const ids = movies.map(movie => movie.id)
    const paths = ids.map(id => ({ params: {id : id.toString()} }))

    return{
        paths,
        fallback: false
    }
}