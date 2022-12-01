import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <footer
        className={`footer-footer section-container ${props.rootClassName} `}
      >
        <footer className="footer-footer1">
          <div className="footer-container">
            <div className="footer-logo">
              <Link href="/">
                <a className="footer-link">
                  <img
                    id="logo"
                    alt="hyperbaric4life logo"
                    src="/playground_assets/group%2013.svg"
                    className="footer-image"
                  />
                </a>
              </Link>
              <span className="footer-text">
                Hard-Shell Hyperbaric Chamber Manufacture
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="footer-links-container">
              <div className="footer-container1">
                <div className="footer-company-container">
                  <span className="footer-text1">Products</span>
                  <Link href="/turnkey-packages">
                    <a className="footer-link1"> Hard-Shell Hyperbaric</a>
                  </Link>
                  <Link href="/turnkey-packages">
                    <a className="footer-link2">Specifications</a>
                  </Link>
                  <Link href="/authorized-dealer">
                    <a className="footer-link3">Authorized Dealer</a>
                  </Link>
                  <Link href="/gallery">
                    <a className="footer-link4">Gallery</a>
                  </Link>
                </div>
              </div>
              <div className="footer-container2">
                <div className="footer-contact">
                  <span className="footer-text2">Contact Us</span>
                  <a
                    href="mailto:hbot4life@gmail.com?subject="
                    className="footer-link5"
                  >
                    <div className="footer-container3">
                      <span>Email </span>
                      <svg viewBox="0 0 1024 1024" className="footer-icon">
                        <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="footer-socials"></div>
              </div>
            </div>
          </div>
          <span className="footer-text4">
            <span>
              Disclaimer: Our hard-shell chambers are not approved to diagnose,
              treat, cure, or prevent any disease.
            </span>
            <br></br>
          </span>
          <div className="footer-separator"></div>
          <span className="footer-text7">
            <span>
              © All rights reserved Hyperbaric For Life. Powered by Vercel. Web
              Design:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://seobtr.com"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link6"
            >
              SEO BTR
            </a>
          </span>
        </footer>
      </footer>
      <style jsx>
        {`
          .footer-footer {
            z-index: 100;
            border-color: rgba(33, 33, 33, 0.1);
            border-width: 1px;
            background-color: #ffffff;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .footer-footer1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .footer-container {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-logo {
            width: 200px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-link {
            display: contents;
          }
          .footer-image {
            width: 106px;
            margin-bottom: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .footer-text {
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .footer-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-container1 {
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-company-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text1 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-link1 {
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .footer-link2 {
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .footer-link3 {
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .footer-link4 {
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .footer-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-contact {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text2 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-link5 {
            display: contents;
          }
          .footer-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
            text-decoration: none;
          }
          .footer-icon {
            width: 24px;
            height: 24px;
          }
          .footer-socials {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text4 {
            font-size: 12px;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
          }
          .footer-separator {
            width: 100%;
            height: 1px;
            margin-top: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            background-color: #d9d9d9;
          }
          .footer-text7 {
            align-self: center;
          }
          .footer-link6 {
            text-decoration: underline;
          }

          @media (max-width: 1200px) {
            .footer-text4 {
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 991px) {
            .footer-footer1 {
              flex-direction: column;
            }
            .footer-image {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .footer-container1 {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .footer-footer1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .footer-container {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .footer-logo {
              align-items: center;
            }
            .footer-text {
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .footer-links-container {
              width: 100%;
              align-items: flex-start;
              flex-direction: row;
              justify-content: center;
            }
            .footer-container1 {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .footer-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .footer-footer1 {
              padding: var(--dl-space-space-unit);
            }
            .footer-container {
              align-items: center;
              flex-direction: column;
            }
            .footer-text {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer-links-container {
              align-items: center;
              flex-direction: column;
            }
            .footer-container1 {
              margin-right: 0px;
            }
            .footer-company-container {
              align-items: center;
            }
            .footer-container2 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              align-items: flex-start;
              margin-bottom: 0px;
            }
            .footer-contact {
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer-text4 {
              text-align: center;
            }
            .footer-text7 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  rootClassName: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
}

export default Footer
