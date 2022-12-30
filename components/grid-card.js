import React from 'react'

import PropTypes from 'prop-types'

const GridCard = (props) => {
  return (
    <>
      <div className={`grid-card-grid-card ${props.rootClassName} `}>
        <h2 className="grid-card-text">{props.text}</h2>
        <span className="Content-Light">{props.text1}</span>
      </div>
      <style jsx>
        {`
          .grid-card-grid-card {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: 36px;
            align-items: flex-start;
            border-color: var(--dl-color-grays-dark100);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            background-color: var(--dl-color-grays-white100);
            border-top-right-radius: var(--dl-radius-radius-radius8);
          }
          .grid-card-text {
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 1.3;
            margin-bottom: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

GridCard.defaultProps = {
  rootClassName: '',
  text1:
    'Trust and a proven track record is key to a trusted relationship with our caregivers. We not only strive to help you with everyday tasks but want to develop a caring relationship with you. We provide one-on-one attention and care that cannot compare in other settings.',
  text: 'Service in Abundance',
}

GridCard.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default GridCard
