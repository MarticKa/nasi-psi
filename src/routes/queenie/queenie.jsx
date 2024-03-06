import { Link } from "react-router-dom";
import styles from "./queenie.module.css"

const Queenie = () => {
    return (
        <div className={styles.content}>

            <h1>Queenie of Rose Vidnavská záře</h1>
            <article className={styles.imgContent}>
                <img src="/images/queenie.png" alt="" />
                < div className={styles.details}>
                    <p className={styles.sex}>♀ fenka <time className={styles.bonitace}>neuchovněna</time></p>

                    <table frame="void" rules="none" className={styles.detailsTable}>
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
                            <tr>
                                <th> <Link to="/queenie#shows" className={styles.shows}>Výsledky výstav</Link></th>
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
                        <h3>♀ Arctic Aivik Furry Rose Vidnavská záře</h3>
                        <div>Matka</div>
                        <table frame="void" rules="none" className={styles.detailsTable}>
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
                        <h3>♂ Winnie the pooh of Yarak The glow of the snowy star</h3>
                        <div>Otec</div>
                        <table frame="void" rules="none" className={styles.detailsTable}>
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

            <div>
                <h2 id="shows">Výsledky výstav</h2>

                <p>Plánujeme 2025, třída veteránů</p>
            </div>

        </div >
    )
}

export default Queenie;