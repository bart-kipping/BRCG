import React from "react"
import Layout from "../layouts/layout"
export default function Werkwijze({ location }) {
  return (
    <Layout loc={location}>
      <div className="subHeader">
        <h1>
          Waarom, hoe en wat van onze diensten<span className="dot">.</span>
        </h1>
        <p>
          Ons credo is: "Kennis moet je delen, niet bezitten", om zodoende
          organisatie te kunnen helpen, ondersteunen bij het voorbereid zijn op
          ongewenst en soms onverwachte gebeurtenissen die de strategie van een
          organisatie in gevaar kunnen brengen.
        </p>
      </div>
      <div className="textContainer">
        <h2>
          Onze werkwijze<span className="dot">.</span>
        </h2>
        <p>
          De afhankelijkheid van bedrijven wordt steeds groter. De één kan niet
          zonder de ander. En wat nu als die ander wegvalt. Onze missie is er
          voor te zorgen dat een organisatie altijd door blijft gaan. Ook als de
          omstandigheden (soms) tegenzitten.
        </p>
        <h2>
          Waarom?<span className="dot">.</span>
        </h2>
        <ul>
          <li>
            <p>
              We zien dat de toekomst voor bedrijven onzekerder wordt. De
              omstandigheden voor bedrijven veranderen voortdurend en risico’s,
              bedreigingen nemen toe.
            </p>
          </li>
          <li>
            <p>
              Veel bedrijven zijn zich hiervan bewust alleen weten ze vaak niet
              hoe hierop te reageren.
            </p>
          </li>
          <li>
            <p>
              Veerkrachtig zijn en op veranderingen kunnen reageren om een
              calamiteit of crisis te voorkomen.
            </p>
          </li>
        </ul>
        <br />
        <h2>
          Hoe?<span className="dot">.</span>
        </h2>
        <ul>
          <li>
            <p>
              Vooraf al nadenken over het veerkrachtig maken van uw organisatie.
              Wat is er al geregeld en wat moet er nog geregeld worden.
            </p>
          </li>
          <li>
            <p>
              Continuïteit van uw organisatie, op korte en lange termijn,
              waarborgen door het inrichten van het Business Continuity
              Management Proces (BCMP).
            </p>
          </li>
          <li>
            <p>
              BCRG beantwoord al uw vragen op het gebied van continuïteit en kan
              u voorzien van de nodige adviezen.
            </p>
          </li>
          <li>
            <p>
              BRCG kan voor kennisoverdracht van BCM aan uw medewerkers
              zorgdragen, 'in house' op een te bepalen locatie.
            </p>
          </li>
        </ul>
        <br />
        <h2>
          Wat?<span className="dot">.</span>
        </h2>
        <ul>
          <li>
            <p>
              Het realiseren en testen, oefenen van een Business Continuity Plan
              (BCP) waarmee ongewenste omstandigheden het hoofd kan worden
              geboden.
            </p>
          </li>
          <li>
            <p>Het BCP bestaat uit:</p>
            <ul>
              <li>
                <p>Bedrijfshulpverleningsplan</p>
              </li>
              <li>
                <p>Crisis- Communicatie Plan</p>
              </li>
              <li>
                <p>
                  Herstelplannen, IT uitwijk, Werkplek uitwijk, Cyber Incident
                  response plan
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p>​Dit plan wordt op maat gemaakt voor de organisatie.</p>
          </li>
        </ul>
        <br />
        <p>
          Kortom, veerkrachtig worden. En dat kan alleen als je samenwerkt.
          Immers, wie alleen reist, reist sneller, wie samen reist komt verder.
        </p>
      </div>
    </Layout>
  )
}
