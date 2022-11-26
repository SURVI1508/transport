import React from 'react'
import styles from '../../styles/allCSS/nav.module.css'
import "font-awesome/css/font-awesome.min.css"
// import Scroll from 'react-scroll'
import Link from 'next/link'

const Nav = () => {
    const open = () => {
        const drawer = document.getElementById("drawer")
        drawer.style.width = "230px"
    }


    return (
        <div className={styles.nav__main__div}>
            <div className={styles.nav__container}>
                <div className={styles.brand__logo__info}>

                    <div className={styles.logo__box}><h1>Logo</h1></div>

                    <div className={styles.contact__container}>
                        <div className={styles.contact__box}>
                            <div className={styles.call__icon}><h2></h2></div>
                            <div className={styles.phone__number}>
                                <h5>+91 6204510525</h5>
                                <p>Request to Call Back</p>
                            </div>
                        </div>

                        <div className={styles.location__box}>
                            <div className={styles.call__icon}><h2></h2></div>
                            <div className={styles.phone__number}>
                                <h5>RANCHI</h5>
                                <p>Harmu housing colony </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.nav__links__container}>
                    <div className={styles.link__box}>
                        <Link className={styles.Link} href='/'>Home</Link>
                        <p>Home page</p>
                    </div>
                    <div className={styles.link__box}>
                        <Link className={styles.Link} href='/WhyChoose.js'>About</Link>
                        <p>Home page</p>
                    </div>
                    <div className={styles.link__box}>
                        <Link className={styles.Link} href='/Unmachedservice'>Blog</Link>
                        <p>Home page</p>
                    </div>
                    <div className={styles.link__box}>
                        <Link className={styles.Link} href='/Serviceplace'>Service</Link>
                        <p>Home page</p>
                    </div>
                    <div className={styles.link__box}>
                        <Link className={styles.Link} href='//allCOMPONENTS/Unmachedservice'>Category</Link>
                        <p>Home page</p>
                    </div>
                    <div className={styles.link__box}>
                        <Link className={styles.Link} href='/allCOMPONENTS/Service'>Plan</Link>
                        <p>Home page</p>
                    </div>
                    <div className={styles.link__box}>
                        <Link className={styles.Link} href='/'>contact us</Link>
                        <p>Home page</p>
                    </div>
                </div>
            </div>
            <div onClick={open} className={styles.menue__btn}><i style={{ color: "#027afabb" }} className="fa fa-bars"></i></div>
        </div>
    )
}

export default Nav
{/* <i class="fa-solid fa-bell"></i> */ }