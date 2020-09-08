import React from "react"
import CV from "../images/cv.jpg"

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a href="../../static/asamshan.pdf" download>
        Download as PDF
      </a>
      <img style={{ height: "auto", width: "auto" }} src={CV} alt="cv" />
      <a href="../../static/asamshan.pdf" donload>
        Download as PDF
      </a>
    </div>
  )
}
