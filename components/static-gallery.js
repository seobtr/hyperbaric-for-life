import React from 'react'

import PropTypes from 'prop-types'

import GalleryCard from './gallery-card'

const StaticGallery = (props) => {
  return (
    <>
      <div className={`static-gallery-static-gallery ${props.rootClassName} `}>
        <GalleryCard rootClassName="gallery-card-root-class-name2"></GalleryCard>
        <GalleryCard
          image_src="/playground_assets/mask%20grouphyperbaric%204%20life-51-1500h.png"
          rootClassName="gallery-card-root-class-name"
        ></GalleryCard>
        <GalleryCard
          image_src="/playground_assets/mask%20grouphyperbaric%204%20life-31-1500h.png"
          rootClassName="gallery-card-root-class-name"
        ></GalleryCard>
        <GalleryCard
          image_src="/playground_assets/yellow%20hyperbaric%20iso%201hyperbaric%204%20life1-1500h.png"
          rootClassName="gallery-card-root-class-name"
        ></GalleryCard>
        <GalleryCard
          image_src="/playground_assets/mask%20grouphyperbaric%204%20life-41-1500h.png"
          rootClassName="gallery-card-root-class-name"
        ></GalleryCard>
        <GalleryCard
          image_src="/playground_assets/mask%20grouphyperbaric%204%20life-22-1500h.png"
          rootClassName="gallery-card-root-class-name"
        ></GalleryCard>
      </div>
      <style jsx>
        {`
          .static-gallery-static-gallery {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-unit);
            position: relative;
            grid-template-columns: 1fr 1fr 1fr;
          }
          @media (max-width: 991px) {
            .static-gallery-static-gallery {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .static-gallery-static-gallery {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 479px) {
            .static-gallery-static-gallery {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

StaticGallery.defaultProps = {
  rootClassName: '',
}

StaticGallery.propTypes = {
  rootClassName: PropTypes.string,
}

export default StaticGallery
