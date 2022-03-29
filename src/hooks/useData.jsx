import { useEffect, useState } from "react";
import initialState from "../initialState.js";
import { Get } from "./Get";

const useData = () => {

    const [movies, setMovies] = useState([]);
    const [genres , setGenres] = useState([]);
    const [loading, setLoading] = useState(true);
    const [state , setState] = useState(initialState);
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

    //selecciona la pelicula seleccionada
    const selectMovie = payload => {
        setState({
            ...state,
            selectedMovie: [payload],
        });
        console.log(state);
    }

    return (
        {
            movies,
            loading,
            genres,
            selectMovie,
            state,
        }
    )
};

export { useData };