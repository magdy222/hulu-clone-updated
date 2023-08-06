import axios from "axios";

const BASE_URL = "https://image.tmdb.org/t/p/original/"
const API_KEY = process.env.API_KEY

const MovieDetails = () => {
  return (
    <div>MovieDetails</div>
  )
}

export default MovieDetails

/*export async function getStaticProps (){
    const res = await axios(`${BASE_URL}/popular?api_key=${API_KEY}&language=en-US&page=1`)
    const movie = res.data;


    return{
        props: {movie}
    }
}

export async function getStaticPaths(){
    const res = await fetch(`${BASE_URL}/popular?api_key=${API_KEY}&language=en-US&page=1`)
    const data = await res.json();
    const movies = data.results;
    
    console.log(movies)

    const ids = movies.map(movie => movie.id)
    const paths = ids.map(id => ({ params: {id : id.toString()} }))

    console.log(paths);

    return{
        paths,
        fallback: false
    }
}*/