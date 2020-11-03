import React from "react"
import footerStyle from "./footer.module.scss"
import ListLink from "../components/listLink"
import ListLinkFooter from "./listLinkFooter"
import wijzer from "../Assets/footer/wegwijzer.png"
export default function Footer({ loc }) {
  return (
    <footer>
      <ul className={footerStyle.menu}>
        <ListLinkFooter
          loc={loc}
          to="/"
          pageName="wie zijn wij?"
        ></ListLinkFooter>
        <ListLinkFooter
          loc={loc}
          to="/partners"
          pageName="partners"
        ></ListLinkFooter>
        <ListLinkFooter
          loc={loc}
          to="/werkwijze"
          pageName="werkwijze"
        ></ListLinkFooter>
        <ListLinkFooter
          loc={loc}
          to="/gedragscode"
          pageName="Gedragscode"
        ></ListLinkFooter>
        <ListLinkFooter
          loc={loc}
          to="/contact"
          pageName="contact"
        ></ListLinkFooter>
      </ul>
      {loc.pathname === "/" && (
        <div className={footerStyle.mottoContainer}>
          <q className={footerStyle.motto}>
            Ons motto is: Alleen ga je sneller, samen kom je verder
          </q>
        </div>
      )}

      <div className={footerStyle.wijzer}>
        <img src={wijzer} alt="wegwijzer"></img>
        <q>
          Business Resilience Consultancy Groep uw partner en wegwijzer voor het
          realiseren van veerkracht en weerbaarheid in uw organisatie.
        </q>
      </div>
    </footer>
  )
}
