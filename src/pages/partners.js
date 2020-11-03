import React from "react"
import Bio from "../components/bio"
import Layout from "../layouts/layout"

import enno from "../Assets/partners/Enno-Smit.jpg"
import rykele from "../Assets/partners/Rykele-Betten.jpg"
import ferry from "../Assets/partners/Ferry-Baars.jpg"
import rene from "../Assets/partners/Rene-Rodenburg.jpg"
import joop from "../Assets/partners/Joop-Franke.jpg"

export default function Partners({ location }) {
  return (
    <Layout loc={location}>
      <div className="subHeader">
        <h1>
          Aangenaam kennis te maken<span className="dot">.</span>
        </h1>
        <p>
          Een aantal specialisten op het gebied van risico-, continuïteits- en
          crisismanagement hebben zich verenigd. Dit hebben ze gedaan omdat je
          het niet alleen kunt om voorbereid te zijn op de toekomst. Een
          toekomst die vraagt om een totaal benadering op het gebied van
          Continuïteitsmanagement. Kortom, veerkrachtig zijn. En dat kan alleen
          als je samenwerkt. Immers, wie alleen reist, reist sneller, wie samen
          reist komt verder.
        </p>
      </div>
      <div className="textContainer">
        <h2>
          BRCG Partners<span className="dot">.</span> Promise You the{" "}
          <span className="yellow">Best</span>
        </h2>
        <div className="bio">
          <Bio
            pic={enno}
            alt="Enno Smit profiel"
            naam="Enno Smit"
            rol="Partner"
            bio="Enno heeft een brede ervaring in productmanagement, business development en leiding geven, met aandacht voor kwaliteit en logistiek. Het doorzien van ingewikkelde zaken en dit begrijpelijk verwoorden is zijn kracht. Als consultant heeft hij zich de laatste jaren ontwikkeld op het gebied van Business Continuity Management. Een sterke affiniteit met IT loopt door zijn loopbaan heen. En dat is heel belangrijk binnen BCM! Maar uiteindelijk is bedrijfscontinuïteit mensenwerk. “Goede voorbereiding, logisch nadenken en pragmatische oplossingen!”."
          ></Bio>
          <Bio
            pic={rykele}
            alt="Enno Smit profiel"
            naam="Enno Smit"
            rol="Partner"
            bio="Enno heeft een brede ervaring in productmanagement, business development en leiding geven, met aandacht voor kwaliteit en logistiek. Het doorzien van ingewikkelde zaken en dit begrijpelijk verwoorden is zijn kracht. Als consultant heeft hij zich de laatste jaren ontwikkeld op het gebied van Business Continuity Management. Een sterke affiniteit met IT loopt door zijn loopbaan heen. En dat is heel belangrijk binnen BCM! Maar uiteindelijk is bedrijfscontinuïteit mensenwerk. “Goede voorbereiding, logisch nadenken en pragmatische oplossingen!”."
          ></Bio>
          <Bio
            pic={ferry}
            alt="Enno Smit profiel"
            naam="Enno Smit"
            rol="Partner"
            bio="Enno heeft een brede ervaring in productmanagement, business development en leiding geven, met aandacht voor kwaliteit en logistiek. Het doorzien van ingewikkelde zaken en dit begrijpelijk verwoorden is zijn kracht. Als consultant heeft hij zich de laatste jaren ontwikkeld op het gebied van Business Continuity Management. Een sterke affiniteit met IT loopt door zijn loopbaan heen. En dat is heel belangrijk binnen BCM! Maar uiteindelijk is bedrijfscontinuïteit mensenwerk. “Goede voorbereiding, logisch nadenken en pragmatische oplossingen!”."
          ></Bio>
          <Bio
            pic={rene}
            alt="Enno Smit profiel"
            naam="Enno Smit"
            rol="Partner"
            bio="Enno heeft een brede ervaring in productmanagement, business development en leiding geven, met aandacht voor kwaliteit en logistiek. Het doorzien van ingewikkelde zaken en dit begrijpelijk verwoorden is zijn kracht. Als consultant heeft hij zich de laatste jaren ontwikkeld op het gebied van Business Continuity Management. Een sterke affiniteit met IT loopt door zijn loopbaan heen. En dat is heel belangrijk binnen BCM! Maar uiteindelijk is bedrijfscontinuïteit mensenwerk. “Goede voorbereiding, logisch nadenken en pragmatische oplossingen!”."
          ></Bio>
          <div></div>
          <Bio
            pic={joop}
            alt="Enno Smit profiel"
            naam="Enno Smit"
            rol="Partner"
            bio="Enno heeft een brede ervaring in productmanagement, business development en leiding geven, met aandacht voor kwaliteit en logistiek. Het doorzien van ingewikkelde zaken en dit begrijpelijk verwoorden is zijn kracht. Als consultant heeft hij zich de laatste jaren ontwikkeld op het gebied van Business Continuity Management. Een sterke affiniteit met IT loopt door zijn loopbaan heen. En dat is heel belangrijk binnen BCM! Maar uiteindelijk is bedrijfscontinuïteit mensenwerk. “Goede voorbereiding, logisch nadenken en pragmatische oplossingen!”."
          ></Bio>
        </div>
      </div>
    </Layout>
  )
}
