import { Link } from "react-router-dom";
import styles from "./ariana.module.css"
import Shows from "./resultShows";

const Ariana = () => {
    return (
        <div className={styles.content}>

            <h1>Ariana of Whisky Vidnavská záře</h1>
            <article className={styles.imgContent}>
                <img src="/images/ariana.png" alt="" />
                < div className={styles.details}>
                    <p className={styles.sex}>♀ fenka <time className={styles.bonitace}>bonitace 10/2024</time></p>

                    <table frame="void" rules="none" className={styles.detailsTable}>
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
                                <td>Zde jsou lvi, 30.3.2024, 44km</td>
                            </tr>
                            <tr>
                                <th></th>
                                <td>Šlapanický vlk, 14.4.2024, 44km</td>
                            </tr>
                            <tr>
                                <th>Speciální vlastnosti:</th>
                                <td>jemně piškotové ouška, trpělivá, velmi mazlivá, postelová, spáč, učenlivá </td>
                            </tr>
                            <tr>
                                <th> <Link to="/ariana#shows" className={styles.shows}>Výsledky výstav</Link></th>
                            </tr>
                        </tbody>
                    </table>

                </div >
            </article>
            <div>
                <h2>Galerie</h2>
                <p>
                    Tady bude ta nejfamoznější galerie fotek, co kdy kdo na webové stránky o psech měl!</p>

            </div>

            <div>
                <h2>Rodiče</h2>
                <div className={styles.parents}>
                    <div className={styles.momContent}>
                        <h3>♀ Whisky of Pink Vidnavská záře</h3>
                        <div>Matka</div>
                        <table frame="void" rules="none" className={styles.detailsTable}>
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
                        <h3>♂ Nobody stop me Chatanga</h3>
                        <div>Otec</div>
                        <table frame="void" rules="none" className={styles.detailsTable}>
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

            <div>
                <h2 id="shows">Výsledky výstav</h2>

                <Shows />
            </div>

        </div >
    )
}

export default Ariana;