import React from 'react'

import PropTypes from 'prop-types'

const Grid = (props) => {
  return (
    <>
      <div className={`grid-grid ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="grid-image"
        />
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="grid-image01"
        />
        <img
          alt={props.image_alt2}
          src={props.image_src2}
          className="grid-image02"
        />
        <img
          alt={props.image_alt3}
          src={props.image_src3}
          className="grid-image03"
        />
        <img
          alt={props.image_alt4}
          src={props.image_src4}
          className="grid-image04"
        />
        <img
          alt={props.image_alt5}
          src={props.image_src5}
          className="grid-image05"
        />
        <img
          alt={props.image_alt6}
          src={props.image_src6}
          className="grid-image06"
        />
        <img
          alt={props.image_alt7}
          src={props.image_src7}
          className="grid-image07"
        />
        <img
          alt={props.image_alt8}
          src={props.image_src8}
          className="grid-image08"
        />
        <img
          alt={props.image_alt9}
          src={props.image_src9}
          className="grid-image09"
        />
        <img
          alt={props.image_alt10}
          src={props.image_src10}
          className="grid-image10"
        />
        <img
          alt={props.image_alt11}
          src={props.image_src11}
          className="grid-image11"
        />
        <img
          alt={props.image_alt12}
          src={props.image_src12}
          className="grid-image12"
        />
        <img
          alt={props.image_alt13}
          src={props.image_src13}
          className="grid-image13"
        />
        <img
          alt={props.image_alt14}
          src={props.image_src14}
          className="grid-image14"
        />
        <img
          alt={props.image_alt15}
          src={props.image_src15}
          className="grid-image15"
        />
      </div>
      <style jsx>
        {`
          .grid-grid {
            width: 70%;
            display: grid;
            grid-gap: var(--dl-space-space-doubleunit);
            position: relative;
            transform: rotate(20deg);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .grid-image {
            width: 100%;
          }
          .grid-image01 {
            width: 100%;
            margin-top: -200px;
          }
          .grid-image02 {
            width: 100%;
            margin-top: -50px;
          }
          .grid-image03 {
            width: 100%;
          }
          .grid-image04 {
            width: 100%;
          }
          .grid-image05 {
            width: 100%;
            margin-top: -200px;
          }
          .grid-image06 {
            width: 100%;
            margin-top: -50px;
          }
          .grid-image07 {
            width: 100%;
            z-index: 1;
          }
          .grid-image08 {
            width: 100%;
          }
          .grid-image09 {
            width: 100%;
            margin-top: -200px;
          }
          .grid-image10 {
            width: 100%;
            margin-top: -50px;
          }
          .grid-image11 {
            width: 100%;
          }
          .grid-image12 {
            width: 100%;
          }
          .grid-image13 {
            width: 100%;
            margin-top: -200px;
          }
          .grid-image14 {
            width: 100%;
          }
          .grid-image15 {
            width: 100%;
          }
          .grid-root-class-name {
            top: -20%;
            left: -35%;
            position: absolute;
          }
          @media (max-width: 991px) {
            .grid-image {
              width: 120px;
            }
            .grid-image01 {
              width: 120px;
            }
            .grid-image02 {
              width: 120px;
            }
            .grid-image03 {
              width: 120px;
            }
            .grid-image04 {
              width: 120px;
            }
            .grid-image05 {
              width: 120px;
            }
            .grid-image06 {
              width: 120px;
            }
            .grid-image07 {
              width: 120px;
            }
            .grid-image08 {
              width: 120px;
            }
            .grid-image09 {
              width: 120px;
            }
            .grid-image10 {
              width: 120px;
            }
            .grid-image11 {
              width: 120px;
            }
            .grid-image12 {
              width: 120px;
            }
            .grid-image13 {
              width: 120px;
            }
            .grid-image14 {
              width: 120px;
              margin-top: -50px;
            }
            .grid-image15 {
              width: 120px;
            }
          }
          @media (max-width: 767px) {
            .grid-image {
              width: 100px;
            }
            .grid-image01 {
              width: 100px;
            }
            .grid-image02 {
              width: 100px;
            }
            .grid-image03 {
              width: 100px;
            }
            .grid-image04 {
              width: 100px;
            }
            .grid-image05 {
              width: 100px;
            }
            .grid-image06 {
              width: 100px;
            }
            .grid-image07 {
              width: 100px;
            }
            .grid-image08 {
              width: 100px;
            }
            .grid-image09 {
              width: 100px;
            }
            .grid-image10 {
              width: 100px;
            }
            .grid-image11 {
              width: 100px;
            }
            .grid-image12 {
              width: 100px;
            }
            .grid-image13 {
              width: 100px;
            }
            .grid-image14 {
              width: 100px;
            }
            .grid-image15 {
              width: 100px;
            }
          }
        `}
      </style>
    </>
  )
}

Grid.defaultProps = {
  image_alt9: 'image',
  image_alt10: 'image',
  image_alt11: 'image',
  image_alt6: 'image',
  image_src9: '/playground_assets/customhyperbarics5416-4by9-1100w.png',
  image_alt3: 'image',
  image_src: '/playground_assets/group%201hyperbaric%204%20life1-1100w.png',
  image_src1: '/playground_assets/group%201hyperbaric%204%20life1-1100w.png',
  image_alt4: 'image',
  image_alt13: 'image',
  image_alt1: 'image',
  rootClassName: '',
  image_src4:
    '/playground_assets/mask%20grouphyperbaric%204%20life-31-1100w.png',
  image_src14: '/playground_assets/color_1-21-1100w.png',
  image_alt7: 'image',
  image_src7: '/playground_assets/hyperbaric_1-1100w.png',
  image_src5:
    '/playground_assets/mask%20grouphyperbaric%204%20life-51-1100w.png',
  image_alt8: 'image',
  image_src6: '/playground_assets/customhyperbarics5416-4by9-1100w.png',
  image_alt14: 'image',
  image_src11: '/playground_assets/color_1-21-1100w.png',
  image_alt2: 'image',
  image_src2: '/playground_assets/black-1100w.png',
  image_alt15: 'image',
  image_src3: '/playground_assets/color_1-2-1100w.png',
  image_src12:
    '/playground_assets/mask%20grouphyperbaric%204%20life-41-1100w.png',
  image_src13: '/playground_assets/green%20hyperbaric-1100w.png',
  image_alt5: 'image',
  image_src8:
    '/playground_assets/yellow%20hyperbaric%20iso%201hyperbaric%204%20life-1100w.png',
  image_src15: '/playground_assets/black-1100w.png',
  image_alt12: 'image',
  image_src10: '/playground_assets/black-1100w.png',
  image_alt: 'image',
}

Grid.propTypes = {
  image_alt9: PropTypes.string,
  image_alt10: PropTypes.string,
  image_alt11: PropTypes.string,
  image_alt6: PropTypes.string,
  image_src9: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt4: PropTypes.string,
  image_alt13: PropTypes.string,
  image_alt1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src4: PropTypes.string,
  image_src14: PropTypes.string,
  image_alt7: PropTypes.string,
  image_src7: PropTypes.string,
  image_src5: PropTypes.string,
  image_alt8: PropTypes.string,
  image_src6: PropTypes.string,
  image_alt14: PropTypes.string,
  image_src11: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt15: PropTypes.string,
  image_src3: PropTypes.string,
  image_src12: PropTypes.string,
  image_src13: PropTypes.string,
  image_alt5: PropTypes.string,
  image_src8: PropTypes.string,
  image_src15: PropTypes.string,
  image_alt12: PropTypes.string,
  image_src10: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Grid
