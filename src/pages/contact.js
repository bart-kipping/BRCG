import React from "react"
import Layout from "../layouts/layout"
import road from "../Assets/footer/wegwijzer.png"
export default function Contact({ location }) {
  return (
    <Layout loc={location}>
      <div className="subHeader">
        <h1>
          Neem contact met ons op<span className="dot">.</span>
        </h1>
        <p>
          Vul onderstaande gegevens in en één van de partners neemt zo spoedig
          mogelijk contact met u op.
        </p>
      </div>
      <div className="textContainer">
        <img
          scr={road}
          alt="Together on the road for continuity and resilience"
        ></img>
        <form>
          <div style={{ display: "grid" }}>
            <label for="fnamef">
              NAAM<span>*</span>
            </label>
            <input
              type="text"
              placeholder="Eerste"
              id="fnamef"
              style={{ gridRow: "2", gridColumn: "1" }}
            ></input>
            <input
              type="text"
              placeholder="Laatste"
              id="fnamel"
              style={{ gridRow: "2", gridColumn: "2" }}
            ></input>
          </div>
          <div style={{ display: "grid" }}>
            <label for="email">
              E-mail<span>*</span>
            </label>
            <input
              type="text"
              placeholder="yourname@domain.nl"
              id="email"
              style={{ gridRow: "2", gridColumn: "1" }}
            ></input>
          </div>
          <div style={{ display: "grid" }}>
            <label for="reactie">
              Reactie<span>*</span>
            </label>
            <input
              type="text"
              placeholder="yourname@domain.nl"
              id="reactie"
              style={{ gridRow: "2", gridColumn: "1", height: "15em" }}
            ></input>
          </div>

          <p
            style={{
              padding: "1em",
              backgroundColor: "lightgray",
            }}
          >
            verzenden
          </p>
        </form>
      </div>
    </Layout>
  )
}
