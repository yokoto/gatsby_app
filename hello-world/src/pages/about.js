import React from "react"
import Header from "../components/header"
/*  the header component expects to receive the headerText prop.
  You can access it like: <h1>{props.headerText}</h1>
*/
export default () => (
  <div style={{ color: `teal` }}>
    <Header headerText="About Gatsby" />
    <Header headerText="It's pretty cool" />
    <p>Such wow. Very React.</p>
  </div>
)