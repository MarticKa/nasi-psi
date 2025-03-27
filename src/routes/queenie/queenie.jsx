import { Link } from "react-router-dom";
import "../../poppins.css";
import "../../index.css";
import "../../App.css";
import styles from "./queenie.module.css"
import ImageGalery from "../../components/imageGalery";

const images = [
    "/images/queenie.png",
    "/images/queenie2.jpeg",
    "/images/queenie3.jpeg",
    "/images/queenie4.jpeg",
    "/images/queenie5.jpeg",
    "/images/queenie6.jpeg",
    "/images/queenie7.jpeg",
    "/images/queenie8.jpeg",
    "/images/queenie9.jpeg",
    "/images/queenie10.jpeg",
    "/images/queenie11.jpeg",
    "/images/queenie12.jpeg",
    "/images/queenie13.jpeg",
    "/images/queenie14.jpeg",
    "/images/queenie15.jpeg",
    "/images/queenie16.jpeg",
    "/images/queenie17.jpeg",
    "/images/queenie18.jpeg",
    "/images/queenie19.jpeg",
    "/images/queenie20.jpeg",
    "/images/queenie21.jpeg",
    "/images/queenie22.jpeg",
    "/images/queenie23.jpeg",
    "/images/queenie24.jpeg",
    "/images/queenie25.jpeg",
    "/images/queenie26.jpeg",
    "/images/queenie27.jpeg",
    "/images/queenie28.png",
    "/images/queenie29.jpeg",
    "/images/queenie30.jpeg",
    "/images/queenie31.jpeg",
    "/images/queenie32.jpeg",
    "/images/queenie33.jpeg",
    "/images/queenie34.jpeg",
    "/images/queenie35.jpeg",
    "/images/queenie36.jpeg",
   
];

const Queenie = () => {
    return (
        <div className={styles.queenieContent}>

            <h1 className={"poppins-extrabold"}>Queenie of Rose Vidnavská záře</h1>
            <article className={styles.queenieContentInfo}>
                <img src="/images/queenie.png" alt="" />
                < div className={styles.details}>
                    <p className={`${styles.sex} poppins-extralight`}>♀ fenka</p>

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
                <p>21.9.2024, Specialty northern show - klubovka, Henrik Soeborg, DAN </p>
                <p>good size and proportions, slightly overweight today,
                    femmine head, correct bite, good pigmentation, good eyes and ears set,
                    correct tail, good angulation, strong bone, good feet, moves a little bit
                    unbalanced, sometimes parallel, sometimes not, good coat texture,
                    lovely temperament</p>
                <p>20.4.2024, Czech Northern Cup - klubová, Andrzej Szutkiewicz, PL</p>
                <p>strong female, very temperament, good size, excellent type, excellent head, good pigmentation, good top and bottom line, correct angulation, correct coat, not correct tail construction, little bit cow hooks rear legs</p>
                <p>21.4.2024, Czech Northern Cup - klubová, Elaine Walker, IR</p>
                <p>7 y.o.female, very pretty head, nice thick ears, nice neck, correct topline, good angles, nice substance and feet, good coat carrying, a little extra weight today, moves well, excellent temperament</p>
            </div>

        </div >
    )
}

export default Queenie;