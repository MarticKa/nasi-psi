import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>

    <p className="poppins-extralight">Důležité odkazy:</p>


    <div className={styles.links}>
      <div className={styles.importantLinks}>
        <a target="_blank" href="https://www.cmku.cz">
          <img src="images/cmku-logo.png" width="50" height="80" alt="Českomoravská kynologická unie" />
        </a>
        <a target="_blank" href="https://www.samojedi-cz.cz">
          <img src="images/samojedi-logo.png" width="90" height="80" alt="Sdružení Samojedi-cz" />
        </a>
        <a target="_blank" href="https://www.polardogs.cz">
          <img src="images/polar-logo.png" width="121" height="73" alt="Klub severských psů" />
        </a>
      </div>
      <div className={styles.space}>

      </div>
      <div className={styles.contactSocial}>
        <a target="_blank" href="https://www.instagram.com/arianaofwhisky/">
          <img src="images/instagram-logo.png" width="30" height="30" alt="Instagram" />
        </a>
        <a target="_blank" href="https://www.facebook.com/marticka.kucharova">
          <img src="images/facebook-logo.png" width="30" height="30" alt="Facebook" />
        </a>
        <a target="_blank" href="https://wa.me/+420728704422">
          <img src="images/whatsapp-logo.png" width="30" height="30" alt="Whatsapp" />
        </a>
      </div>
    </div>
  </footer>
    )
}
export default Footer;