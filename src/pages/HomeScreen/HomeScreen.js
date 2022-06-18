import React from 'react'
import requests from '../../api/requests'
import { Nav,Banner, Row } from '../../components'
import styles from './HomeScreen.module.css'
const HomeScreen = () => {
  return (
    <div className={styles.homeScreen}>
        <Banner/>

        <Row
        title="Netflix_Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
        />
        <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}/>
        <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}/>
        <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}/>
        <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}/>
        <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}/>
        <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}/>
        <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default HomeScreen