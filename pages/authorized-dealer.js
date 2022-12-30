import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import AuthorizedDealerComponent from '../components/authorized-dealer-component'
import Component2 from '../components/component2'
import Footer from '../components/footer'

const AuthorizedDealer = (props) => {
  return (
    <>
      <div className="authorized-dealer-container">
        <Head>
          <title>
            Authorized-Dealer - Hyperbaric Hard-Shell Oxygen Chamber Manufacture
            | Hyperbaric for Life
          </title>
          <meta
            property="og:title"
            content="Authorized-Dealer - Hyperbaric Hard-Shell Oxygen Chamber Manufacture | Hyperbaric for Life"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name3"></Navbar>
        <div className="authorized-dealer-main">
          <div className="authorized-dealer-container1">
            <AuthorizedDealerComponent></AuthorizedDealerComponent>
          </div>
        </div>
        <Component2 rootClassName="component2-root-class-name"></Component2>
        <Footer rootClassName="footer-root-class-name3"></Footer>
        <Component2></Component2>
      </div>
      <style jsx>
        {`
          .authorized-dealer-container {
            width: 100%;
            height: auto;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            overflow-y: hidden;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .authorized-dealer-main {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 0;
            position: relative;
            max-width: 1320px;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: center;
          }
          .authorized-dealer-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          @media (max-width: 1200px) {
            .authorized-dealer-main {
              align-content: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

export default AuthorizedDealer
