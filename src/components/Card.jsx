import React from 'react';
import '../style/components/Card.css';

const Card = ({ movie }) => {

    const ImgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
            <section className="Card" >
                {<img src={ImgUrl} alt={movie.title} width='230' height='345' />}
                <div className='Card-title'><div className='Card-title-span'>{!movie.title ? movie.name : movie.title}</div></div>
            </section>
    )
}

export { Card };