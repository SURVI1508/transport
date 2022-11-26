import Link from 'next/link'
import React from 'react'
// import { useRouter } from 'next/router'

import styles from '../../styles/allCSS/drawer.module.css'
const Drawer = () => {
    // const router = useRouter()

    const close = () => {
        var drawer = document.getElementById("drawer")
        drawer.style.width = "0px"
    }
    return (
        <div id='drawer' className={styles.drawer__main__div}>
            <button className={styles.drawer__close__btn} onClick={close}>x</button>
            <div className={styles.main__container__all}>
                <div className={styles.drawer__container}>
                    <div className={styles.drawer__link__container}>
                        <div className={styles.avtar__div}>
                            <div className={styles.avtar}><h1>S</h1></div>
                            <div className={styles.avtar__name__mail}>
                                <h3>Survi</h3>
                                <p>survi@gmail.com</p>
                            </div>
                        </div>
                        <div className={styles.links__container__link}>
                            <div className={styles.drawer__link__div}>
                                <h4>🏠</h4>
                                <button className={styles.Link}>Home</button>
                            </div>
                            <div className={styles.drawer__link__div}>
                                <h4>🤔</h4>
                                <Link className={styles.Link} href='/'>About</Link>
                            </div>
                            <div className={styles.drawer__link__div}>
                                <h4>📝</h4>
                                <Link className={styles.Link} href='./Service'>Blog</Link>
                            </div>
                            <div className={styles.drawer__link__div}>
                                <h4>📞</h4>
                                <Link className={styles.Link} href='./allComponent/Footer'>Contact</Link>
                            </div>
                            <button className={styles.logout__btn}>Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drawer