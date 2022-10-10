import classes from "./HowToBrew.module.css";
import picture from "../pictures/pexels-elevate-1267330.jpg";

const HowToBrew = () => {
  return (
    <>
      <div>
        <div className={classes.content}>
          <div>
            <img src={picture} alt="beer barrel" height={300} width={350}></img>
          </div>
          <div>
            <h1>Hur du brygger öl</h1>
            <p>
              Är du intresserad av att brygga dit eget öl? Mikrobryggeri är en
              växande trend världen över och ett färsköl brukar smaka gott!
            </p>
            <p>
              Jag hjälper dig gärna med att komma igång med att brygga så jag
              har satt ihop en liten guide du kan följa för att komma igång!
            </p>
          </div>
        </div>
        <div className={classes.ingredients}>
          <h2>Detta behöver du för att komma igång!</h2>
          <div>
            <h3>Humle</h3>
            <p>
              Det finns olika sorters humle. Och i ölbryggning är det humlen som
              tillför beska, smak och arom.
            </p>
          </div>
          <div>
            <h3>Malt</h3>
            <p>
              Malt är en av de mest grundläggande ingridiensen i ett öl. Det är
              malten som ger ölet dess färg, sötma och kropp. Vill du ha ett bra
              resultat är det viktigt att du väljer malt av god kvalitet.
            </p>
          </div>
          <div>
            <h3>Vatten</h3>
            <p>
              Kvalitén på vattnet har faktiskt betydelse för ölens smak.
              Exempelvis så passar surt vatten till lager och basigt till pale
              ale.
            </p>
          </div>
          <div>
            <h3>Jäst</h3>
            <p>
              Överjäst jäser bäst vid 20 grader och underjäst som används till
              lager jäser bäst vid 5-10 grader, så underjäst tar därför lite
              längre tid.
            </p>
          </div>
          <div>
            <h3>Gryta</h3>
            <p>
              Du behöver en gryta för att mäska och koka. Den bör vara på 25-35
              liter.
            </p>
          </div>
          <div>
            <h3>Jäskärl</h3>
            <p>Ett Jäskärl på runt en 25 liter är bra.</p>
          </div>
          <div>
            <h3>Hydrometer</h3>
            <p>
              Används för att räkna fram alkohålhalten. Med en hydrometer mäts
              vätskors densitet. När det kommer till ölbryggning används den för
              att kolla hur mycket socker det finns kvar i vörten. Ölet mäts
              innan och efter jäsning.
            </p>
          </div>
          <div>
            <h3>Sil och Slev</h3>
            <p>Du behöver något att röra och sila med.</p>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.intro}>
            <h2>Steg för steg hur man brygger.</h2>
            <p>
              Vare sig om du vill brygga 25 liter eller 800 liter är
              bryggeriprocessen densamma, detsamma gäller för tiden att mäska
              och koka. Nedan beskrivs hur man brygger 25 Liter.
            </p>
          </div>
          <div className={classes.steps}>
            <div>
              <h3>1. Du börjar med malten</h3>
              <p>
                Malten hälls ner i en gryta med ca 25 liter vatten som är
                uppvärmt till ca 60 grader. Malten kan läggas i en silduk eller
                speciell kokpåse. Under omrörning höjs temperaturen långsamt
                till 62-65 grader. Efter 60 min är det dags att höja
                temperaturen. Under tiden som det blir varmare tar man ut
                kokpåsen eller silar av malten när temperaturen nått 75 grader.
                Brygger man i köket är det lättast att ha malten i en silduk som
                är sydd som en påse. Har man lite större bryggverk häller man
                över malten i en sil. I bryggarkretsar kallas maltrestprodukten
                för drav.
              </p>
              <p>
                Ca 10-15 liter av 80 gradigt vatten (lakvatten) hälls därefter
                över malten (i silen eller genom påsen) för att få med all sötma
                och maltsmak.
              </p>
            </div>
            <div>
              <h3>2. Humlen tillsätts</h3>
              <p>
                Humlen tillsätts i början av koket. Minimitiden för att koka är
                60 min. Vissa tycker man skall koka i 90 min. Humlen fungerar
                som konservering av ölen och kallas för bitterhumle. Det finns
                massor av olika recept där man tillsätter humlen i olika
                tidsintervall. Vanligast är att man tillsätter mera humle när
                det är 5 min kvar av koket men det kan variera allt från
                15-10-5-3-1 minuter innan koket avslutas. Denna humlen kallas då
                för aromhumle. Aromhumle smaken finns mest i skummet.
              </p>
              <p>
                Nu skall vörten kokas tillsammans med humle. Men innan dess
                måste ytan skummas och det görs bäst vid 95 grader. Detta för
                att ta bort en del av proteinet (äggviteämnen). Ölen blir då
                mera hållbar och det gör att det inte kokar över så lätt när man
                tillsätter humlen samt att den inte skummar så mycket när man
                fyller ölen på flaska.
              </p>
            </div>
          </div>
          <div className={classes.steps}>
            <div>
              <h3>3. Om du vill ha mer smak</h3>
              <p>
                Vill man ha lite mera smaker kan man tillsätta enekvistar. Det
                går bra att även smaksätta med ringblomma eller citronmeliss
                eller vad man nu vill. När det är 10 minuter kvar tillsättes ett
                ämne som gör ölen klarare. Det finns olika produkter men i grund
                och botten är det samma sak. Irish moss kommer från havet och är
                ett sjögräs eller egentligen en alg (karragenan), andra namn är
                Protafloc eller NM klar.
              </p>
            </div>
            <div>
              <h3>4. Vörten skall kylas</h3>
              <p>
                Efter att kokningen är klar skall vörten kylas så snabbt som
                möjligt. Detta för att man inte skall få vildjäsning men också
                för att humlen inte skall bli för bitter. Enklast är använda en
                kylspiral men annars kan man ställa in kokkärlet i badkaret
                fyllt med kallt vatten.
              </p>
            </div>
          </div>
          <div className={classes.steps}>
            <div>
              <h3>
                5. Jästen tillsätts och får stå i plasthinkar för att jäsa
              </h3>
              <p>
                Vörten tappas över till ett jäskärl (glas, plast, eller
                rostfritt stål) och specifika vikten mäts innan jästen
                tillsättes. Beroende på hur stark ölen skall bli (hur mycket
                socker som extraherats från malten) mäts sockerhalten, OG
                (original gravity) oftast 1040-1050. Temperaturen skall då vara
                mellan 20-22 grader.
              </p>
              <p>
                Ca 10-15 liter av 80 gradigt vatten (lakvatten) hälls därefter
                över malten (i silen eller genom påsen) för att få med all sötma
                och maltsmak.
              </p>
              <p>
                Nu tillsättes torrhumle ca 40-50 gram/25 liter och som får stå i
                2 dygn innan ölen tappas upp på ett cornelius fat, eller tappas
                på flaska. I så fall tillsätts en knivsudd strösocker så att
                ölen får sekundärjäsa i 3-4 veckor (prima ölen).
              </p>
            </div>
            <div>
              <h3>6. Cornelius fat</h3>
              <p>
                Cornelius fat är ett fat som man kan tillsätta koldioxid (CO2).
                Enklast är om du köper en Soda stream tub och lite kopplingar.
                Tillsätt CO2 med ett tryck på mellan 0,6-1 bar.
              </p>
              <p>
                Efter att ölen fått stå tre dygn i Cornelius fat är ölen så pass
                klar att den går att dricka, men den smakar som bäst om den får
                stå någon vecka. Det bästa är om det går att flytta över
                Corneliusfatet till ett kylskåp i några dagar innan det tappas
                på flaska. Det bästa resultatet är om ölen får mogna på flaska i
                ett par veckor ytterligare innan serveringen.
              </p>
              <p>
                Sen får man inte glömma att allt måste rengöras noggrant. I
                slangarna kan det bildas vild-jäst vilket kan ge oväntade smaker
                om man inte är noggrann. Vanligast bland bryggare är att använda
                PBW rengöringsmedel för att göra rent alla kärl och slangar. PBW
                köps från internethandeln men det går även att använda
                maskindiskpulver som ett alternativ. Häll i lite pulver och fyll
                på med varmt vatten och låt stå 30 min.
              </p>
              <p>
                Om det får lufttorka ordentligt till nästa bryggd så räcker det.
                Brygger man ofta måste man dessutom använda fosforsyra för att
                ta bort alla eventuella mikroorganismer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToBrew;
