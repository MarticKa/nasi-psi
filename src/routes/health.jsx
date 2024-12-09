import { Link } from "react-router-dom";
import "../poppins.css";
import styles from "./health.module.css";

const Health = () => {
  return (

    <article className={styles.main}>
      <div>
        <h1>Strava</h1>
        <p>Velikost porce, četnost dávky i nutriční složení by mělo být rozdílné pro pejska v různé fázi života - štěňátko, dospělák, sporťák, senior. Zároveň nesmíme zapomínat, že ikdyž správně nastavíme krmnou dávku i ty drobné pamlsky a dentální tyčinky mají kalorie a můžou dělat ten rozdíl proč pejsek tloustne a není ve formě.</p>
        <p>Pokud nechcete řešit BARF stravování, nezbyde než vybrat kvalitní prémiové granule s vysokým podílem čerstvého masa. Vybírejte pečlivě, nechte si poradit od nutričních poradců. Já mám dobrou zkušenost se značkami Brit fresh, Bosch Soft, Carnilove. Skvělá volba jsou Platinum, Taste of the Wilde. </p>
        <p>Dejte si pozor na obsah vitamínu A, ve velkých a pravidelných dávkách zbarvuje srst a podporuje její nažloutlý, oranžový nádech - to u bílého psa je lehce nežádoucí. Uvádí se vhodná míra do 12 000 IU/kg. Na betakaroten dejte pozor i v pamlscích a jiných doplňcích stravy.</p>
        <p>Štěňátko vyžaduje specifickou stravu, je v růstu a musí mít všeho dostatek - vybírejte granule přímo pro ně určené. Stejně je tomu u seniora, nebo kastrovaného pejska - u nich je opravdu důležité udržovat zdravou váhu kvůli kloubům a stárnutí.</p>
        <p>Jestli chcete občas pejskovi nějak přilepšit, občas mu do porce přimíchejte nějakou konzervu/masíčko, vývar. Nejlepší konzerva je Falco - Max deluxe, je to čistě ze svaloviny. Vývar můžete udělat domáci, anebo různé psí značky prodávají vývary, ten domácí nekořeňte a snažte se ať není příliš tučný. Tučný vývar a ve větším množství bude mít vliv na stolici a může pejska trápit průjem.</p>
      </div>
      <div>
        <h1>Pohyb, venčení</h1>
        <p>První věc související se zdravým pohybem je neklouzavá podlaha doma - ideálně koberce, vynil.</p>
        <p>S ohledem na kondici svého samíka vybírejte délku trasy a terén. Štěňátko toho sice hodně naspí, ale ke správnému vývinu potřebuje hodně pohybu - volného pohybu, nenuťte ho hned od mala chodit u nohy, či běhat u nohy. Samojed je střední plemeno, poměrně lehké a netrpí na problémy s klouby, nemusíme se bát s ním vyrazit už od mala na nějakou opravdovou procházku a ne jen kolem domu. Raději si vyberte lesní cestičku, polňačku, prostě měkčí povrch - asfalt, beton, chodník není nejvhodnější primární povrch v době vývinu. </p>
        <p>Naučte pejska rituny, která vyhovuje vám. Nenechte se manipulovat a vstávat s ním ve tři ráno, protože si řekl. Venčení má být zábava i pro vás, je to společná aktivita ze které se máte těšit.</p>
        <p>Samojed není rád sám, je to přátelský a kontaktní pes - proto nepočítejte s tím, že se nějak sám od sebe vyvenčí na zahradě, obzvlášť pokud bude jedináček. Bez interakce s vámi to nepůjde.</p>
        <p>Vyberte si vhodné nástroje k venčení, podle aktivity - obojek pro lepší manipulaci, postroj pro tahání. Flexi vodítko je skvělý pomocník na běžné venčení a procházky, nedoporučuju s ním chodit běhat či na jiné náročnější aktivity - dogtrekking, horské treky, canicross.</p>
        <p>Určitě nechci nikoho strašit a odrazovat, jen je potřeba to zmínit - samojed vydrží opravdu dost, nepočítejte že 7km procházka po rovině lesem ho unaví na celý den, zhodnotila bych to jako fajn ranní procházku. No odpoledne bude očekávat další takovou i klidně delší trasu. Taková víkendová prochajda 15km najednou bude akorát pro rozhýbání se, dvě hoďky se prospí a samojed se začne rozkoukávat jestli se jde znova. Nic z toho však neznamená, že se rád nepřitulí na pohovce a v posteli.</p>
      </div>
      <div>
        <h1>Udržba srsti</h1>
        <p>Ačkoli je srst samojedů tkz. samočistící, potřebuje svou údržbu. Hlavně pravidelné česání, odstraňování vylínané a uvolněné srsti je důležité pro zdravou pokožku, správnou termoregulaci a samozřejmě i vzhled pejska. Na česání je účinný drátkový kartáč s delšími drátky, super je i použití speciálního fénu - uvolněná srst pak sama vylítává, kartáčem se už pak jen vše doladí.</p>
        <p>Koupat samojed není potřeba často, pokud nechodí na výstavy, pro běžný život jen když se vyválí v něčem voňavém, hodně se zablátí či navzájem ožužlají. Koupem klasicky ve vaně/sprchovém koutě a nenastavujte příliš studenou vodu, mohl by se vlastně nachladit. Speciální psí šampóny dopomůžou k zdravé a hebké srsti. Můžete použít vhodný kondicionér anebo masku na dlouhou srst, bude se pak lépe rozčesávat. Před samotným koupáním doporučuju vyčesat anebo vyfénovat. Po koupání osušit ručníkem, při slunečném počasí můžem nechat lehce proschnout přirozeně, ale lepší je použít fén ať nevzniknou hotspoty a zapařeniny.</p>
        <p>Srst kastrovaného samíka může být delší, hustější, drsnější a hlavně - nelíná pravidelně. O to víc péče potřebuje, pravidelně česejte a foukejte. Existují i speciální kosmetické přípravky pro hodně zacuchanou srst, já mám dobrou zkušenost s Iv sant bernard.</p>
        <p>Pěkné srsti můžete trochu pomoct výživovými doplňky - oleje, roboran.</p>
      </div>
      <div>
        <h1>Nemoci, veterinář</h1>
        <p>Choďte na pravidelné veterinární prohlídky a očkování, sledujte datum další dávky v očkovacím průkazu, zapisujte si datum odčervení ať na další dávku nezapomenete.</p>
        <p>Jestli uvidíte výtok z oka, začervenání, může se jednat o zánět spojivek. Kapejte do obou očí Ocuflash třikrát denně, dejte tomu pár dní na zlepšení.</p>
        <p>Velmi časté onemocnění je kašel, případně psinkový kašel. Obzvlášť u štěňátek a seniorů buďte obezřetní a raději řešte s veterinářem. U dospěláka zkuste jitrocelový sirup (bez umělých sladidel), klidový režim, můžete přidat vitamín C, vyhýbejte se dalším psům a nechoďte s kašlajícím pejskem do psího parku - kapenky zůstanou na trávě a jiný pes místo očuchá a olízne čímž se nakazí. Samozřejmě pokud se situace nezlepšuje určitě je čas na řešení s veterinářem. Kašel může být také příznak jiné i vážnější nemoci, proto jej nepodceňujte. Proti psinkovému kašli je možné nechat pejska naočkovat, nebuďte překvapení že se vakcína aplikuje nosními dírkami, po očkování si na následující týden neplánujte žádné akce - po očkování se může objevit mírný kašel a prodělání nemoci.</p>
        <p>Dávejte pozor na aportování klacků, velmi obvyklé zranění je propíchnutý jazyk či jiná část tlamy. Raději pořiďte hračku na aport. Pokud se stane nehoda s klackem a pes jej chytne vodorovně do tlamy, po takovém hraní zkontrolujte pejska, podívejte se i pod jazyk zda nemá ranku tam. Jestli začne více slinit, bude apatický, ve slinách bude krev - navštivne ihned veterináře.</p>
        <p>Píchnutí sršněm, vosou či včelou může pejska hodně potrápit, sršeň nemá silný jed ale je to velmi bolestivé, proto je lepší vzít pejska na veterinu pro léky na bolest. Vosa a včela může být větší problém, místo oteče a reakce na jed větší, proto neotálejte s návštěvou veteriny.</p>
        <p>Může se stát, že pejsek někde prochladne a rozjede se mu zánět močových cest. Projev bude opravdu časté čůrání, u psů kteří značkují může být těžké rozeznat o co jde. Moje zkušenost častého čůrání je, že pejsek na jedné procházce kolem domu potřeboval víc než desetkrát. Někteří mohou mít i bolesti během čůrání, takže budou třeba kňučet - o to líp se pozná problém. Zánět je rozhodně případ pro veterináře, pro jeho potvrzení může udělat sono či odebrat krev, ve které se ukáže probíhající zánět v těle. Avšak nejjistější způsob je vyšetření moči, odebrat moč je nejlepší tu ranní a co nejdříve ji odnést na veterinu. Odběr zvlášť u feneček je trochu náročnější, můžete zkusit:
          <ul>
            <li>opatrně pod čůrající fenečku vložit naběračku, ať zachytíte proud</li>
            <li>jakmile si fenečka přidřepne k čůrání, opatrně bez doteku pod ni dát vatu - z ní se moč dá nasát do injekční stříkačky a dále do zkumavky</li>
            <li>nechte fenečku vyčůrat na nějaký čistý igelit (tip: zelená pláštěnka), tak aby se z něj dala moč nasát do injekční stříkačky a přenést do zkumavky</li>
          </ul>
        </p>
        <p>Prevence je důležitá, je vhodné s nekastrovanými fenečkami chodit každý rok na sono dělohy a předejít zánětům apod. U kluků pejsků dávat pozor na prostatu a varlata. Obecně je vhodné s nastupujícím věkem pejska větší prevence - alespoň každoroční odběr krve.</p>
      </div>
    </article>
  )
}

export default Health;