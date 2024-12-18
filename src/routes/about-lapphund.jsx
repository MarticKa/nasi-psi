import { Link } from "react-router-dom";
import "../poppins.css";
import "../index.css";
import "../App.css";
import styles from "./about.module.css";

const AboutLap = () => {
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
          <Link to="/standard-lapphund">

            <h5 className={`${styles.button} poppins-medium`}>
              Více informací <img src="/images/arrow1.png" alt="" />
            </h5>
          </Link>
        </div>

        {/*<div className={styles.hoverDiv}>
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
        </div>*/}

        <div className={styles.hoverDiv}>
          <div className={styles.iconWrapper}>
            <img className={styles.icons} src="/images/dog3.png" alt="" /></div>
          <h2 className="poppins-semibold">Sport</h2>
          <p className="poppins-light">
            Švédský laponský pes je skvělý parťák ke sportu, bude vám za jakoukoli aktivitu vděčný. Je to hodně aktivní pes a můžete tak vybírat z řady sportů.
          </p>
          <Link to="/sport-lapphund">

            <h5 className={`${styles.button} poppins-medium`}>
              Více informací <img src="/images/arrow1.png" alt="" />
            </h5>
          </Link>
        </div>
      </article>
    </>
  );
};
export default AboutLap;
