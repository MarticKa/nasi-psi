import { Link } from "react-router-dom";
import "../../poppins.css";
import styles from "./ariana.module.css"
import Shows from "./resultShows";
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


const Ariana = () => {
    return (
        <div className={styles.arianaContent}>

            <h1 className={"poppins-extrabold"}>Ariana of Whisky Vidnavská záře</h1>
            <article className={styles.arianaContentInfo}>
                <img src="/images/ariana.png" alt="" />
                < div className={styles.details}>
                    <div className={styles.sex}>
                        <p className={`${styles.sex} poppins-extralight`}> <img src="/images/female.png" alt="" /></p>
                        <p className={`${styles.bonitace} poppins-extralight`}>fenka <time>bonitace 9/2024</time></p></div>
                    

                    <table frame="void" rules="none" className={`${styles.detailsTable} poppins-regular`}>
                        <tbody>
                            <tr>
                                <th>Datum narození:</th>
                                <td>17.8.2022</td>
                            </tr>
                            <tr>
                                <th>Výška:</th>
                                <td>52,5 cm</td>
                            </tr>
                            <tr>
                                <th>Zdraví:</th>
                                <td>DKK A/A; DLK 0/0; OCD clear</td>
                            </tr>
                            <tr>
                                <th>Dogtrek:</th>
                                <td>Zde jsou lvi, 31.3.2024, 41km</td>
                            </tr>
                            <tr>
                                <th></th>
                                <td>Šlapanický vlk, 14.4.2024, 46km</td>
                            </tr>
                            <tr>
                                <th></th>
                                <td>Krušnohorský dogtrek, 28.4.2024, 92km</td>
                            </tr>
                            <tr>
                                <th></th>
                                <td>V Srdci česka, 2.6.2024, 50km</td>
                            </tr>
                            <tr>
                                <th>Získané tituly:</th>
                                <td>Krajský vítěz 2024</td>
                            </tr>
                            <tr>
                                <th></th>
                                <td>2.místo BIS</td>
                            </tr>
                            <tr>
                                <th></th>
                                <td>TD, Pracovní certifikát, 229km</td>
                            </tr>
                            <tr>
                                <th>Speciální vlastnosti:</th>
                                <td>jemně piškotové ouška, trpělivá, velmi mazlivá, postelová, spáč, učenlivá </td>
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
                        <h3 className={"poppins-semibold"}>♀ Whisky of Pink Vidnavská záře</h3>
                        <div className={"poppins-extralight"}>Matka</div>
                        <table frame="void" rules="none" className={`${styles.detailsTable} poppins-regular`}>
                            <tbody>
                                <tr>
                                    <th>Datum narození:</th>
                                    <td>15.7.2020</td>
                                </tr>
                                <tr>
                                    <th>Výška:</th>
                                    <td>51,5 cm</td>
                                </tr>
                                <tr>
                                    <th>Zdraví:</th>
                                    <td>DKK A/A; DLK 0/0; BEAR +/+; DOV neg</td>
                                </tr>
                                <tr>
                                    <th>Ocenění:</th>
                                    <td>Český junior šampion</td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>Best of Juniors</td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>CAC, res.CAC </td>
                                </tr>
                            </tbody>
                        </table>
                        <img className={styles.imgMom} src="/images/whisky.jpeg" alt="" />
                    </div>
                    <div className={styles.dadContent}>
                        <h3 className={"poppins-semibold"}>♂ Nobody stop me Chatanga</h3>
                        <div className={"poppins-extralight"}>Otec</div>
                        <table frame="void" rules="none" className={`${styles.detailsTable} poppins-regular`}>
                            <tbody>
                                <tr>
                                    <th>Datum narození:</th>
                                    <td>19.2.2016</td>
                                </tr>
                                <tr>
                                    <th>Výška:</th>
                                    <td>57 cm</td>
                                </tr>
                                <tr>
                                    <th>Zdraví:</th>
                                    <td>DKK A/A; DLK 0/0; DOV neg</td>
                                </tr>
                                <tr>
                                    <th>Ocenění:</th>
                                    <td>Champion Rumunska</td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>Champion Polska</td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>Champion Slovenska </td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>Champion junior Slovenska</td>
                                </tr>
                            </tbody>
                        </table>
                        <img className={styles.imgDad} src="/images/nino.jpeg" alt="" />
                    </div>
                </div>
            </div>

            <div className={styles.showsAriana}>
                <h2 className={"poppins-semibold"} id="shows">Výsledky výstav</h2>
                <p className="poppins-extralight">náše cíle: pracovní certifikát, Šampion Česko, Šampion Slovensko, Grand šampion Slovensko, Šampion Polsko, Šampion Finsko, Šampion Nizozemí, Šampion Chorvatsko</p>

                <Shows />
            </div>

        </div >
    )
}

export default Ariana;