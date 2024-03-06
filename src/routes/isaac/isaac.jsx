import { Link } from "react-router-dom";
import styles from "./isaac.module.css"
import ImageGalery from "../../components/imageGalery";

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

const Isaac = () => {
    return (
        <div className={styles.content}>
            <h1>Isaac</h1>
            <article className={styles.imgContent}>
                <img src="/images/isaac.jpeg" alt="" />
                < div className={styles.details}>
                    <p className={styles.sex}>♂ pes <time className={styles.bonitace}>bez PP</time></p>

                    <table frame="void" rules="none" className={styles.detailsTable}>
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
                <h2>Galerie</h2>
                <ImageGalery images={images} />
            </div>

            <div>
                <h2>Rodiče</h2>
                <div className={styles.parents}>neznámí, původ SK</div>
            </div>

        </div >
    )
}

export default Isaac;