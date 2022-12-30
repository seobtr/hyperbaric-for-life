import React from 'react'

import PropTypes from 'prop-types'

const Component2 = (props) => {
  return (
    <>
      <div className={`component2-container ${props.rootClassName} `}>
        <h3 className="component2-text">{props.heading}</h3>
        <span className="component2-text1">{props.Text}</span>
        <div className="component2-horizontal-list">
          <ul className="component2-ul list"></ul>
          <ul className="component2-ul1 list">
            <li className="component2-li list-item">
              <a
                href={props.link_text1}
                target="_blank"
                rel="noreferrer noopener"
                className="component2-link"
              >
                {props.text21}
              </a>
            </li>
          </ul>
          <ul className="component2-ul2 list">
            <li className="component2-li1 list-item">
              <span className="component2-text2">{props.text2}</span>
            </li>
          </ul>
          <ul className="component2-ul3 list">
            <li className="component2-li2 list-item">
              <span className="component2-text3">{props.text1}</span>
            </li>
          </ul>
          <ul className="component2-ul4 list">
            <li className="component2-li3 list-item">
              <a
                href={props.link_text11}
                target="_blank"
                rel="noreferrer noopener"
                className="component2-link1"
              >
                {props.text211}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .component2-container {
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
          .component2-text1 {
            align-self: center;
          }
          .component2-horizontal-list {
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
          .component2-ul {
            width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-position: inside;
          }
          .component2-ul1 {
            width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-position: inside;
          }
          .component2-li {
            font-size: 12px;
          }
          .component2-link {
            font-size: 16px;
            font-family: Lexend;
            font-weight: 400;
            line-height: 1.1;
            text-transform: none;
            text-decoration: none;
          }
          .component2-ul2 {
            width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-position: inside;
          }
          .component2-li1 {
            font-size: 12px;
          }
          .component2-text2 {
            font-size: 16px;
            font-family: Lexend;
            font-weight: 400;
            line-height: 1.1;
            text-transform: none;
            text-decoration: none;
          }
          .component2-ul3 {
            width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-position: inside;
          }
          .component2-li2 {
            font-size: 12px;
          }
          .component2-text3 {
            font-size: 16px;
            font-family: Lexend;
            font-weight: 400;
            line-height: 1.1;
            text-transform: none;
            text-decoration: none;
          }
          .component2-ul4 {
            width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-position: inside;
          }
          .component2-li3 {
            font-size: 12px;
          }
          .component2-link1 {
            font-size: 16px;
            font-family: Lexend;
            font-weight: 400;
            line-height: 1.1;
            text-transform: none;
            text-decoration: none;
          }

          @media (max-width: 1200px) {
            .component2-text1 {
              text-align: left;
            }
          }
          @media (max-width: 991px) {
            .component2-text1 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .component2-text1 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .component2-container {
              z-index: 100;
            }
            .component2-text {
              align-self: flex-start;
            }
            .component2-text1 {
              font-size: 16px;
              text-align: left;
            }
            .component2-text2 {
              font-size: 16px;
            }
            .component2-root-class-name1 {
              width: auto;
            }
            .component2-root-class-name2 {
              width: 80%;
            }
          }
        `}
      </style>
    </>
  )
}

Component2.defaultProps = {
  text21: 'Manufactured in the USA using USA quality steel and manpower.',
  text1: 'ASME Boiler and Pressure Vessel Code',
  link_text11:
    'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfrl/rl.cfm?rid=63412',
  link_text1:
    'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfrl/rl.cfm?rid=63412',
  Text: 'Hyperbaric for Life Hard-Shell Chamber can safely reach 3.0 ATA. All chambers built after 1/1/2023 are certified to 4.0 ATA for the extra safety. Our Chambers are FDA cleared with 510K. The hyperbaric oxygen chamber is a specially designed unit in which the patient is exposed to 100% oxygen at a pressure greater than sea level. All of Hyperbaric for Life hard-shell chambers are designed, fabricated, assembled, tested, and installed in accordance with the following codes and standards.',
  text2: 'PVHO-1 Safety Standard for Pressure Vessels for Human Occupancy.',
  heading: 'Hyperbaric for Life Standards',
  rootClassName: '',
  text211: 'U.S. FDA 510K Clearance',
}

Component2.propTypes = {
  text21: PropTypes.string,
  text1: PropTypes.string,
  link_text11: PropTypes.string,
  link_text1: PropTypes.string,
  Text: PropTypes.string,
  text2: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  text211: PropTypes.string,
}

export default Component2
