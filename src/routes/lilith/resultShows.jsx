import "../../poppins.css";
import "../../index.css";
import "../../App.css";
import styles from './resultShows.module.css';

const Shows = () => {
    return (
        <article className={styles.resultShows}>
            <h4 className={`${styles.thisYear} poppins-regular`}>- 2025 -</h4>
            <table frame="void" rules='none' className={styles.thisYearTable}>
                <tbody>
                <tr>
                        <td>13.4.</td>
                        <td>Evropská výstava, CZ</td>
                        <td>Mitrevski Stefan, Makedonie</td>
                        <td>VN1</td>
                    </tr>

                <tr>
                        <td>12.4.</td>
                        <td>Národní výstava při EDS, CZ</td>
                        <td>Zdenka Jílková, CZ</td>
                        <td>VN1</td>
                    </tr>
                <tr>
                        <td>29.3.</td>
                        <td>Oblastní výstava Kelč, CZ</td>
                        <td>Jana Janek, SK</td>
                        <td>VN1</td>
                    </tr>
                
                </tbody>
            </table>

        </article>
    )
}
export default Shows;