import React, { Fragment } from "react"

const SiteLayout = ({ children }) => {
  return (
    <Fragment>
      <header>
        <h1>Gatsby Monorepo Tutorial</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>Site Footer</p>
      </footer>
    </Fragment>
  )
}

export default SiteLayout
