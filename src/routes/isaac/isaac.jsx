import { Link } from "react-router-dom";
import "../../poppins.css";
import "../../index.css";
import "../../App.css";
import styles from "./isaac.module.css"
import ImageGalery from "../../components/imageGalery";

const images = [
   "/images/izous.jpeg",
    "/images/isaac.jpeg",
    "/images/izous2.jpeg",
    "/images/izous3.jpeg",
    
  ];

const Isaac = () => {
    return (
        <div className={styles.isaacContent}>
            <h1 className={"poppins-extrabold"}>Isaac</h1>
            <article className={styles.isaacContentInfo}>
                <img src="/images/isaac.jpeg" alt="" />
                < div className={styles.details}>
                    <p className={`${styles.sex} poppins-extralight`}>♂ pes <time className={styles.bonitace}>bez PP</time></p>

                    <table frame="void" rules="none" className={`${styles.detailsTable} poppins-regular`}>
                        <tbody>
                            <tr>
                                <th>Datum narození:</th>
                                <td>8.11.2021</td>
                            </tr>
                            <tr>
                                <th>Výška:</th>
                                <td>49,3 cm</td>
                            </tr>
                            <tr>
                                <th>Speciální vlastnosti:</th>
                                <td>sporťák, oddaný chytání talíře, submisivní povaha </td>
                            </tr>
                        </tbody>
                    </table>

                </div >
            </article>
            <div>
                <h2 className={"poppins-semibold"}>Galerie</h2>
                <ImageGalery images={images} />
            </div>

        </div >
    )
}

export default Isaac;