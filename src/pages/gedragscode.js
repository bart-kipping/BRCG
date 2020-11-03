import React from "react"
import Layout from "../layouts/layout"
export default function Gedragscode({ location }) {
  return (
    <Layout loc={location}>
      <div className="subHeader">
        <h1>
          Gedragscode voor partners BRCG<span className="dot">.</span>
        </h1>
        <p>
          Partners van de Business Resilience Consultancy Group hanteren en
          werken volgens de hieronder weergegeven gedragscode.
        </p>
      </div>
      <div className="textContainer">
        <h2>
          Gedragscode<span className="dot">.</span>
        </h2>
        <ul>
          <li>
            <p>
              <b>Samenwerking</b>: We stimuleren elkaar om sterke en succesvolle
              partnerrelatie op te bouwen.
            </p>
          </li>

          <li>
            <p>
              <b>Betrouwbaar en objectief</b>: Wij onderzoeken de feiten en
              verschaffen inzicht - door veronderstellingen te onderbouwen,
              feiten te controleren en onze reputatie als betrouwbare en
              objectieve zakelijke partner te versterken.{" "}
            </p>
          </li>

          <li>
            <p>
              ​<b>Transparant</b>: Open en eerlijk in onze communicatie - door
              informatie, inzichten en advies uit te wisselen en moeilijke
              situaties openhartig aan te pakken.{" "}
            </p>
          </li>

          <li>
            <p>
              ​<b>Integer en Onafhankelijk</b>: Vóór alles zijn wij integer -
              door de hoogste professionele normen na te leven, gedegen advies
              te geven en onze onafhankelijkheid te waarborgen.
            </p>
          </li>

          <li>
            <p>
              ​<b>Respect</b>: Als partners respecteren wij elkaar -door mensen
              te respecteren om wie zij zijn en om hun kennis, vaardigheden en
              ervaring.
            </p>
          </li>

          <li>
            <p>
              <b>Voorbeeldgedrag</b>​: We gedragen ons op manier waarmee we
              laten zien dat wij van elkaar als partner en van onze klanten
              verwachten.
            </p>
          </li>
        </ul>
      </div>
    </Layout>
  )
}
