import React, { useState } from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import ListLink from "./listLink"

import headerStyle from "./header.module.scss"

export default function Header({ loc }) {
  let { scrollYProgress } = useViewportScroll()
  let scale = useTransform(
    scrollYProgress,
    //[0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3],
    [0, 0.01, 0.2, 0.3, 0.4, 0.5, 0.6],
    [5, 4.75, 4, 3, 2, 1.25, 1]
  )
  const [vari, setvari] = useState(5)
  scrollYProgress.onChange(x => {
    // console.log(scrollYProgress.current)
    setvari(scale.get())
  })

  return (
    <motion.header
      initial={{
        paddingLeft: "2em",
        paddingRight: "2em",
        paddingTop: "2em",
        paddingBottom: "2em",
      }}
      animate={{
        paddingTop: scrollYProgress.current > 0.05 ? "0.5em " : "2em",
        paddingBottom: scrollYProgress.current > 0.05 ? "0.5em " : "2em",
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 35,
      }}
    >
      <h1>BUSINESS RESILIENCE CONSULTANCY GROUP</h1>
      <ul className={headerStyle.menu}>
        <ListLink loc={loc} to="/" pageName="wie zijn wij?"></ListLink>
        <ListLink loc={loc} to="/partners" pageName="partners"></ListLink>
        <ListLink loc={loc} to="/werkwijze" pageName="werkwijze"></ListLink>
        <ListLink loc={loc} to="/gedragscode" pageName="Gedragscode"></ListLink>
        <ListLink loc={loc} to="/contact" pageName="contact"></ListLink>
      </ul>
    </motion.header>
  )
}
