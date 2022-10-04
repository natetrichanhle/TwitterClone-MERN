import React from 'react'

import logo from '../static/images/twitterlogo.webp'
import styles from '../static/css/Home.module.css'

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.outerColumn}>
                <img src={logo} alt="logo" className={styles.logo}/>
            </div>
            <div className={styles.insideColumn}>
                <h1>Home</h1>
            </div>
            <div className={styles.outerColumn}>
                <h1>Search</h1>
            </div>
        </div>
    )
}

export default Home