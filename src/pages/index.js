import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/layout"
import brcgPic from "../Assets/algemeen/brcg-logo.jpg"

export default function Home({ location }) {
  return (
    <Layout loc={location}>
      <div
        className="subHeader"
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          alignItems: "center",
        }}
      >
        <img src={brcgPic} width="500px"></img>
        <div
          style={{
            display: "grid",
            flexDirection: "column",
            textAlign: "center",
            width: "100%",
          }}
        >
          <h1>Business Resilience Consultancy Group</h1>
          <h3>
            Eén portaal voor Veerkracht en Continuïteit
            <span className="dot">.</span>
          </h3>
        </div>
      </div>
      <div className="textContainer">
        <h2>
          Wie zijn wij?<span className="dot">.</span>
        </h2>
        <p>
          <span className="yellow">BRCG</span> is een samenwerkingsverband van
          een aantal professionals op het gebied van resilience, (veerkracht) en
          continuïteit. De leden van de groep zijn dit samenwerkingsverband aan
          gegaan om opdrachtgevers één portaal aan te kunnen bieden waar zij
          terecht kunnen voor vragen, advies en ondersteuning bij het inrichten,
          onderhouden van het Business Continuity Management Proces (BCMP) en
          biedt ondersteuning bij het testen, oefenen van het Business
          Continuity Plan (BCP).
          <br />
          <br />
          <span className="yellow">BRCG</span> zet zich in om de verkracht van
          bedrijven en organisatie verder te vergroten. Ons uitgangspunt is de
          strategie van uw organisatie. Wij zorgen er voor dat uw strategie en
          de uitgestippelde doelen worden gerealiseerd. Ook als het even
          tegenzit.
          <br />
          <br />
          <span className="yellow">BRCG</span> doet dit door het bieden van
          oplossingen die passen bij uw organisatie. Samen met uw medewerkers
          wordt een Risicoanalyse (bedreigingen en kwetsbaarheid analyse en een
          Business Impact Analyse uitgevoerd en een continuïteitsplan opgesteld.
          <br />
          <br />
          <span className="yellow">BRCG</span> zorgt er voor op deze manier dat
          de veerkracht en continuïteit onderdeel wordt van de dagelijkse
          werkzaamheden en processen. Deze samenwerking zorgt er ook voor dat de
          plannen doelmatig zijn uitgedacht en geen tijdverslindende processen
          zijn.
        </p>
      </div>
    </Layout>
  )
}
