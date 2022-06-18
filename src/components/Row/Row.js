import React, { createRef, useEffect, useRef, useState } from 'react'
import axiosInstance from '../../api/axios'
import styles from './Row.module.css'
const Row = ({fetchUrl,title,isLarge=false}) => {
    const [movies, setMovies] = useState([])
    const moviesRef=createRef()
    useEffect(()=>{
        async function fetchMovies() {
            const request=await axiosInstance(fetchUrl)
            setMovies(request.data.results)
        }
        fetchMovies()
    },[fetchUrl])
    console.log(movies);
  return (
    <div className={styles.rowContainer}>
        <label onClick={()=>moviesRef.current.focus()} htmlFor={'movies'+title} className={styles.title}>{title}</label>
        <div ref={moviesRef} className={styles.movies}>
            {movies.map(movie => (
               <div  key={movie.id} className={styles.movieItem}>
                 <img alt={movie?.title||'ali'} height={isLarge?220:150} src={'https://www.themoviedb.org/t/p/original'+movie?.poster_path} />
               </div>
            ))}
        </div>
    </div>
  )
}

export default Row