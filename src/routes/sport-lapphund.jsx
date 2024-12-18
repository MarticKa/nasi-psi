import { Link } from "react-router-dom";
import "../poppins.css";
import "../index.css";
import "../App.css";
import styles from "./sport.module.css"

const SportLap = () => {
  return (
    <>
      <article className={styles.main}>
        <h1 className="poppins-extrabold">Sport</h1>
        <div>
          <p>Ať budete s vašim hafíkem dělat jakýkoli sport, vždy myslete původ rasy. Svensk lapphund nepatří např. mezi vodní psy, nebo lovecké, jejich historické určení bylo jiné a proto budou přirozeně šikovní a víc inklinovat k tomuto pohybu.</p>
          <p>Považuju za nutné zmínit a apelovat na vhodnost povrchu a počasí, pro jakoukoli aktivitu.</p>
          <p>Díky své vytrvalosti, síle, přirozené schopnosti pást a s radostí pracovat je ideální pro pohyb jako:
            <ul>
              <li>Dogtrekking</li>
              <li>Agility</li>
              <li>Canicross</li>
              <li>Dogdancing</li>
              <li>Závody v pasení</li>
            </ul>
            Obecně známo je, že na agility jsou vhodné třeba border colie, nebojte se ale zkusit tuhle aktivitu i s lapphundem, možná vás překvapí jak moc ho to bude bavit. Asi nedoporučuju mít velká očekávání co se závodů týče, rychlostně se právě border colii určitě nevyrovná, ale bude vás to společně bavit a to jde. 
          </p>
        </div>
      </article>
    </>
  )
}
export default SportLap;