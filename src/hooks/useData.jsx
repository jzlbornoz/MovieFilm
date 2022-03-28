import { useEffect, useState } from "react";
import { Get } from "./Get";

const useData = () => {

    const [movies, setMovies] = useState([]);
    const [genres , setGenres] = useState([]);
    const [loading, setLoading] = useState(true);
    const callMovies = "/discover/movie";
    const callGenres = '/genre/movie/list';

    //Me trae las peliculas
    useEffect(() => {
        Get(callMovies).then(data => {
            setMovies(data.results);
            setLoading(false);
            console.log(data.results);
        });
    }, [])

    //Me trae las categorias
    useEffect(() => {
        Get(callGenres).then(data => {
            setGenres(data.genres);
            setLoading(false);
            console.log(data.genres);
        });
    }, [])

    return (
        {
            movies,
            loading,
            genres
        }
    )
};

export { useData };