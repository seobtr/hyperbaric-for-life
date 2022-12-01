import React from 'react'

import PropTypes from 'prop-types'

const GalleryCard = (props) => {
  return (
    <>
      <div className={`gallery-card-gallery-card ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="gallery-card-image"
        />
        <div className="gallery-card-container">
          <h1 className="gallery-card-text">{props.heading}</h1>
          <span className="gallery-card-text1">{props.text}</span>
        </div>
      </div>
      <style jsx>
        {`
          .gallery-card-gallery-card {
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
          .gallery-card-image {
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
          .gallery-card-container {
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
          .gallery-card-container:hover {
            opacity: 1;
          }
          .gallery-card-text {
            color: var(--dl-color-default-white);
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .gallery-card-text1 {
            color: var(--dl-color-default-white);
            text-align: center;
          }

          .gallery-card-root-class-name3 {
            width: auto;
            height: auto;
          }
          .gallery-card-root-class-name4 {
            width: auto;
            height: auto;
          }
          .gallery-card-root-class-name5 {
            background-color: #000000;
          }
          .gallery-card-root-class-name6 {
            width: 461px;
            background-color: #000000;
          }
          .gallery-card-root-class-name7 {
            width: auto;
            height: auto;
          }
          .gallery-card-root-class-name8 {
            max-width: 462px;
          }
          .gallery-card-root-class-name9 {
            width: auto;
            height: auto;
          }
          .gallery-card-root-class-name10 {
            width: auto;
            height: auto;
          }
          .gallery-card-root-class-name11 {
            width: auto;
            height: auto;
          }
          .gallery-card-root-class-name12 {
            width: auto;
            height: auto;
          }
          .gallery-card-root-class-name13 {
            width: auto;
            height: auto;
          }
          @media (max-width: 479px) {
            .gallery-card-text {
              align-self: center;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

GalleryCard.defaultProps = {
  image_src: '/playground_assets/group%201hyperbaric%204%20life1-1500h.png',
  heading: 'Project Title',
  rootClassName: '',
  image_alt: 'Hyperbaric Shell',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
}

GalleryCard.propTypes = {
  image_src: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
}

export default GalleryCard
