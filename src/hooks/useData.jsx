import { useEffect, useState } from "react";
import { Get } from "./Get";

const useData = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Get().then(data => {
            setMovies(data.results);
            setLoading(false);
            console.log(data.results);
        });
    }, [])

    return (
        {
            movies,
            loading
        }
    )
};

export { useData };