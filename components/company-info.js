import React from 'react'

import PropTypes from 'prop-types'

const CompanyInfo = (props) => {
  return (
    <>
      <div className={`company-info-company-info ${props.rootClassName} `}>
        <div className="company-info-feature-card">
          <img
            alt="image"
            src="/playground_assets/telomere%20one-200h.png"
            className="company-info-image"
          />
        </div>
        <div className="company-info-container">
          <h3 className="company-info-text Healine">{props.heading1}</h3>
          <span className="company-info-text1">{props.dba}</span>
          <span className="company-info-text2">{props.address1}</span>
          <span className="company-info-text3">{props.region}</span>
          <a href="tel:+1(512)865-9691" className="company-info-link">
            <div className="company-info-container1">
              <div className="company-info-container2">
                <svg viewBox="0 0 1024 1024" className="company-info-icon">
                  <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                </svg>
              </div>
              <span className="company-info-text4">{props.phone}</span>
            </div>
          </a>
          <a
            href={props.link_faxSection}
            target="_blank"
            rel="noreferrer noopener"
            className="company-info-link1"
          >
            <div className="company-info-fax-section">
              <div className="company-info-container3">
                <svg viewBox="0 0 1024 1024" className="company-info-icon2">
                  <path d="M164.571 219.429c50.286 0 91.429 41.143 91.429 91.429v621.714c0 50.286-41.143 91.429-91.429 91.429h-73.143c-50.286 0-91.429-41.143-91.429-91.429v-621.714c0-50.286 41.143-91.429 91.429-91.429h73.143zM950.857 312.571c43.429 25.143 73.143 72.571 73.143 126.286v438.857c0 80.571-65.714 146.286-146.286 146.286h-493.714c-50.286 0-91.429-41.143-91.429-91.429v-877.714c0-30.286 24.571-54.857 54.857-54.857h384c30.286 0 72.571 17.714 93.714 38.857l86.857 86.857c21.143 21.143 38.857 63.429 38.857 93.714v93.143zM530.286 877.714v-73.143c0-10.286-8-18.286-18.286-18.286h-73.143c-10.286 0-18.286 8-18.286 18.286v73.143c0 10.286 8 18.286 18.286 18.286h73.143c10.286 0 18.286-8 18.286-18.286zM530.286 731.429v-73.143c0-10.286-8-18.286-18.286-18.286h-73.143c-10.286 0-18.286 8-18.286 18.286v73.143c0 10.286 8 18.286 18.286 18.286h73.143c10.286 0 18.286-8 18.286-18.286zM530.286 585.143v-73.143c0-10.286-8-18.286-18.286-18.286h-73.143c-10.286 0-18.286 8-18.286 18.286v73.143c0 10.286 8 18.286 18.286 18.286h73.143c10.286 0 18.286-8 18.286-18.286zM676.571 877.714v-73.143c0-10.286-8-18.286-18.286-18.286h-73.143c-10.286 0-18.286 8-18.286 18.286v73.143c0 10.286 8 18.286 18.286 18.286h73.143c10.286 0 18.286-8 18.286-18.286zM676.571 731.429v-73.143c0-10.286-8-18.286-18.286-18.286h-73.143c-10.286 0-18.286 8-18.286 18.286v73.143c0 10.286 8 18.286 18.286 18.286h73.143c10.286 0 18.286-8 18.286-18.286zM676.571 585.143v-73.143c0-10.286-8-18.286-18.286-18.286h-73.143c-10.286 0-18.286 8-18.286 18.286v73.143c0 10.286 8 18.286 18.286 18.286h73.143c10.286 0 18.286-8 18.286-18.286zM822.857 877.714v-73.143c0-10.286-8-18.286-18.286-18.286h-73.143c-10.286 0-18.286 8-18.286 18.286v73.143c0 10.286 8 18.286 18.286 18.286h73.143c10.286 0 18.286-8 18.286-18.286zM822.857 731.429v-73.143c0-10.286-8-18.286-18.286-18.286h-73.143c-10.286 0-18.286 8-18.286 18.286v73.143c0 10.286 8 18.286 18.286 18.286h73.143c10.286 0 18.286-8 18.286-18.286zM822.857 585.143v-73.143c0-10.286-8-18.286-18.286-18.286h-73.143c-10.286 0-18.286 8-18.286 18.286v73.143c0 10.286 8 18.286 18.286 18.286h73.143c10.286 0 18.286-8 18.286-18.286zM877.714 365.714v-146.286h-91.429c-30.286 0-54.857-24.571-54.857-54.857v-91.429h-365.714v292.571h512z"></path>
                </svg>
              </div>
              <span className="company-info-text5">{props.fax}</span>
            </div>
          </a>
          <a
            href={props.link_container}
            target="_blank"
            rel="noreferrer noopener"
            className="company-info-link2"
          >
            <div className="company-info-container4">
              <div className="company-info-container5">
                <svg viewBox="0 0 1024 1024" className="company-info-icon4">
                  <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 960.002c-62.958 0-122.872-13.012-177.23-36.452l233.148-262.29c5.206-5.858 8.082-13.422 8.082-21.26v-96c0-17.674-14.326-32-32-32-112.99 0-232.204-117.462-233.374-118.626-6-6.002-14.14-9.374-22.626-9.374h-128c-17.672 0-32 14.328-32 32v192c0 12.122 6.848 23.202 17.69 28.622l110.31 55.156v187.886c-116.052-80.956-192-215.432-192-367.664 0-68.714 15.49-133.806 43.138-192h116.862c8.488 0 16.626-3.372 22.628-9.372l128-128c6-6.002 9.372-14.14 9.372-22.628v-77.412c40.562-12.074 83.518-18.588 128-18.588 70.406 0 137.004 16.26 196.282 45.2-4.144 3.502-8.176 7.164-12.046 11.036-36.266 36.264-56.236 84.478-56.236 135.764s19.97 99.5 56.236 135.764c36.434 36.432 85.218 56.264 135.634 56.26 3.166 0 6.342-0.080 9.518-0.236 13.814 51.802 38.752 186.656-8.404 372.334-0.444 1.744-0.696 3.488-0.842 5.224-81.324 83.080-194.7 134.656-320.142 134.656z"></path>
                </svg>
              </div>
              <span className="company-info-text6">{props.website}</span>
            </div>
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .company-info-company-info {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1320px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .company-info-feature-card {
            width: 33%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .company-info-feature-card:hover {
            transform: scale(1.02);
          }
          .company-info-image {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            object-fit: contain;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .company-info-container {
            flex: 0 0 auto;
            width: 41%;
            display: flex;
            align-items: flex-start;
            margin-left: auto;
            margin-right: auto;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .company-info-text {
            color: var(--dl-color-secondary-400);
            margin-top: var(--dl-space-space-unitandhalf);
          }
          .company-info-text1 {
            color: var(--dl-color-secondary-400);
            margin-top: var(--dl-space-space-unit);
          }
          .company-info-text2 {
            color: var(--dl-color-secondary-400);
            margin-top: var(--dl-space-space-unit);
          }
          .company-info-text3 {
            color: var(--dl-color-secondary-400);
            margin-bottom: var(--dl-space-space-unitandhalf);
          }
          .company-info-link {
            display: contents;
          }
          .company-info-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .company-info-container2 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.75rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-700);
          }
          .company-info-icon {
            fill: var(--dl-color-pimary-500);
            width: 20px;
            height: 20px;
          }
          .company-info-text4 {
            color: var(--dl-color-secondary-400);
          }
          .company-info-link1 {
            display: contents;
          }
          .company-info-fax-section {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .company-info-container3 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.75rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-700);
          }
          .company-info-icon2 {
            fill: var(--dl-color-pimary-500);
            width: 20px;
            height: 20px;
          }
          .company-info-text5 {
            color: var(--dl-color-secondary-400);
          }
          .company-info-link2 {
            display: contents;
          }
          .company-info-container4 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .company-info-container5 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.75rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-700);
          }
          .company-info-icon4 {
            fill: var(--dl-color-pimary-500);
            width: 20px;
            height: 20px;
          }
          .company-info-text6 {
            color: var(--dl-color-secondary-400);
          }
          @media (max-width: 1200px) {
            .company-info-feature-card {
              background-color: #000000;
            }
            .company-info-image {
              width: 100%;
              height: auto;
            }
            .company-info-text1 {
              margin-top: 0px;
            }
          }
          @media (max-width: 767px) {
            .company-info-company-info {
              flex-direction: column;
            }
            .company-info-container {
              width: 100%;
              margin-top: var(--dl-space-space-doubleunit);
            }
          }
          @media (max-width: 479px) {
            .company-info-container {
              align-items: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

CompanyInfo.defaultProps = {
  link_faxSection: 'tel::+1(512)327-8701',
  website: 'www.telomere.one',
  heading1: 'Telomere LLC',
  fax: '512.327.8701',
  text: '5656 Bee Cave Road   Suite E-200',
  dba: 'Telemore',
  phone: '512.865.9691',
  rootClassName: '',
  address1: '5656 Bee Cave Road   Suite E-200',
  link_container: 'https://www.telomere.one',
  companyIMG: '/playground_assets/telomere%20one-200h.png',
  region: 'West Lake Hills, TX 78746',
}

CompanyInfo.propTypes = {
  link_faxSection: PropTypes.string,
  website: PropTypes.string,
  heading1: PropTypes.string,
  fax: PropTypes.string,
  text: PropTypes.string,
  dba: PropTypes.string,
  phone: PropTypes.string,
  rootClassName: PropTypes.string,
  address1: PropTypes.string,
  link_container: PropTypes.string,
  companyIMG: PropTypes.string,
  region: PropTypes.string,
}

export default CompanyInfo
