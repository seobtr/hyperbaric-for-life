import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Paage = (props) => {
  return (
    <>
      <div className="paage-container">
        <Head>
          <title>
            Paage - Hyperbaric Hard-Shell Oxygen Chamber Manufacture |
            Hyperbaric for Life
          </title>
          <meta
            property="og:title"
            content="Paage - Hyperbaric Hard-Shell Oxygen Chamber Manufacture | Hyperbaric for Life"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name5"></Navbar>
        <div className="paage-container1">
          <h1 className="paage-text">404</h1>
          <h1 className="paage-text1">There&apos;s nothing here...</h1>
          <div className="paage-container2">
            <Link href="/">
              <a className="paage-link button">
                <span className="paage-text2">Back to Home</span>
              </a>
            </Link>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name5"></Footer>
      </div>
      <style jsx>
        {`
          .paage-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
            background-color: #000000;
          }
          .paage-container1 {
            flex: 0 0 auto;
            width: auto;
            height: 100px;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
          }
          .paage-text {
            font-size: 3rem;
            background-image: linear-gradient(
              310deg,
              rgb(119, 188, 255),
              rgb(33, 105, 254)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .paage-text1 {
            font-size: 3rem;
            background-image: linear-gradient(
              310deg,
              rgb(119, 188, 255),
              rgb(33, 105, 254)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .paage-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }

          .paage-link {
            color: white;
            width: auto;
            align-self: center;
            background: linear-gradient(310deg, #2152ff, #21d4fd);
            text-align: center;
            transition: 0.3s;
            padding-top: 15px;
            border-color: #ffffff;
            padding-left: 25px;
            border-radius: 10px;
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: 25px;
            padding-bottom: 15px;
            text-decoration: none;
          }
          .paage-link:hover {
            cursor: pointer;
            transform: scale(1.02);
            background: linear-gradient(155deg, #2152ff, #21d4fd);
          }
          .paage-text2 {
            color: rgb(255, 255, 255);
          }
          @media (max-width: 991px) {
            .paage-text {
              align-self: flex-start;
              text-align: left;
            }
            .paage-text1 {
              align-self: flex-start;
              text-align: left;
            }
            .paage-container2 {
              justify-content: center;
            }
            .paage-link {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .paage-container2 {
              height: auto;
              align-self: center;
              flex-direction: column;
              justify-content: flex-start;
            }
          }
          @media (max-width: 479px) {
            .paage-text {
              font-size: 34px;
              align-self: flex-start;
              text-align: left;
              margin-left: var(--dl-space-space-unit);
            }
            .paage-text1 {
              font-size: 34px;
              align-self: flex-start;
              text-align: left;
              margin-left: var(--dl-space-space-unit);
            }
            .paage-container2 {
              justify-content: center;
            }
            .paage-link {
              align-self: flex-start;
            }
            .paage-text2 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Paage
