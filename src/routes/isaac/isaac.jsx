import { Link } from "react-router-dom";
import styles from "./isaac.module.css"

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
                <p>
                    Tady bude ta nejfamoznější galerie fotek, co kdy kdo na webové stránky o psech měl!</p>

            </div>

            <div>
                <h2>Rodiče</h2>
                <div className={styles.parents}>neznámí, původ SK</div>
            </div>

        </div >
    )
}

export default Isaac;