import React from 'react'
import styles from '../styles/allCSS/servicePlace.module.css'
const Serviceplace = () => {
    return (
        <div className={styles.service__place__mani__div}>
            <div className={styles.service__place__container}>

                <div className={styles.service__place__mani__text}>
                    <h1 style={{color:"#3a5c95"}}>Freight Company With a Difference Innovation.</h1><br />
                    <p>In puby used to demonstrate the visual form of a document or a typeface witlishing aphic design, Lorem ipsum is a placeholder textdocument or a typeface witlishing aphic design, Lorem ipsum is a placeholder text commonnd graphic design, Lorem ipsum is a placeholder text commonlhout relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                   
                    <h3>Sourav Gupta</h3>
                    <p>Cheif Maneger</p>
                </div>

                <div className={styles.service__place__mani__description}>
                    <div className={styles.place__image}><img src='https://images.pexels.com/photos/2144905/pexels-photo-2144905.jpeg?auto=compress&cs=tinysrgb&w=600' alt='pic' /></div>
                    <h3 style={{ padding: "10px 0",color:"#3a5c95" }}>Salt Lake</h3>
                    <p>In publishing aic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typefacrelying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                    <button style={{fontWeight:"700"}}>→</button>
                </div>

                <div className={styles.service__place__mani__description}>
                    <div className={styles.place__image}><img src='https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=600' alt='pic' /></div>
                    <h3 style={{ padding: "10px 0",color:"#3a5c95" }}>Salt Lake</h3>
                    <p>In publishing aic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typefacrelying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                    <button>▶️</button>
                </div>
            </div>
        </div>
    )
}

export default Serviceplace