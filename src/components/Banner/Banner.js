import React, { useEffect, useState } from 'react'
import styles from './Banner.module.css'
import banner from '../../images/banner.png'
import requests from '../../api/requests'
import axiosInstance from '../../api/axios'

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(()=>{
    async function fetchData() {
      const request=await axiosInstance.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)]);
    }
    fetchData()
  },[])
  console.log(movie);
  //https://i1.wp.com/2.bp.blogspot.com/_o31CLSHm6KA/TA8B2Cp026I/AAAAAAAAAFM/Je4jEiWYRWo/s1600/Inception+banner+1.jpg
  return (
    <header className={styles.banner} style={{
        backgroundImage: `url(https://www.themoviedb.org/t/p/original${movie?.backdrop_path})`,
        backgroundSize:'cover',
        backgroundPosition:'center',        
    }}>
        <div className={styles.bannerInfo}>
            <h1 className={styles.title}>{movie?.name}</h1>
            <div className={styles.btns}>
                <button className={styles.btn}>Play</button>
                <button className={styles.btn}>My List</button>
            </div>
            <p className={styles.desc}>
             {movie?.overview}
            </p>
        </div>
        <div className={styles.bannerBotton}></div>
    </header>
  )
}

export default Banner