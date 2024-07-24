import { Link } from "react-router-dom";
import "../poppins.css";
import styles from "./health.module.css";

const Health = () => {
  return (

    <article>
      <div className={styles.healthNavi}>
        <p>Pohybový aparát</p>
        <p>Hlava</p>
        <p>Ocas</p>
      </div>
      <div>
        <h1>Strava</h1>
        <p>pro štěnátko</p>
        <p>pro dospělého</p>
        <p>pro seniora</p>
        <p>pro sporťáka</p>
        <p>pamlsky</p>
      </div>
      <div>
        <h1>Pohyb, venčení</h1>
        <p>jak často</p>
        <p>jaké vzdálenosti</p>
        <p>jaký povrch terénu</p>
        <p>obojek vs. postroj</p>
      </div>
      <div>
        <h1>Udržba srsti</h1>
        <p>koupání</p>
        <p>sušení</p>
        <p>česání</p>
        <p>kastrovaná srst</p>
      </div>
      <div>
        <h1>Nemoci, veterinář</h1>
        <p>jednoroční návštěva veteriny</p>
        <p>zánět spojivky - výtok z oka</p>
        <p>kašel vs. psinkový kašel</p>
        <p>průjem</p>
        <p>píchnutí sršněm</p>
        <p>zánět močových cest</p>
        <p>zranění zapíchnutého klacku</p>
        <p>klíště</p>
        <p>prevence větších nemocí - feny sono dělohy, senior krevní testy, </p>
      </div>
    </article>
  )  
}

export default Health;