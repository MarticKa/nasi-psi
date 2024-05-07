import { Link } from "react-router-dom";
import styles from './nasiPsi.module.css';
import ImageGalery from "../components/imageGalery";

const images = [
  "/images/ariana.png",
  "/images/background6.jpg",
  "/images/isaac.jpeg",
  "/images/rose.jpeg",
  "/images/kubus.jpeg",
  "/images/nino.jpeg",
  "/images/whisky.jpeg",
  "/images/IMG_7398.png",
  "/images/ariana.png",
  "/images/background6.jpg",
  "/images/isaac.jpeg",
  "/images/rose.jpeg",
  "/images/kubus.jpeg",
  "/images/nino.jpeg",
  "/images/whisky.jpeg",
  "/images/IMG_7398.png",
  "/images/ariana.png",
  "/images/background6.jpg",
  "/images/isaac.jpeg",
  "/images/rose.jpeg",
  "/images/kubus.jpeg",
  "/images/nino.jpeg",
  "/images/whisky.jpeg",
  "/images/IMG_7398.png",
];

const OurDogs = () => {
  return (
    <>
      <article className={styles.dogs}>
        <div> 
          <Link to="/ariana"> <h2 className={`${styles.invisibleButto} poppins-semibold`}>♀ Ariana of Whisky Vidnavská záře</h2> <img src="/images/ariana.png" alt="" /></Link>
          
        </div>
        <div> 
          <Link to="/queenie"> <h2 className={`${styles.invisibleButto} poppins-semibold`}>♀ Queenie of Rose Vidnavská záře</h2> <img src="/images/queenie.png" alt="" /> </Link>
          
        </div>
        <div> 
          <Link to="/isaac"> <h2 className={`${styles.invisibleButto} poppins-semibold`}>♂ Isaac</h2> <img src="/images/isaac.jpeg" alt="" /></Link>
          
        </div>
      </article>
      <div className={styles.dogsGalery}>
        <h2 className={"poppins-semibold"}>Galerie</h2>
        <ImageGalery images={images} />
      </div>
    </>
  )
}
export default OurDogs;