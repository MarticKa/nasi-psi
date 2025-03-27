import { Link } from "react-router-dom";
import "../../poppins.css";
import styles from "./lilith.module.css"
import Shows from "./resultShows";
import ImageGalery from "../../components/imageGalery";

const images = [
    "/images/lili.jpeg",
   "/images/lili2.jpeg",
   "/images/lili3.jpeg",
   "/images/lili4.jpeg",
   "/images/lili5.jpeg",
   "/images/lili6.jpeg",
   "/images/lili7.jpeg",
   "/images/lili8.jpeg",
   "/images/lili9.jpeg",
   "/images/lili10.jpeg",
   "/images/lili11.jpeg",
   "/images/lili12.jpeg",
  ];


const Lilith = () => {
    return (
        <div className={styles.arianaContent}>

            <h1 className={"poppins-extrabold"}>Follow the Light Woven by Frigg</h1>
            <article className={styles.arianaContentInfo}>
                <img src="/images/lili.jpeg" alt="" />
                < div className={styles.details}>
                    <div className={styles.sex}>
                        <p className={`${styles.sex} poppins-extralight`}></p>
                        <p className={`${styles.bonitace} poppins-extralight`}>♀ fenka </p></div>
                    

                    <table frame="void" rules="none" className={`${styles.detailsTable} poppins-regular`}>
                        <tbody>
                            <tr>
                                <th>Datum narození:</th>
                                <td>3.11.2024</td>
                            </tr>
                            <tr>
                                <th>Výška:</th>
                                <td>40 cm</td>
                            </tr>
                            <tr>
                                <th>Zdraví:</th>
                                <td>bude doplněno</td>
                            </tr>
                            <tr>
                                <th>Dogtrek:</th>
                                <td>od 18 měsíců začne</td>
                            </tr>
                            <tr>
                                <th>Získané tituly:</th>
                                <td>Best Draucula široko daleko</td>
                            </tr>
                            <tr>
                                <th>Speciální vlastnosti:</th>
                                <td>temperamentní, hravá, občas nebezpečná, plná energie stále, mist světa ve skoku vysokém </td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <Link to="/ariana#shows">
          
                            <h5 className={`${styles.shows} poppins-medium`}>
                                Výsledky výstav <img src="/images/arrow1.png" alt="" />
                            </h5>
                        </Link>
                    </div>

                </div >
            </article>
            <div>
                <div>
                    <h2 className={"poppins-semibold"}>Galerie</h2>
                    <ImageGalery images={images} />
                </div>
            </div>

            <div>
                <h2 className={"poppins-semibold"}>Rodiče</h2>
                <div className={styles.parents}>
                    <div className={styles.momContent}>
                        <h3 className={"poppins-semibold"}>♀ Vanja Svenja of Sami's Legacy</h3>
                        <div className={"poppins-extralight"}>Matka</div>
                       
                    </div>
                    <div className={styles.dadContent}>
                        <h3 className={"poppins-semibold"}>♂ Elluniia's Follow the Dream</h3>
                        <div className={"poppins-extralight"}>Otec</div>
                        
                    </div>
                </div>
                <img className={styles.imgDad} src="/images/laphundParents.jpeg" alt="" />

            </div>

            <div className={styles.showsAriana}>
                <h2 className={"poppins-semibold"} id="shows">Výsledky výstav</h2>

                <Shows />
            </div>

        </div >
    )
}

export default Lilith;