import { Link } from "react-router-dom";
import styles from './nasiPsi.module.css';
import ImageGalery from "../components/imageGalery";

const images = [
  "/images/ariana.png",
  "/images/isaac.jpeg",
  "/images/queenie30.jpeg",
  "/images/galerie.jpeg",
  "/images/galerie2.jpeg",
  "/images/galerie3.jpeg",
  "/images/galerie4.jpeg",
  "/images/galerie5.jpeg",
  "/images/galerie6.jpeg",
  "/images/galerie7.jpeg",
  "/images/galerie8.jpeg",
  "/images/galerie9.jpeg",
  "/images/galerie10.jpeg",
  "/images/galerie11.jpeg",
  "/images/galerie12.jpeg",
  "/images/galerie13.jpeg",
  "/images/galerie14.jpeg",
  "/images/galerie15.jpeg",
  "/images/galerie16.jpeg",
  
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
        <div> 
          <Link to="/lilith"> <h2 className={`${styles.invisibleButto} poppins-semibold`}>♀ Follow the Light "Lilith" Woven by Frigg </h2> <img src="/images/lili.jpeg" alt="" /></Link>
          
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