import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import DualBtn from '../components/dual-btn'
import FeatureCard4 from '../components/feature-card4'
import FeatureCard2 from '../components/feature-card2'
import FeatureCard41 from '../components/feature-card41'
import SliderSection from '../components/slider-section'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>
            Hyperbaric Hard-Shell Oxygen Chamber Manufacture | Hyperbaric for
            Life
          </title>
          <meta
            property="og:title"
            content="Hyperbaric Hard-Shell Oxygen Chamber Manufacture | Hyperbaric for Life"
          />
        </Head>
        <Navbar></Navbar>
        <main className="home-main">
          <div className="section-container home-hero">
            <div className="home-max-width max-content-container">
              <div className="home-content-container">
                <label className="home-text">HYPERBARIC MANUFACTURE</label>
                <h1 className="home-heading">Hyperbaric Oxygen Chamber</h1>
                <h1 className="home-heading1">Customized for You</h1>
                <img
                  alt="image"
                  src="/playground_assets/customhyperbarics5416-4by9-500h.png"
                  className="home-image"
                />
                <span className="home-text01">
                  <span>
                    Hyperbaric (HBOT)
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text03">hard-shell</span>
                  <span> chamber.</span>
                  <br></br>
                </span>
                <DualBtn rootClassName="dual-btn-root-class-name1"></DualBtn>
                <div className="home-features-container">
                  <div className="home-feature">
                    <svg viewBox="0 0 1024 1024" className="home-icon">
                      <path d="M384 692l452-454 60 60-512 512-238-238 58-60z"></path>
                    </svg>
                    <span className="home-text06">
                      <span>FDA, ASME, PVHO1</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-feature1">
                    <svg viewBox="0 0 1024 1024" className="home-icon2">
                      <path d="M384 692l452-454 60 60-512 512-238-238 58-60z"></path>
                    </svg>
                    <span className="home-text09">Made in the USA</span>
                  </div>
                </div>
              </div>
              <div className="home-image-container">
                <img
                  alt="image"
                  src="/playground_assets/customhyperbarics5416-4by9-500h.png"
                  className="home-image1"
                />
              </div>
            </div>
          </div>
          <div className="home-sections">
            <div className="home-steps">
              <h2 className="home-text10">Our Custom Hyperbaric Approach</h2>
              <span className="home-text11">
                <span>
                  To learn about our Hyperbaric Chambers, customization,
                  accessories and even Hyperbaric training.
                </span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <a
                  href="mailto:hbot4yourlife@gmail.com?subject=Custom Hard-shell Hyperbaric Inquiry "
                  className="home-link"
                >
                  Request a Consultation
                </a>
              </span>
              <div className="home-container01">
                <div className="home-container02">
                  <div className="home-step">
                    <h1 className="home-text16">
                      <span>1</span>
                    </h1>
                    <h1 className="home-text18">
                      <span></span>
                      <span>Concept</span>
                    </h1>
                    <span className="home-text21">
                      <span>Briefing and Ideation</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-step1">
                    <h1 className="home-text24">
                      <span>2</span>
                    </h1>
                    <h1 className="home-text26">
                      <span>Prototype</span>
                    </h1>
                    <span className="home-text28">
                      <span>Mockup of the Hyperbaric</span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="home-container03">
                  <div className="home-step2">
                    <h1 className="home-text31">3</h1>
                    <h1 className="home-text32">
                      <span>P</span>
                      <span>roduction</span>
                    </h1>
                    <span className="home-text35">
                      <span>Assembly of the Hyperbaric</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-step3">
                    <h1 className="home-text38">
                      <span>4</span>
                    </h1>
                    <h1 className="home-text40">
                      <span>Shipping</span>
                    </h1>
                    <span className="home-text42">
                      <span>Service and Onboarding</span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-container04">
              <a
                href="mailto:hbot4yourlife@gmail.com?subject=Requesting Consultation"
                className="home-button button"
              >
                <span className="home-text45">
                  <span className="home-text46">Request a Call</span>
                  <br></br>
                </span>
              </a>
            </div>
            <div className="home-separator"></div>
            <div className="home-container05">
              <div className="home-container06">
                <FeatureCard4 rootClassName="rootClassName1"></FeatureCard4>
                <FeatureCard2 rootClassName="feature-card2-root-class-name"></FeatureCard2>
              </div>
            </div>
            <div className="home-banner">
              <img
                alt="image"
                src="/playground_assets/hyperbaric%20for%20life%20truck%20-%20flippedhyperbaric%204%20life-1200w.png"
                className="home-image2"
              />
              <div className="home-container07">
                <h1 className="home-text48">
                  Let us show you the latest customized hyperbarics delivered to
                  your inbox!
                </h1>
              </div>
              <div className="home-container08">
                <a
                  href="mailto:hbot4life@gmail.com?subject=Request Design Examples"
                  className="home-button1 button"
                >
                  <span className="home-text49">
                    <span className="home-text50">Request Design Examples</span>
                    <br></br>
                  </span>
                </a>
              </div>
            </div>
            <div className="home-features">
              <div className="home-separator1"></div>
              <h2 className="home-text52">
                Discover Our Custom Hard-Shell Chambers
              </h2>
              <div className="home-container09">
                <div className="home-container10">
                  <FeatureCard41 rootClassName="rootClassName1"></FeatureCard41>
                </div>
                <div className="home-container11">
                  <div className="home-gallery-card">
                    <img
                      alt="Hyperbaric Shell"
                      src="/playground_assets/green%20split%20chamber%20manufacturing-600w.png"
                      className="home-image3"
                    />
                  </div>
                </div>
              </div>
            </div>
            <section className="home-gallery">
              <SliderSection></SliderSection>
            </section>
          </div>
          <div className="home-container12">
            <h3 className="home-text53">Hyperbaric for Life Standards</h3>
            <span className="home-text54">
              Hyperbaric for Life Hard-Shell Chamber can safely reach 3.0 ATA.
              All chambers built after 1/1/2023 are certified to 4.0 ATA for the
              extra safety. Our Chambers are FDA cleared with 510K. The
              hyperbaric oxygen chamber is a specially designed unit in which
              the patient is exposed to 100% oxygen at a pressure greater than
              sea level. All of Hyperbaric for Life hard-shell chambers are
              designed, fabricated, assembled, tested, and installed in
              accordance with the following codes and standards
            </span>
            <div className="home-horizontal-list">
              <ul className="home-ul list"></ul>
              <ul className="home-ul1 list">
                <li className="home-li list-item">
                  <span className="home-text55">
                    Manufactured in the USA using USA quality steel and
                    manpower.
                  </span>
                </li>
              </ul>
              <ul className="home-ul2 list">
                <li className="home-li1 list-item">
                  <span className="home-text56">
                    PVHO-1 Safety Standard for Pressure Vessels for Human
                    Occupancy.
                  </span>
                </li>
              </ul>
              <ul className="home-ul3 list">
                <li className="home-li2 list-item">
                  <span className="home-text57">
                    ASME Boiler and Pressure Vessel Code
                  </span>
                </li>
              </ul>
              <ul className="home-ul4 list">
                <li className="home-li3 list-item">
                  <a
                    href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfrl/rl.cfm?rid=63412"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link1"
                  >
                    U.S. FDA 510K Clearance
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </main>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .home-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-max-width {
            padding: var(--dl-space-space-threeunits);
            align-items: flex-start;
          }
          .home-content-container {
            flex: 1;
            display: flex;
            min-width: 50%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text {
            color: rgb(255, 255, 255);
            font-size: 12px;
            padding-top: 10px;
            border-color: var(--dl-color-grays-dark100);
            border-width: 1px;
            padding-left: 15px;
            border-radius: 20px;
            padding-right: 15px;
            padding-bottom: 10px;
            background-color: rgb(0, 0, 0);
            border-top-left-radius: 30;
          }
          .home-heading {
            color: var(--dl-color-grays-dark100);
            font-style: normal;
            font-family: Lexend;
            font-weight: 600;
            line-height: 1.2;
            padding-right: 12px;
            text-transform: none;
            text-decoration: none;
          }
          .home-heading1 {
            font-size: 2.5rem;
            background-image: linear-gradient(
              310deg,
              rgb(119, 188, 255),
              rgb(33, 105, 254)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .home-image {
            width: 478px;
            height: 335px;
            display: none;
            max-width: 589px;
            object-fit: contain;
            margin-left: 45px;
            border-color: var(--dl-color-grays-dark100);
            border-style: hidden;
            border-width: 1px;
            border-radius: 30px;
          }
          .home-text01 {
            font-size: 20px;
            font-family: Lexend;
            line-height: 2;
            padding-bottom: 30px;
          }
          .home-text03 {
            font-weight: 700;
          }
          .home-features-container {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-feature {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            flex-direction: row;
          }
          .home-icon {
            fill: #0083ff;
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-text06 {
            color: var(--dl-color-grays-gray60);
            width: auto;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            margin-right: var(--dl-space-space-halfunit);
          }
          .home-feature1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            flex-direction: row;
          }
          .home-icon2 {
            fill: #0083ff;
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-text09 {
            color: var(--dl-color-grays-gray60);
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            margin-right: var(--dl-space-space-halfunit);
          }
          .home-image-container {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-image1 {
            width: auto;
            height: auto;
            max-width: 589px;
            object-fit: cover;
            margin-left: 45px;
            border-color: var(--dl-color-grays-dark100);
            border-style: hidden;
            border-width: 1px;
            border-radius: 30px;
          }
          .home-sections {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .home-steps {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .home-text10 {
            color: rgb(0, 0, 0);
            font-size: 38px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text11 {
            color: var(--dl-color-grays-dark100);
            width: 70%;
            text-align: center;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-link {
            text-decoration: underline;
          }
          .home-container01 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-container02 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-step {
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
          }
          .home-text16 {
            color: #d9d9d9;
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .home-text18 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .home-text21 {
            color: rgb(89, 89, 89);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: center;
          }
          .home-step1 {
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
          }
          .home-text24 {
            color: #d9d9d9;
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .home-text26 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .home-text28 {
            color: rgb(89, 89, 89);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: center;
          }
          .home-container03 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-step2 {
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
          }
          .home-text31 {
            color: rgb(217, 217, 217);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .home-text32 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .home-text35 {
            color: rgb(89, 89, 89);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: center;
          }
          .home-step3 {
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
          }
          .home-text38 {
            color: #d9d9d9;
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .home-text40 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .home-text42 {
            color: rgb(89, 89, 89);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: center;
          }
          .home-container04 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }

          .home-button {
            color: white;
            align-self: flex-start;
            background: linear-gradient(310deg, #2152ff, #21d4fd);
            text-align: center;
            transition: 0.3s;
            padding-top: 15px;
            border-color: #ffffff;
            padding-left: 25px;
            border-radius: 10px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: 25px;
            padding-bottom: 15px;
            text-decoration: none;
          }
          .home-button:hover {
            cursor: pointer;
            transform: scale(1.02);
            background: linear-gradient(155deg, #2152ff, #21d4fd);
          }
          .home-text45 {
            color: rgb(255, 255, 255);
          }
          .home-separator {
            width: 100px;
            height: 2px;
            background-color: #595959;
          }
          .home-container05 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            border-color: var(--dl-color-grays-dark100);
            border-width: 1px;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container06 {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .home-banner {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
            justify-content: space-between;
            background-color: #000000;
          }
          .home-image2 {
            width: auto;
            height: auto;
            object-fit: contain;
            flex-shrink: 0;
            background-color: var(--dl-color-grays-black100);
          }
          .home-container07 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text48 {
            color: rgb(255, 254, 254);
            align-self: center;
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container08 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }

          .home-button1 {
            color: #000000;
            width: auto;
            align-self: center;
            text-align: center;
            transition: 0.3s;
            padding-top: 15px;
            border-color: #060000;
            padding-left: 25px;
            border-radius: 10px;
            margin-bottom: 0px;
            padding-right: 25px;
            padding-bottom: 15px;
            text-decoration: none;
          }
          .home-button1:hover {
            cursor: pointer;
            transform: scale(1.02);
            background: linear-gradient(155deg, #2152ff, #21d4fd);
          }
          .home-text49 {
            color: rgb(0, 0, 0);
          }
          .home-features {
            width: 100%;
            display: flex;
            padding: 0px;
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .home-separator1 {
            width: 100px;
            height: 2px;
            background-color: #595959;
          }
          .home-text52 {
            font-size: 38px;
            text-align: left;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container10 {
            display: grid;
            grid-template-columns: 1fr;
          }
          .home-container11 {
            width: 600px;
            height: 450px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            margin-left: var(--dl-space-space-fourunits);
            justify-content: center;
            background-color: #ffffff;
          }
          .home-gallery-card {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-image3 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: auto;
            margin: auto;
            position: absolute;
            object-fit: contain;
          }
          .home-gallery {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
            background-color: #000000;
          }
          .home-container12 {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text54 {
            align-self: center;
          }
          .home-horizontal-list {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            padding: 0px;
            position: relative;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-ul {
            width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-position: inside;
          }
          .home-ul1 {
            width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-position: inside;
          }
          .home-li {
            font-size: 12px;
          }
          .home-text55 {
            font-size: 16px;
            font-family: Lexend;
            font-weight: 400;
            line-height: 1.1;
            text-transform: none;
            text-decoration: none;
          }
          .home-ul2 {
            width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-position: inside;
          }
          .home-li1 {
            font-size: 12px;
          }
          .home-text56 {
            font-size: 16px;
            font-family: Lexend;
            font-weight: 400;
            line-height: 1.1;
            text-transform: none;
            text-decoration: none;
          }
          .home-ul3 {
            width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-position: inside;
          }
          .home-li2 {
            font-size: 12px;
          }
          .home-text57 {
            font-size: 16px;
            font-family: Lexend;
            font-weight: 400;
            line-height: 1.1;
            text-transform: none;
            text-decoration: none;
          }
          .home-ul4 {
            width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-position: inside;
          }
          .home-li3 {
            font-size: 12px;
          }
          .home-link1 {
            font-size: 16px;
            font-family: Lexend;
            font-weight: 400;
            line-height: 1.1;
            text-transform: none;
            text-decoration: none;
          }
          @media (max-width: 1200px) {
            .home-image1 {
              width: auto;
              height: auto;
            }
            .home-banner {
              margin-top: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
              background-color: #000000;
            }
            .home-container07 {
              margin-left: var(--dl-space-space-unit);
            }
            .home-text48 {
              text-align: center;
            }
            .home-button1 {
              align-self: center;
            }
            .home-gallery {
              width: 100%;
              height: auto;
              align-items: center;
            }
            .home-text54 {
              text-align: left;
            }
          }
          @media (max-width: 991px) {
            .home-max-width {
              align-items: center;
              flex-direction: column;
            }
            .home-content-container {
              align-items: center;
              margin-bottom: 42px;
              padding-right: 0px;
            }
            .home-heading {
              width: 100%;
              text-align: center;
            }
            .home-heading1 {
              text-align: center;
            }
            .home-image {
              width: auto;
              height: 430px;
              display: block;
              max-width: 100%;
              margin-left: 0px;
            }
            .home-text01 {
              text-align: center;
            }
            .home-feature {
              width: auto;
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
            }
            .home-icon {
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-text06 {
              margin-right: var(--dl-space-space-halfunit);
            }
            .home-feature1 {
              width: auto;
            }
            .home-icon2 {
              margin-left: var(--dl-space-space-halfunit);
              margin-right: 0px;
            }
            .home-text09 {
              margin-right: var(--dl-space-space-halfunit);
            }
            .home-image-container {
              align-items: center;
            }
            .home-image1 {
              display: None;
              max-width: 100%;
              margin-left: 0px;
            }
            .home-sections {
              align-items: center;
            }
            .home-text10 {
              text-align: center;
            }
            .home-text11 {
              text-align: center;
            }
            .home-text16 {
              text-align: center;
            }
            .home-text18 {
              text-align: center;
            }
            .home-text24 {
              text-align: center;
            }
            .home-text26 {
              text-align: center;
            }
            .home-text31 {
              text-align: center;
            }
            .home-text32 {
              text-align: center;
            }
            .home-text38 {
              text-align: center;
            }
            .home-text40 {
              text-align: center;
            }
            .home-button {
              align-self: center;
            }
            .home-container05 {
              flex-direction: column;
            }
            .home-banner {
              flex-direction: column;
            }
            .home-image2 {
              width: auto;
              height: auto;
            }
            .home-container07 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-container08 {
              justify-content: center;
            }
            .home-button1 {
              align-self: center;
            }
            .home-features {
              align-items: center;
            }
            .home-text52 {
              align-self: flex-start;
            }
            .home-container09 {
              align-items: center;
              flex-direction: row;
            }
            .home-container11 {
              width: 300px;
              height: 300px;
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
            }
            .home-text54 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .home-content-container {
              flex-wrap: wrap;
              min-width: auto;
            }
            .home-heading {
              width: auto;
              font-size: 52px;
              text-align: center;
              padding-right: 0px;
            }
            .home-image {
              width: auto;
              height: auto;
              display: block;
            }
            .home-text01 {
              text-align: center;
            }
            .home-features-container {
              flex-wrap: wrap;
              justify-content: center;
            }
            .home-icon {
              margin-left: 0px;
            }
            .home-image1 {
              display: None;
            }
            .home-sections {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-steps {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container01 {
              align-items: center;
              flex-direction: column;
            }
            .home-step {
              padding: var(--dl-space-space-unit);
            }
            .home-step1 {
              padding: var(--dl-space-space-unit);
            }
            .home-step2 {
              padding: var(--dl-space-space-unit);
            }
            .home-step3 {
              padding: var(--dl-space-space-unit);
            }
            .home-container05 {
              flex-direction: column;
            }
            .home-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-image2 {
              width: auto;
              height: auto;
            }
            .home-container07 {
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-container08 {
              height: auto;
              align-self: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-button1 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container09 {
              align-items: center;
              flex-direction: column;
            }
            .home-text54 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              width: auto;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              justify-content: flex-start;
            }
            .home-max-width {
              width: 100%;
              height: 100%;
              padding: var(--dl-space-space-unit);
              align-items: center;
            }
            .home-content-container {
              width: auto;
            }
            .home-heading {
              padding: 0px;
              font-size: 34px;
            }
            .home-heading1 {
              font-size: 34px;
            }
            .home-image {
              width: auto;
              height: auto;
              display: block;
            }
            .home-text01 {
              align-self: stretch;
              text-align: center;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-features-container {
              width: auto;
              height: auto;
              margin-top: var(--dl-space-space-halfunit);
              align-items: center;
              flex-direction: row;
              justify-content: center;
            }
            .home-icon {
              margin-left: 0px;
            }
            .home-sections {
              align-self: center;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-steps {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text10 {
              font-size: 34px;
            }
            .home-text11 {
              text-align: center;
            }
            .home-container01 {
              align-items: center;
            }
            .home-container02 {
              align-items: center;
              flex-direction: column;
            }
            .home-container03 {
              align-items: center;
              flex-direction: column;
            }
            .home-button {
              align-self: flex-start;
            }
            .home-text45 {
              text-align: center;
            }
            .home-text46 {
              text-align: center;
            }
            .home-container06 {
              grid-template-columns: 1fr;
            }
            .home-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: flex-end;
            }
            .home-image2 {
              width: 100%;
              height: auto;
            }
            .home-container07 {
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text48 {
              font-size: 30px;
            }
            .home-button1 {
              align-self: center;
            }
            .home-text49 {
              text-align: center;
            }
            .home-text50 {
              text-align: center;
            }
            .home-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container09 {
              align-items: center;
            }
            .home-container10 {
              grid-template-columns: 1fr;
            }
            .home-container11 {
              width: 250px;
              height: 250px;
            }
            .home-image3 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
            .home-gallery {
              height: 100%;
              background-color: #040000;
            }
            .home-container12 {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              z-index: 100;
              margin-top: var(--dl-space-space-threeunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-text53 {
              align-self: flex-start;
            }
            .home-text54 {
              font-size: 16px;
              text-align: left;
            }
            .home-text55 {
              font-size: 16px;
            }
            .home-text56 {
              font-size: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
