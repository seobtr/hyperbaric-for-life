import React from 'react'

import PropTypes from 'prop-types'

const SecondaryButton = (props) => {
  return (
    <>
      <div className="secondary-button-container">
        <button className="secondary-button-button button ButtonSmall">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .secondary-button-container {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .secondary-button-button {
            color: #ffffff;
            outline: none;
            background: linear-gradient(310deg, #141727, #3a416f);
            box-shadow: 0 4px 7px -1px rgb(0 0 0 / 11%),
              0 2px 4px -1px rgb(0 0 0 / 7%);
            transition: all 0.15s ease-in;
            padding-top: var(--dl-space-space-triplequarterunit);
            border-width: 0px;
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-radius5);
            padding-right: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-triplequarterunit);
          }
          .secondary-button-button:hover {
            cursor: pointer;
            transform: scale(1.02);
          }
        `}
      </style>
    </>
  )
}

SecondaryButton.defaultProps = {
  button: 'Button',
}

SecondaryButton.propTypes = {
  button: PropTypes.string,
}

export default SecondaryButton
