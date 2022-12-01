import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import DualBtn from '../components/dual-btn'
import Component2 from '../components/component2'
import Footer from '../components/footer'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>Contact - Hyperbaric for Life</title>
          <meta property="og:title" content="Contact - Hyperbaric for Life" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name3"></Navbar>
        <div className="contact-main">
          <div className="contact-container1">
            <div className="contact-features">
              <h2 className="contact-text">Contact Us</h2>
              <h2 className="contact-text1">
                <span>Get Started on Your Very Own Hyperbaric Today!</span>
                <br></br>
              </h2>
              <div className="contact-container2">
                <DualBtn rootClassName="dual-btn-root-class-name"></DualBtn>
              </div>
            </div>
            <div className="contact-container3">
              <Component2 rootClassName="component2-root-class-name1"></Component2>
            </div>
          </div>
          <div className="contact-grid">
            <img
              alt="image"
              src="/playground_assets/color_3-1000w.png"
              className="contact-image"
            />
            <img
              alt="image"
              src="/playground_assets/color_1-2-1000w.png"
              className="contact-image01"
            />
            <img
              alt="image"
              src="/playground_assets/black-1000w.png"
              className="contact-image02"
            />
            <img
              alt="image"
              src="/playground_assets/color_3-1000w.png"
              className="contact-image03"
            />
            <img
              alt="image"
              src="/playground_assets/hyperbaric_base-1000w.png"
              className="contact-image04"
            />
            <img
              alt="image"
              src="/playground_assets/color_2-1000w.png"
              className="contact-image05"
            />
            <img
              alt="image"
              src="/playground_assets/color_12-1000w.png"
              className="contact-image06"
            />
            <img
              alt="image"
              src="/playground_assets/color_2-1000w.png"
              className="contact-image07"
            />
            <img
              alt="image"
              src="/playground_assets/color_3-1000w.png"
              className="contact-image08"
            />
            <img
              alt="image"
              src="/playground_assets/hyperbaric_1%20%5B1%5D1-1000w.png"
              className="contact-image09"
            />
            <img
              alt="image"
              src="/playground_assets/color_1-21-1000w.png"
              className="contact-image10"
            />
            <img
              alt="image"
              src="/playground_assets/purple%20hyperbaric1-1000w.png"
              className="contact-image11"
            />
            <img
              alt="image"
              src="/playground_assets/hyperbaric_base-1000w.png"
              className="contact-image12"
            />
            <img
              alt="image"
              src="/playground_assets/color_2-1000w.png"
              className="contact-image13"
            />
            <img
              alt="image"
              src="/playground_assets/black-1000w.png"
              className="contact-image14"
            />
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name3"></Footer>
      </div>
      <style jsx>
        {`
          .contact-container {
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
          .contact-main {
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
          .contact-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact-features {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            z-index: 1;
            position: relative;
            align-self: center;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: 0px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: var(--dl-radius-radius-radius1);
            margin-bottom: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            backdrop-filter: saturate(200%) blur(30px);
            background-color: hsla(0, 0%, 100%, 0.8);
          }
          .contact-text {
            font-size: 3rem;
            align-self: center;
            background-image: linear-gradient(
              310deg,
              rgb(119, 188, 255),
              rgb(33, 105, 254)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .contact-text1 {
            color: var(--dl-color-secondary-700);
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            text-align: left;
          }
          .contact-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .contact-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            z-index: 1;
            position: relative;
            align-self: center;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: 0px;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: var(--dl-radius-radius-radius1);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            backdrop-filter: saturate(200%) blur(30px);
            background-color: hsla(0, 0%, 100%, 0.8);
          }
          .contact-grid {
            top: -20%;
            left: -35%;
            width: 70%;
            display: grid;
            postion: absolute;
            grid-gap: DoubleUnit;
            position: absolute;
            transform: rotate;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .contact-image {
            width: 100%;
          }
          .contact-image01 {
            width: 100%;
            margin-top: -200px;
          }
          .contact-image02 {
            width: 100%;
            margin-top: -50px;
          }
          .contact-image03 {
            width: 100%;
          }
          .contact-image04 {
            width: 100%;
          }
          .contact-image05 {
            width: 100%;
            margin-top: -200px;
          }
          .contact-image06 {
            width: 100%;
            margin-top: -50px;
          }
          .contact-image07 {
            width: 100%;
          }
          .contact-image08 {
            width: 100%;
            margin-top: -200px;
          }
          .contact-image09 {
            width: 100%;
            margin-top: -50px;
          }
          .contact-image10 {
            width: 100%;
          }
          .contact-image11 {
            width: 100%;
          }
          .contact-image12 {
            width: 100%;
            margin-top: -200px;
          }
          .contact-image13 {
            width: 100%;
          }
          .contact-image14 {
            width: 100%;
          }
          @media (max-width: 1200px) {
            .contact-main {
              align-content: flex-start;
            }
            .contact-features {
              width: auto;
              height: auto;
              align-self: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              justify-content: center;
            }
            .contact-text1 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .contact-container3 {
              width: auto;
              height: auto;
              align-self: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              justify-content: center;
            }
          }
          @media (max-width: 991px) {
            .contact-text {
              align-self: center;
            }
            .contact-text1 {
              color: var(--dl-color-secondary-700);
              text-align: center;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .contact-container2 {
              flex-direction: column;
            }
            .contact-grid {
              top: -101px;
              left: -226px;
              width: 912px;
              height: 1207px;
            }
            .contact-image {
              width: 120px;
            }
            .contact-image01 {
              width: 120px;
            }
            .contact-image02 {
              width: 120px;
            }
            .contact-image03 {
              width: 120px;
            }
            .contact-image04 {
              width: 120px;
            }
            .contact-image05 {
              width: 120px;
            }
            .contact-image06 {
              width: 120px;
            }
            .contact-image07 {
              width: 120px;
            }
            .contact-image08 {
              width: 120px;
            }
            .contact-image09 {
              width: 120px;
            }
            .contact-image10 {
              width: 120px;
            }
            .contact-image11 {
              width: 120px;
            }
            .contact-image12 {
              width: 120px;
            }
            .contact-image13 {
              width: 120px;
              margin-top: -50px;
            }
            .contact-image14 {
              width: 120px;
            }
          }
          @media (max-width: 767px) {
            .contact-container2 {
              flex-direction: column;
            }
            .contact-grid {
              top: -109px;
              left: -268px;
            }
            .contact-image {
              width: 100px;
            }
            .contact-image01 {
              width: 100px;
            }
            .contact-image02 {
              width: 100px;
            }
            .contact-image03 {
              width: 100px;
            }
            .contact-image04 {
              width: 100px;
            }
            .contact-image05 {
              width: 100px;
            }
            .contact-image06 {
              width: 100px;
            }
            .contact-image07 {
              width: 100px;
            }
            .contact-image08 {
              width: 100px;
            }
            .contact-image09 {
              width: 100px;
            }
            .contact-image10 {
              width: 100px;
            }
            .contact-image11 {
              width: 100px;
            }
            .contact-image12 {
              width: 100px;
            }
            .contact-image13 {
              width: 100px;
            }
            .contact-image14 {
              width: 100px;
            }
          }
          @media (max-width: 479px) {
            .contact-features {
              width: 95%;
              padding: var(--dl-space-space-twounits);
              margin-top: var(--dl-space-space-fourunits);
              align-items: center;
              border-radius: var(--dl-radius-radius-radius1);
              margin-bottom: var(--dl-space-space-fourunits);
              background-color: hsla(0, 0%, 100%, 0.8);
              border-top-left-radius: var(--dl-radius-radius-radius1);
              border-top-right-radius: var(--dl-radius-radius-radius1);
              border-bottom-left-radius: var(--dl-radius-radius-radius1);
              border-bottom-right-radius: var(--dl-radius-radius-radius1);
            }
            .contact-text {
              width: auto;
              align-self: center;
              text-align: left;
              margin-left: 0px;
            }
            .contact-text1 {
              color: var(--dl-color-secondary-700);
              align-self: center;
              text-align: center;
            }
            .contact-container3 {
              width: 100%;
              opacity: 1;
              padding: var(--dl-space-space-twounits);
              align-items: center;
              background-color: #ffffff;
            }
            .contact-grid {
              top: -15px;
              left: -473px;
              height: 928px;
              opacity: 0.8;
              margin-top: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
