import React from 'react'

const ImageGallery = (props) => {
  return (
    <>
      <div className="image-gallery-container">
        <div className="image-gallery-gallery18">
          <div className="image-gallery-section-title">
            <span className="image-gallery-text HeadingH2">
              <span>Image Gallery</span>
            </span>
            <span className="image-gallery-text2 TextMediumNormal">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </span>
          </div>
          <div className="image-gallery-content">
            <div className="image-gallery-content1">
              <div className="image-gallery-content2">
                <img
                  alt="PlaceholderImage4468"
                  src="/playground_assets/placeholderimage4468-eyr0p-500h.png"
                  className="image-gallery-placeholder-image"
                />
                <img
                  alt="PlaceholderImage4468"
                  src="/playground_assets/placeholderimage4468-eb4h-500h.png"
                  className="image-gallery-placeholder-image1"
                />
                <img
                  alt="PlaceholderImage4468"
                  src="/playground_assets/placeholderimage4468-67r9-500h.png"
                  className="image-gallery-placeholder-image2"
                />
                <div className="image-gallery-content3">
                  <button className="image-gallery-button">
                    <img
                      alt="Icon4468"
                      src="/playground_assets/icon4468-lz7j.svg"
                      className="image-gallery-icon"
                    />
                  </button>
                </div>
                <div className="image-gallery-content4">
                  <button className="image-gallery-button1">
                    <img
                      alt="Icon4469"
                      src="/playground_assets/icon4469-qmj.svg"
                      className="image-gallery-icon1"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="image-gallery-slider-dots">
              <img
                alt="Dot4469"
                src="/playground_assets/dot4469-ia8-200h.png"
                className="image-gallery-dot"
              />
              <img
                alt="Dot4469"
                src="/playground_assets/dot4469-inw-200h.png"
                className="image-gallery-dot1"
              />
              <img
                alt="Dot4469"
                src="/playground_assets/dot4469-w9e-200h.png"
                className="image-gallery-dot2"
              />
              <img
                alt="Dot4461"
                src="/playground_assets/dot4461-czfe-200h.png"
                className="image-gallery-dot3"
              />
              <img
                alt="Dot4461"
                src="/playground_assets/dot4461-byek-200h.png"
                className="image-gallery-dot4"
              />
              <img
                alt="Dot4461"
                src="/playground_assets/dot4461-jfwh-200h.png"
                className="image-gallery-dot5"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .image-gallery-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .image-gallery-gallery18 {
            width: 100%;
            height: auto;
            display: flex;
            padding: 112px 64px;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
            background-color: var(--dl-color-default-white);
          }
          .image-gallery-section-title {
            width: 768px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 80px;
            flex-direction: column;
          }
          .image-gallery-text {
            color: var(--dl-color-default-black);
            height: auto;
            align-self: stretch;
            text-align: center;
            line-height: 120.00000476837158%;
            margin-right: 0;
            margin-bottom: 24px;
          }
          .image-gallery-text2 {
            color: var(--dl-color-default-black);
            height: auto;
            align-self: stretch;
            text-align: center;
            line-height: 150%;
            margin-right: 0;
            margin-bottom: 0;
          }
          .image-gallery-content {
            display: flex;
            position: relative;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .image-gallery-content1 {
            width: 1312px;
            height: 416px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 48px;
            background-color: var(--dl-color-default-white);
          }
          .image-gallery-content2 {
            width: 1314px;
            height: 416px;
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 32px;
          }
          .image-gallery-placeholder-image {
            top: 0px;
            left: 0px;
            width: 416px;
            height: 416px;
            position: absolute;
            border-color: transparent;
          }
          .image-gallery-placeholder-image1 {
            top: 0px;
            left: 448px;
            width: 416px;
            height: 416px;
            position: absolute;
            border-color: transparent;
          }
          .image-gallery-placeholder-image2 {
            top: 0px;
            left: 896px;
            width: 416px;
            height: 416px;
            position: absolute;
            border-color: transparent;
          }
          .image-gallery-content3 {
            top: 0px;
            left: 0px;
            width: 1px;
            height: 416px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
          }
          .image-gallery-button {
            top: 180px;
            left: -28px;
            width: 56px;
            display: flex;
            padding: 16px;
            position: absolute;
            align-items: center;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 50px;
            justify-content: center;
            background-color: var(--dl-color-default-white);
          }
          .image-gallery-icon {
            width: 24px;
            height: 24px;
            position: relative;
          }
          .image-gallery-content4 {
            top: 0px;
            left: 1313px;
            width: 1px;
            height: 416px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
          }
          .image-gallery-button1 {
            top: 180px;
            left: -27px;
            width: 56px;
            display: flex;
            padding: 16px;
            position: absolute;
            align-items: center;
            border-color: rgba(0, 0, 0, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 50px;
            justify-content: center;
            background-color: var(--dl-color-default-white);
          }
          .image-gallery-icon1 {
            width: 24px;
            height: 24px;
            position: relative;
          }
          .image-gallery-slider-dots {
            display: flex;
            padding: 10px;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
          }
          .image-gallery-dot {
            width: 8px;
            height: 8px;
            position: relative;
            border-color: transparent;
            margin-right: 9px;
          }
          .image-gallery-dot1 {
            width: 8px;
            height: 8px;
            position: relative;
            border-color: transparent;
            margin-right: 9px;
          }
          .image-gallery-dot2 {
            width: 8px;
            height: 8px;
            position: relative;
            border-color: transparent;
            margin-right: 9px;
          }
          .image-gallery-dot3 {
            width: 8px;
            height: 8px;
            position: relative;
            border-color: transparent;
            margin-right: 9px;
          }
          .image-gallery-dot4 {
            width: 8px;
            height: 8px;
            position: relative;
            border-color: transparent;
            margin-right: 9px;
          }
          .image-gallery-dot5 {
            width: 8px;
            height: 8px;
            position: relative;
            border-color: transparent;
          }
        `}
      </style>
    </>
  )
}

export default ImageGallery
