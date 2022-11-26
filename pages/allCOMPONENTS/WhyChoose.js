import React from 'react'
import styles from '../../styles/allCSS/why.module.css'
const WhyChoose = () => {
    return (
        <div className={styles.Why__main__div}>
            <div className={styles.why__choose__container}>
                <div className={styles.why__heading__box}>
                    <h1 style={{color:"#3a5c95"}}>Why Choose Us?</h1>
                </div>

                <div className={styles.why__choose__content}>

                    <div className={styles.all__image__container}>
                        <div className={styles.image__one}></div>
                        <div className={styles.image__two}></div>
                        <div className={styles.image__three}></div>
                    </div>

                    <div className={styles.why__text__box}>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to d graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typefacdemonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                        <br />
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without d graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typefacrelying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WhyChoose