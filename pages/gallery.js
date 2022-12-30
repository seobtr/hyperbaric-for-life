import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Gallery = (props) => {
  return (
    <>
      <div className="gallery-container">
        <Head>
          <title>
            Gallery - Hyperbaric Hard-Shell Oxygen Chamber Manufacture |
            Hyperbaric for Life
          </title>
          <meta
            property="og:title"
            content="Gallery - Hyperbaric Hard-Shell Oxygen Chamber Manufacture | Hyperbaric for Life"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name2"></Navbar>
        <div className="gallery-container01">
          <h2 className="gallery-text">
            <span>
              Hyperbaric for Life
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
          </h2>
          <h1 className="gallery-text03">GALLERY</h1>
        </div>
        <main className="gallery-main">
          <div className="gallery-grid">
            <img
              alt="image"
              src="/playground_assets/color_3-1100w.png"
              className="gallery-image"
            />
            <img
              alt="image"
              src="/playground_assets/color_1-2-1100w.png"
              className="gallery-image01"
            />
            <img
              alt="image"
              src="/playground_assets/black-1100w.png"
              className="gallery-image02"
            />
            <img
              alt="image"
              src="/playground_assets/color_3-1100w.png"
              className="gallery-image03"
            />
            <img
              alt="image"
              src="/playground_assets/hyperbaric_base-1100w.png"
              className="gallery-image04"
            />
            <img
              alt="image"
              src="/playground_assets/color_2-1100w.png"
              className="gallery-image05"
            />
            <img
              alt="image"
              src="/playground_assets/color_12-1100w.png"
              className="gallery-image06"
            />
            <img
              alt="image"
              src="/playground_assets/color_2-1100w.png"
              className="gallery-image07"
            />
            <img
              alt="image"
              src="/playground_assets/color_3-1100w.png"
              className="gallery-image08"
            />
            <img
              alt="image"
              src="/playground_assets/hyperbaric_1%20%5B1%5D1-1100w.png"
              className="gallery-image09"
            />
            <img
              alt="image"
              src="/playground_assets/color_1-21-1100w.png"
              className="gallery-image10"
            />
            <img
              alt="image"
              src="/playground_assets/purple%20hyperbaric1-1100w.png"
              className="gallery-image11"
            />
            <img
              alt="image"
              src="/playground_assets/hyperbaric_base-1100w.png"
              className="gallery-image12"
            />
            <img
              alt="image"
              src="/playground_assets/color_2-1100w.png"
              className="gallery-image13"
            />
            <img
              alt="image"
              src="/playground_assets/black-1100w.png"
              className="gallery-image14"
            />
          </div>
        </main>
        <div className="gallery-container02">
          <div className="gallery-container03">
            <div className="gallery-static-gallery">
              <div className="gallery-gallery-card">
                <img
                  alt="Hyperbaric Shell"
                  src="55e46e0c-ed07-4d1a-8edb-c2632d94ffba"
                  className="gallery-image15"
                />
                <div className="gallery-container04">
                  <h1 className="gallery-text04">
                    Hard-Shell Selection, Color Selection, and Preperation.
                  </h1>
                </div>
              </div>
              <div className="gallery-gallery-card1">
                <img
                  alt="Hyperbaric Shell"
                  src="d5874ca5-db56-49f5-b710-da45c0eafe45"
                  className="gallery-image16"
                />
                <div className="gallery-container05">
                  <h1 className="gallery-text05">
                    <span>Application Phase</span>
                    <br></br>
                  </h1>
                </div>
              </div>
              <div className="gallery-gallery-card2">
                <img
                  alt="Hyperbaric Shell"
                  src="e8e1ecd0-aa10-496b-88a2-eec238d0b8c0"
                  className="gallery-image17"
                />
                <div className="gallery-container06">
                  <h1 className="gallery-text08">
                    <span>Electrostatic Application</span>
                    <br></br>
                  </h1>
                </div>
              </div>
              <div className="gallery-gallery-card3">
                <img
                  alt="Hyperbaric Shell"
                  src="acfa3367-ded9-4545-bd5a-461b42181a48"
                  className="gallery-image18"
                />
                <div className="gallery-container07">
                  <h1 className="gallery-text11">Project Title</h1>
                  <span className="gallery-text12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </span>
                </div>
              </div>
              <div className="gallery-gallery-card4">
                <img
                  alt="Hyperbaric Shell"
                  src="b732dfbd-4d2b-4dac-b9f2-7a69c6d6c091"
                  className="gallery-image19"
                />
                <div className="gallery-container08">
                  <h1 className="gallery-text13">Project Title</h1>
                  <span className="gallery-text14">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </span>
                </div>
              </div>
              <div className="gallery-gallery-card5">
                <img
                  alt="Hyperbaric Shell"
                  src="438b53cb-7d1d-4d2f-b6d7-b180ae78b7aa"
                  className="gallery-image20"
                />
                <div className="gallery-container09">
                  <h1 className="gallery-text15">Project Title</h1>
                  <span className="gallery-text16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
      <style jsx>
        {`
          .gallery-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .gallery-container01 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .gallery-text {
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
          .gallery-text03 {
            font-size: 3em;
            align-self: center;
          }
          .gallery-main {
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
          .gallery-grid {
            top: -20%;
            left: -35%;
            width: 70%;
            display: grid;
            opacity: 0.3;
            postion: absolute;
            grid-gap: DoubleUnit;
            position: absolute;
            transform: rotate;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .gallery-image {
            width: 100%;
          }
          .gallery-image01 {
            width: 100%;
            margin-top: -200px;
          }
          .gallery-image02 {
            width: 100%;
            margin-top: -50px;
          }
          .gallery-image03 {
            width: 100%;
          }
          .gallery-image04 {
            width: 100%;
          }
          .gallery-image05 {
            width: 100%;
            margin-top: -200px;
          }
          .gallery-image06 {
            width: 100%;
            margin-top: -50px;
          }
          .gallery-image07 {
            width: 100%;
          }
          .gallery-image08 {
            width: 100%;
            margin-top: -200px;
          }
          .gallery-image09 {
            width: 100%;
            margin-top: -50px;
          }
          .gallery-image10 {
            width: 100%;
          }
          .gallery-image11 {
            width: 100%;
          }
          .gallery-image12 {
            width: 100%;
            margin-top: -200px;
          }
          .gallery-image13 {
            width: 100%;
          }
          .gallery-image14 {
            width: 100%;
          }
          .gallery-container02 {
            width: 95%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: var(--dl-space-space-threeunits);
            margin-left: 0px;
            margin-right: 0px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            backdrop-filter: saturate(200%) blur(30px);
            background-color: rgba(255, 254, 254, 0.8);
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
            border-bottom-left-radius: var(--dl-radius-radius-radius8);
            border-bottom-right-radius: var(--dl-radius-radius-radius8);
          }
          .gallery-container03 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .gallery-static-gallery {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-unit);
            position: relative;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .gallery-gallery-card {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            max-width: 462px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #000000;
          }
          .gallery-image15 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            max-width: 462px;
            object-fit: contain;
          }
          .gallery-container04 {
            width: 100%;
            height: 461px;
            display: flex;
            opacity: 0;
            z-index: 1;
            max-width: 462px;
            max-height: 461px;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.2) 0%,
              rgba(0, 0, 0, 0.9)
            );
          }
          .gallery-container04:hover {
            opacity: 1;
          }
          .gallery-text04 {
            color: var(--dl-color-default-white);
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .gallery-gallery-card1 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            max-width: 462px;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #000000;
          }

          .gallery-image16 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            max-width: 462px;
            object-fit: contain;
          }
          .gallery-container05 {
            width: 100%;
            height: 461px;
            display: flex;
            opacity: 0;
            z-index: 1;
            max-width: 462px;
            max-height: 461px;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.2) 0%,
              rgba(0, 0, 0, 0.9)
            );
          }
          .gallery-container05:hover {
            opacity: 1;
          }
          .gallery-text05 {
            color: var(--dl-color-default-white);
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .gallery-gallery-card2 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            max-width: 462px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #000000;
          }
          .gallery-image17 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            max-width: 462px;
            object-fit: contain;
          }
          .gallery-container06 {
            width: 100%;
            height: 461px;
            display: flex;
            opacity: 0;
            z-index: 1;
            max-width: 462px;
            max-height: 461px;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.2) 0%,
              rgba(0, 0, 0, 0.9)
            );
          }
          .gallery-container06:hover {
            opacity: 1;
          }
          .gallery-text08 {
            color: var(--dl-color-default-white);
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .gallery-gallery-card3 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            max-width: 462px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #000000;
          }
          .gallery-image18 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            max-width: 462px;
            object-fit: contain;
          }
          .gallery-container07 {
            width: 100%;
            height: 461px;
            display: flex;
            opacity: 0;
            z-index: 1;
            max-width: 462px;
            max-height: 461px;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.2) 0%,
              rgba(0, 0, 0, 0.9)
            );
          }
          .gallery-container07:hover {
            opacity: 1;
          }
          .gallery-text11 {
            color: var(--dl-color-default-white);
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .gallery-text12 {
            color: var(--dl-color-default-white);
            text-align: center;
          }
          .gallery-gallery-card4 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            max-width: 462px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #000000;
          }
          .gallery-image19 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            max-width: 462px;
            object-fit: contain;
          }
          .gallery-container08 {
            width: 100%;
            height: 461px;
            display: flex;
            opacity: 0;
            z-index: 1;
            max-width: 462px;
            max-height: 461px;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.2) 0%,
              rgba(0, 0, 0, 0.9)
            );
          }
          .gallery-container08:hover {
            opacity: 1;
          }
          .gallery-text13 {
            color: var(--dl-color-default-white);
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .gallery-text14 {
            color: var(--dl-color-default-white);
            text-align: center;
          }
          .gallery-gallery-card5 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            max-width: 462px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #000000;
          }
          .gallery-image20 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            max-width: 462px;
            object-fit: contain;
          }
          .gallery-container09 {
            width: 100%;
            height: 461px;
            display: flex;
            opacity: 0;
            z-index: 1;
            max-width: 462px;
            max-height: 461px;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.2) 0%,
              rgba(0, 0, 0, 0.9)
            );
          }
          .gallery-container09:hover {
            opacity: 1;
          }
          .gallery-text15 {
            color: var(--dl-color-default-white);
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .gallery-text16 {
            color: var(--dl-color-default-white);
            text-align: center;
          }
          @media (max-width: 1200px) {
            .gallery-container01 {
              width: auto;
              height: auto;
            }
            .gallery-main {
              align-content: flex-start;
            }
            .gallery-grid {
              z-index: -100;
            }
            .gallery-container02 {
              width: 95%;
            }
          }
          @media (max-width: 991px) {
            .gallery-container01 {
              align-self: center;
              margin-top: var(--dl-space-space-threeunits);
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .gallery-text {
              align-self: center;
            }
            .gallery-grid {
              top: -101px;
              left: -226px;
              width: 912px;
              height: 1207px;
              opacity: 0.3;
            }
            .gallery-image {
              width: 120px;
            }
            .gallery-image01 {
              width: 120px;
            }
            .gallery-image02 {
              width: 120px;
            }
            .gallery-image03 {
              width: 120px;
            }
            .gallery-image04 {
              width: 120px;
            }
            .gallery-image05 {
              width: 120px;
            }
            .gallery-image06 {
              width: 120px;
            }
            .gallery-image07 {
              width: 120px;
            }
            .gallery-image08 {
              width: 120px;
            }
            .gallery-image09 {
              width: 120px;
            }
            .gallery-image10 {
              width: 120px;
            }
            .gallery-image11 {
              width: 120px;
            }
            .gallery-image12 {
              width: 120px;
            }
            .gallery-image13 {
              width: 120px;
              margin-top: -50px;
            }
            .gallery-image14 {
              width: 120px;
            }
            .gallery-container02 {
              align-items: center;
            }
            .gallery-container03 {
              justify-content: center;
            }
            .gallery-static-gallery {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .gallery-grid {
              top: -109px;
              left: -268px;
            }
            .gallery-image {
              width: 100px;
            }
            .gallery-image01 {
              width: 100px;
            }
            .gallery-image02 {
              width: 100px;
            }
            .gallery-image03 {
              width: 100px;
            }
            .gallery-image04 {
              width: 100px;
            }
            .gallery-image05 {
              width: 100px;
            }
            .gallery-image06 {
              width: 100px;
            }
            .gallery-image07 {
              width: 100px;
            }
            .gallery-image08 {
              width: 100px;
            }
            .gallery-image09 {
              width: 100px;
            }
            .gallery-image10 {
              width: 100px;
            }
            .gallery-image11 {
              width: 100px;
            }
            .gallery-image12 {
              width: 100px;
            }
            .gallery-image13 {
              width: 100px;
            }
            .gallery-image14 {
              width: 100px;
            }
            .gallery-container02 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .gallery-static-gallery {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 479px) {
            .gallery-text {
              width: auto;
              font-size: 2rem;
              align-self: center;
              text-align: left;
              margin-left: 0px;
            }
            .gallery-grid {
              top: -15px;
              left: -473px;
              height: 928px;
              opacity: 0.8;
              margin-top: 0px;
            }
            .gallery-container02 {
              width: 95%;
              align-self: center;
              margin-left: 0px;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .gallery-static-gallery {
              grid-template-columns: 1fr;
            }
            .gallery-text04 {
              align-self: center;
              margin-bottom: var(--dl-space-space-unit);
            }
            .gallery-text05 {
              align-self: center;
              margin-bottom: var(--dl-space-space-unit);
            }
            .gallery-text08 {
              align-self: center;
              margin-bottom: var(--dl-space-space-unit);
            }
            .gallery-text11 {
              align-self: center;
              margin-bottom: var(--dl-space-space-unit);
            }
            .gallery-text13 {
              align-self: center;
              margin-bottom: var(--dl-space-space-unit);
            }
            .gallery-text15 {
              align-self: center;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Gallery
