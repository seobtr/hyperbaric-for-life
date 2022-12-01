import React from 'react'

import PropTypes from 'prop-types'

const Discalimer = (props) => {
  return (
    <>
      <div className={`discalimer-container ${props.rootClassName} `}>
        <span className="discalimer-text">{props.Text}</span>
        <div className="discalimer-horizontal-list">
          <ul className="discalimer-ul list"></ul>
          <ul className="discalimer-ul1 list">
            <li className="discalimer-li list-item">
              <span className="discalimer-text1">{props.text22}</span>
            </li>
          </ul>
          <ul className="discalimer-ul2 list">
            <li className="discalimer-li1 list-item">
              <span className="discalimer-text2">{props.text221}</span>
            </li>
          </ul>
          <ul className="discalimer-ul3 list">
            <li className="discalimer-li2 list-item">
              <a
                href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfrl/rl.cfm?rid=63412"
                target="_blank"
                rel="noreferrer noopener"
                className="discalimer-link"
              >
                {props.text21}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .discalimer-container {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .discalimer-text {
            align-self: center;
          }
          .discalimer-horizontal-list {
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
          .discalimer-ul {
            width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-position: inside;
          }
          .discalimer-ul1 {
            width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-position: inside;
          }
          .discalimer-li {
            font-size: 12px;
          }
          .discalimer-text1 {
            font-size: 16px;
            font-family: Lexend;
            font-weight: 400;
            line-height: 1.1;
            text-transform: none;
            text-decoration: none;
          }
          .discalimer-ul2 {
            width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-position: inside;
          }
          .discalimer-li1 {
            font-size: 12px;
          }
          .discalimer-text2 {
            font-size: 16px;
            font-family: Lexend;
            font-weight: 400;
            line-height: 1.1;
            text-transform: none;
            text-decoration: none;
          }
          .discalimer-ul3 {
            width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-position: inside;
          }
          .discalimer-li2 {
            font-size: 12px;
          }
          .discalimer-link {
            font-size: 16px;
            font-family: Lexend;
            font-weight: 400;
            line-height: 1.1;
            text-transform: none;
            text-decoration: none;
          }
          @media (max-width: 479px) {
            .discalimer-text {
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

Discalimer.defaultProps = {
  rootClassName11: '',
  text221: 'ASME Boiler and Pressure Vessel Code',
  rootClassName: '',
  Text: 'Hyperbaric for Life Hard-Shell Chamber can safely reach 3.0 ATA. Our Chambers boasts FDA CLEARANCE. The hyperbaric oxygen chamber is a specially designed unit in which the patient is exposed to 100% oxygen at a pressure greater than sea level. All of Hyperbaric for Life hard-shell hyperbaric oxygen chambers are designed, fabricated, assembled, tested, and installed in accordance with the following codes and standards:',
  text22: 'PVHO-1 Safety Standard for Pressure Vessels for Human Occupancy.',
  text21: 'U.S. FDA 510K Clearance',
  rootClassName1: '',
}

Discalimer.propTypes = {
  rootClassName11: PropTypes.string,
  text221: PropTypes.string,
  rootClassName: PropTypes.string,
  Text: PropTypes.string,
  text22: PropTypes.string,
  text21: PropTypes.string,
  rootClassName1: PropTypes.string,
}

export default Discalimer
