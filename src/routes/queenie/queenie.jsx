import { Link } from "react-router-dom";
import styles from "./queenie.module.css"
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

const Queenie = () => {
    return (
        <div className={styles.queenieContent}>

            <h1 className={"poppins-extrabold"}>Queenie of Rose Vidnavská záře</h1>
            <article className={styles.queenieContentInfo}>
                <img src="/images/queenie.png" alt="" />
                < div className={styles.details}>
                    <p className={`${styles.sex} poppins-extralight`}>♀ fenka <time className={styles.bonitace}>neuchovněna</time></p>

                    <table frame="void" rules="none" className={`${styles.detailsTable} poppins-regular`}>
                        <tbody>
                            <tr>
                                <th>Datum narození:</th>
                                <td>17.4.2017</td>
                            </tr>
                            <tr>
                                <th>Výška:</th>
                                <td>51,3 cm</td>
                            </tr>
                            <tr>
                                <th>Zdraví:</th>
                                <td>od narození zakřivení posledních obratlů ocásku</td>
                            </tr>
                            <tr>
                                <th>Speciální vlastnosti:</th>
                                <td>dámička, rozumná, má ráda svůj klid, vyžaduje blízkost </td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <Link to="/queenie#shows">
          
                            <h5 className={`${styles.shows} poppins-medium`}>
                                Výsledky výstav <img src="/images/arrow1.png" alt="" />
                            </h5>
                        </Link>
                    </div>

                </div >
            </article>
            <div>
                <h2 className={"poppins-semibold"}>Galerie</h2>
                <ImageGalery images={images} />
            </div>

            <div>
                <h2 className={"poppins-semibold"}>Rodiče</h2>
                <div className={styles.parents}>
                    <div className={styles.momContent}>
                        <h3 className={"poppins-semibold"}>♀ Arctic Aivik Furry Rose Vidnavská záře</h3>
                        <div className={"poppins-extralight"}>Matka</div>
                        <table frame="void" rules="none" className={`${styles.detailsTable} poppins-regular`}>
                            <tbody>
                                <tr>
                                    <th>Datum narození:</th>
                                    <td>22.5.2012</td>
                                </tr>
                                <tr>
                                    <th>Výška:</th>
                                    <td>54 cm</td>
                                </tr>
                                <tr>
                                    <th>Zdraví:</th>
                                    <td>DKK A/A; DLK 0/0; DOV neg</td>
                                </tr>
                                <tr>
                                    <th>Ocenění:</th>
                                    <td>Český junior šampion, Český šampion, Český Grand šampion</td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>Slovenský junior šampion, Slovenský šampion</td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>Polský junior šampion, Polský šampion </td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>ČMKU šampion</td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>Interšampion</td>
                                </tr>
                            </tbody>
                        </table>
                        <img className={styles.imgMom} src="/images/rose.jpeg" alt="" />
                    </div>
                    <div className={styles.dadContent}>
                        <h3 className={"poppins-semibold"}>♂ Winnie the pooh of Yarak The glow of the snowy star</h3>
                        <div className={"poppins-extralight"}>Otec</div>
                        <table frame="void" rules="none" className={`${styles.detailsTable} poppins-regular`}>
                            <tbody>
                                <tr>
                                    <th>Datum narození:</th>
                                    <td>31.7.2015</td>
                                </tr>
                                <tr>
                                    <th>Výška:</th>
                                    <td>56 cm</td>
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
                                    <td>Champion junior Litva </td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>Champion junior Slovenska</td>
                                </tr>
                            </tbody>
                        </table>
                        <img className={styles.imgDad} src="/images/kubus.jpeg" alt="" />
                    </div>
                </div>
            </div>

            <div className={styles.results}>
                <h2 className={"poppins-semibold"} id="shows">Výsledky výstav</h2>

                <p>Plánujeme 2025, třída veteránů</p>
                <h3>- třída mimo konkurenci -</h3>
                <p>20.4.2024, Czech Northern Cup - klubová, Andrzej Szutkiewicz, PL</p>
                    <p>strong female, very temperament, good size, excellent type, excellent head, good pigmentation, good top and bottom line, correct angulation, correct coat, not correct tail construction, little bit cow hooks rear legs</p>
                <p>21.4.2024, Czech Northern Cup - klubová, Elaine Walker, IR</p>
                    <p>7 y.o.female, very pretty head, nice thick ears, nice neck, correct topline, good angles, nice substance and feet, good coat carrying, a little extra weight today, moves well, excellent temperament</p>
            </div>

        </div >
    )
}

export default Queenie;