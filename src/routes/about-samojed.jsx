import { Link } from "react-router-dom";
import "../poppins.css";
import "../index.css";
import "../App.css";
import styles from "./about.module.css";

const About = () => {
  return (
    <>
      <article className={styles.boxes}>
        <div className={styles.hoverDiv}>
          <div className={styles.iconWrapper}>
            <img className={styles.icons} src="/images/dog11.png" alt="" /></div>
          <h2 className="poppins-semibold">Standard</h2>
          <p className="poppins-light">
            Plemenný standard popisuje všechny požadavky, které jsou kladeny na
            ideálního jedince daného plemene. Tedy co nejpřesněji popisuje
            vzhled ideálního představitele daného plemene.
          </p>
          <Link to="/practic">
          
            <h5 className={`${styles.button} poppins-medium`}>
              Více informací <img src="/images/arrow1.png" alt="" />
            </h5>
          </Link>
        </div>

        <div className={styles.hoverDiv}>
          <div className={styles.iconWrapper}>
            <img className={styles.icons} src="/images/dog2.png" alt="" /></div>
          <h2 className="poppins-semibold">Zdraví</h2>
          <p className="poppins-light">
            Jak se starat o samojeda, aby byl po celý svůj život zravý a mohl
            být s námi v rodině co nejdéle. Není to jen o kvalitních granulích a
            jednoroční návštěvě veterináře.
          </p>
          <Link to="/health">
           
            <h5 className={`${styles.button} poppins-medium`}>
              Více informací <img src="/images/arrow1.png" alt="" />
            </h5>
          </Link>
        </div>

        <div className={styles.hoverDiv}>
          <div className={styles.iconWrapper}>
            <img className={styles.icons} src="/images/dog3.png" alt="" /></div>
          <h2 className="poppins-semibold">Sport</h2>
          <p className="poppins-light">
            Možná máte ambice se samojedem sportovat, ne všechny sporty jsou pro
            něj vhodné, myslete vždy na jeho původ a pro jaké aktivity byl
            vyšlechtěn. Určitě ale mile překvapí, co všechno zvládá.
          </p>
          <Link to="/sport">
          
            <h5 className={`${styles.button} poppins-medium`}>
              Více informací <img src="/images/arrow1.png" alt="" />
            </h5>
          </Link>
        </div>
      </article>
    </>
  );
};
export default About;
