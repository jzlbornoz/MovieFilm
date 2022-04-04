import { useEffect, useRef, useState } from "react";
import initialState from "../initialState.js";
import { Get } from "./Get";

const useData = () => {

    const [movies, setMovies] = useState([]);
    const [series , setSeries] = useState([]);
    const [genres , setGenres] = useState([]);
    const [loading, setLoading] = useState(true);
    const [state , setState] = useState(initialState);
    const [search , setSearch] = useState('');
    const callMovies = "/discover/movie";
    const callSeries = '/discover/tv'
    const callGenres = '/genre/movie/list';

    //Me trae las peliculas
    useEffect(() => {
        Get(callMovies).then(data => {
            setMovies(data.results);
            setLoading(false);
            console.log(data.results);
        });
    }, [])

    //Me trae las series
    useEffect(() => {
        Get(callSeries).then(data => {
            setSeries(data.results);
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

    const inputRef = useRef(null);
    const handleSearch = () => {
        setSearch(inputRef.current.value)
    };

    const filteredMovies = movies.filter(item => (
        item.title.toLowerCase().includes(search.toLowerCase())
    )); 

    const filteredSeries = series.filter( item => (
        item.name.toLowerCase().includes(search.toLocaleLowerCase())
    ))

    return (
        {
            movies,
            loading,
            genres,
            selectMovie,
            state,
            search,
            inputRef,
            filteredMovies,
            handleSearch,
            filteredSeries,
        }
    )
};

export { useData };