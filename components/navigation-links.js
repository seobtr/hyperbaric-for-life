import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <Link href="/custom-hyperbarics">
          <a className="navigation-links-link navbar-link">{props.text11}</a>
        </Link>
        <Link href="/turnkey-packages">
          <a className="navigation-links-link1 navbar-link">{props.text2}</a>
        </Link>
        <Link href="/contact">
          <a className="navigation-links-link2 navbar-link">{props.text311}</a>
        </Link>
        <div
          data-thq="thq-dropdown"
          className="navigation-links-thq-dropdown list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            className="navigation-links-dropdown-toggle"
          >
            <span className="navigation-links-text navbar-link">RESOURCES</span>
            <div
              data-thq="thq-dropdown-arrow"
              className="navigation-links-dropdown-arrow"
            >
              <svg viewBox="0 0 1024 1024" className="navigation-links-icon">
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
          </div>
          <ul
            data-thq="thq-dropdown-list"
            className="navigation-links-dropdown-list"
          >
            <li
              data-thq="thq-dropdown"
              className="navigation-links-dropdown list-item"
            ></li>
            <li
              data-thq="thq-dropdown"
              className="navigation-links-dropdown01 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="navigation-links-dropdown-toggle1"
              >
                <Link href="/authorized-dealer">
                  <a className="navigation-links-link3">
                    <span>Dealers</span>
                    <br></br>
                  </a>
                </Link>
              </div>
              <div
                data-thq="thq-dropdown-toggle"
                className="navigation-links-dropdown-toggle2"
              >
                <Link href="/gallery">
                  <a className="navigation-links-link4">
                    <span>Gallery</span>
                    <br></br>
                  </a>
                </Link>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              className="navigation-links-dropdown02 list-item"
            ></li>
            <li
              data-thq="thq-dropdown"
              className="navigation-links-dropdown03 list-item"
            ></li>
            <li
              data-thq="thq-dropdown"
              className="navigation-links-dropdown04 list-item"
            ></li>
            <li
              data-thq="thq-dropdown"
              className="navigation-links-dropdown05 list-item"
            ></li>
            <li
              data-thq="thq-dropdown"
              className="navigation-links-dropdown06 list-item"
            ></li>
            <li
              data-thq="thq-dropdown"
              className="navigation-links-dropdown07 list-item"
            ></li>
            <li
              data-thq="thq-dropdown"
              className="navigation-links-dropdown08 list-item"
            ></li>
            <li
              data-thq="thq-dropdown"
              className="navigation-links-dropdown09 list-item"
            ></li>
          </ul>
        </div>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-link {
            font-size: 16px;
            margin-left: var(--dl-space-space-twounits);
            text-transform: uppercase;
            text-decoration: none;
          }
          .navigation-links-link1 {
            font-size: 16px;
            margin-left: var(--dl-space-space-twounits);
            text-transform: uppercase;
            text-decoration: none;
          }
          .navigation-links-link2 {
            font-size: 16px;
            margin-left: var(--dl-space-space-twounits);
            text-transform: uppercase;
            text-decoration: none;
          }
          .navigation-links-thq-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: 2px;
          }
          .navigation-links-dropdown-toggle {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 2px;
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navigation-links-text {
            color: #000000;
            font-size: 16px;
            margin-left: 0px;
            text-transform: uppercase;
            text-decoration: none;
          }
          .navigation-links-dropdown-arrow {
            transition: 0.3s;
          }
          .navigation-links-icon {
            width: 18px;
            height: 18px;
            margin-top: auto;
            transition: 0.3s;
            margin-bottom: auto;
          }
          .navigation-links-dropdown-list {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: #ffffff;
            list-style-position: inside;
          }
          .navigation-links-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: 2px;
          }
          .navigation-links-dropdown01 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: 2px;
          }
          .navigation-links-dropdown-toggle1 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navigation-links-dropdown-toggle1:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navigation-links-link3 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            text-decoration: none;
          }
          .navigation-links-dropdown-toggle2 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navigation-links-dropdown-toggle2:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navigation-links-link4 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            text-decoration: none;
          }
          .navigation-links-dropdown02 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: 2px;
          }
          .navigation-links-dropdown03 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: 2px;
          }
          .navigation-links-dropdown04 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: 2px;
          }
          .navigation-links-dropdown05 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: 2px;
          }
          .navigation-links-dropdown06 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: 2px;
          }
          .navigation-links-dropdown07 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: 2px;
          }
          .navigation-links-dropdown08 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: 2px;
          }
          .navigation-links-dropdown09 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: 2px;
          }

          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links-link {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .navigation-links-dropdown-toggle {
              padding-top: 0px;
              padding-left: 0px;
            }
            .navigation-links-text {
              color: #000000;
              margin-bottom: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  text2: 'Hard-Shell Chambers',
  rootClassName: '',
  text311: 'CONTACT',
  text11: 'CUSTOM HYPERBARICS',
}

NavigationLinks.propTypes = {
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text311: PropTypes.string,
  text11: PropTypes.string,
}

export default NavigationLinks
