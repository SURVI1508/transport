import React from 'react'
import styles from '../../styles/allCSS/home.module.css'
import Nav from './Nav'
import Service from './Service'
const Home = () => {
    return (
        <div className={styles.home__main__div}>
           <div className={styles.overlay}>
           <Nav />
<header>
    <div className={styles.main__header__div}>
        <p>SHIP ANYTHING</p>
        <h1>AROUND THE WORLD</h1>
        <button>Get Start</button>
    </div>
</header>
<Service/> 

           </div>
        </div>
    )
}

export default Home




