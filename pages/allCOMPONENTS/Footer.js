import Link from 'next/link'
import styles from '../../styles/allCSS/footer.module.css'
const Footer = () => {
    return (
        <div id='footer' className={styles.footer__main__div}>
            <div className={styles.footer__container}>
                <div className={styles.footer__div__one}>
                    <div className={styles.logo__footer}><h1>LOGO</h1></div>
                    <p>In publishing aic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typefacrelying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>

                    <div className={styles.social__media__links}>
                        <div className={styles.facebook}><i className="fa fa-facebook-f"></i></div>
                        <div className={styles.twitter}><i className="fa fa-twitter"></i></div>
                        <div className={styles.linkedin}><i className="fa fa-linkedin"></i></div>
                    </div>
                </div>
                <div className={styles.all__links}>
                    <h3>CONTACT</h3>
                    <Link className={styles.Link} href='/'>Home</Link>
                    <Link className={styles.Link} href='/'>About</Link>
                    <Link className={styles.Link} href='/'>Blog</Link>
                    <Link className={styles.Link} href='/'>Skill</Link>
                    <Link className={styles.Link} href='/'>Category</Link>
                    <Link className={styles.Link} href='/'>Contact</Link>
                </div>
                <div className={styles.all__links}>
                    <h3>CONTACT</h3>
                    <Link className={styles.Link} href='/'>Home</Link>
                    <Link className={styles.Link} href='/'>About</Link>
                    <Link className={styles.Link} href='/'>Blog</Link>
                    <Link className={styles.Link} href='/'>Skill</Link>
                    <Link className={styles.Link} href='/'>Category</Link>
                    <Link className={styles.Link} href='/'>Contact</Link>
                </div>
                <div className={styles.footer__input}>
                    <h3>CONTACT</h3><br />
                    <p>Get in Touch with me or company Inform of a document or a typeface without relying on meaningful </p>
                    <br />
                    <div className={styles.input__fld}>
                        <input placeholder='E-mal' name='mail' />
                        <Link href="/"><button >Send</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer