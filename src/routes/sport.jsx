import { Link } from "react-router-dom";
import "../poppins.css";
import "../index.css";
import "../App.css";
import styles from "./sport.module.css"

const Sport = () => {
  return (
    <>
      <article className={styles.main}>
        <div>
          <p>Ať budete s vašim hafíkem dělat jakýkoli sport, vždy myslete původ rasy. Samojed nepatří např. mezi vodní psy, nebo lovecké, jejich historické určení bylo jiné a proto budou přirozeně šikovní a víc inklinovat k tomuto pohybu. Čest výjimkám, ale ještě jsem neviděla samojeda s radostí plavat. </p>
          <p>Považuju za nutné zmínit a apelovat na vhodnost povrchu a počasí, pro jakoukoli aktivitu.</p>
          <p>Díky své vytrvalosti, síle, přirozené schopnosti tahat jsou samojedi ideální pro pohyb jako:
            <ul>
              <li>Dogtrekking</li>
              <li>Mushing či scootering</li>
              <li>Canicross</li>
              <li>Agility</li>
            </ul>
            Obecně známo je, že na agility jsou vhodné třeba border colie, nebojte se ale zkusit tuhle aktivitu i s vašim samíkem, možná vás překvapí jak moc ho to bude bavit. Asi nedoporučuju mít velká očekávání co se závodů týče, rychlostně se právě border colii určitě nevyrovná, ale bude vás to společně bavit a to jde. 
          </p>
          <p>Možná si někde přečtete ještě o tkz. pullingu, na první pohled si můžeme říct, že je to přesně vhodný sport pro samojeda, vždyť je to přece tažný pes. No já osobně bych se pullingu vyhnula, není tahání jako tahání. Nejčastěji se závodů účastní stafordi, pitbullové, buldoci, malamuti. Jejich stavba těla je dost rozlišná, ze samojeda nařachaného rambo svalouše neuděláte.</p>
        </div>
      </article>
    </>
  )
}
export default Sport;