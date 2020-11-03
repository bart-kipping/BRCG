import React from "react"
import bioStyle from "./bio.module.scss"
import linkedin from "../Assets/linkedin.svg"

export default function Bio(props) {
  return (
    <div className={bioStyle.container}>
      <img src={props.pic} alt={props.alt} width="100%"></img>
      <img src={linkedin} alt="linked in" className={bioStyle.social}></img>
      <p className={bioStyle.naam}>{props.naam}</p>
      <p className={bioStyle.rol}>{props.rol}</p>
      <p className={bioStyle.omschrijving}>{props.bio}</p>
    </div>
  )
}
