import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
/*
The homepage you were just making edits to was created by defining a page component. What exactly is a “component”?
Broadly defined, a component is a building block for your site; It is a self-contained piece of code that describes a section of UI (user interface).
*/
//export default () => <div>Hello Gatsby!</div>
export default () => (
  <div style={{ color: `purple` }}>
    <Link to="/contact/">Contact</Link>
    <Header headerText="Hello Gatsby!" />
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)