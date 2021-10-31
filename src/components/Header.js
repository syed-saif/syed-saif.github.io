import React from "react"
import Fade from "react-reveal/Fade"
import data from "../data"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h4 style={{'font-size': '1.5em'}}>
              Greetings, the great voyager of the internet! I am
            </h4>
            <h2>
              {data.name}.
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h4 style={{'font-size': '1.5em'}}>
                I enjoy developing and scaling REST Backends, Full-stack systems and Data Pipelines.
                <br />
                If I could describe myself with only 3 terms, I would say I'm a:
              </h4>
              <h3>
                {data.headerTagline[0]}
              </h3>
              <h3>
                {data.headerTagline[1]}
              </h3>
              <h3>
                {data.headerTagline[2]}
              </h3>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom>
            <a
              href={`mailto:${data.contactEmail}`}
              className="primary-btn"
            >
              CONNECT WITH ME
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
