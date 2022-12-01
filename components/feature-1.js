import React from 'react'

const Feature1 = (props) => {
  return (
    <>
      <div className="feature-1-container"></div>
      <style jsx>
        {`
          .feature-1-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Feature1
