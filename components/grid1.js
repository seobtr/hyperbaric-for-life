import React from 'react'

import PropTypes from 'prop-types'

const Grid1 = (props) => {
  return (
    <>
      <div className="grid1-grid">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="grid1-image"
        />
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="grid1-image01"
        />
        <img
          alt={props.image_alt2}
          src={props.image_src2}
          className="grid1-image02"
        />
        <img
          alt={props.image_alt3}
          src={props.image_src3}
          className="grid1-image03"
        />
        <img
          alt={props.image_alt4}
          src={props.image_src4}
          className="grid1-image04"
        />
        <img
          alt={props.image_alt5}
          src={props.image_src5}
          className="grid1-image05"
        />
        <img
          alt={props.image_alt6}
          src={props.image_src6}
          className="grid1-image06"
        />
        <img
          alt={props.image_alt7}
          src={props.image_src7}
          className="grid1-image07"
        />
        <img
          alt={props.image_alt8}
          src={props.image_src8}
          className="grid1-image08"
        />
        <img
          alt={props.image_alt9}
          src={props.image_src9}
          className="grid1-image09"
        />
        <img
          alt={props.image_alt10}
          src={props.image_src10}
          className="grid1-image10"
        />
        <img
          alt={props.image_alt11}
          src={props.image_src11}
          className="grid1-image11"
        />
        <img
          alt={props.image_alt12}
          src={props.image_src12}
          className="grid1-image12"
        />
        <img
          alt={props.image_alt13}
          src={props.image_src13}
          className="grid1-image13"
        />
        <img
          alt={props.image_alt14}
          src={props.image_src14}
          className="grid1-image14"
        />
        <img
          alt={props.image_alt15}
          src={props.image_src15}
          className="grid1-image15"
        />
      </div>
      <style jsx>
        {`
          .grid1-grid {
            width: 70%;
            display: grid;
            grid-gap: var(--dl-space-space-doubleunit);
            position: relative;
            transform: rotate(20deg);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .grid1-image {
            width: 100%;
          }
          .grid1-image01 {
            width: 100%;
            margin-top: -200px;
          }
          .grid1-image02 {
            width: 100%;
            margin-top: -50px;
          }
          .grid1-image03 {
            width: 100%;
          }
          .grid1-image04 {
            width: 100%;
          }
          .grid1-image05 {
            width: 100%;
            margin-top: -200px;
          }
          .grid1-image06 {
            width: 100%;
            margin-top: -50px;
          }
          .grid1-image07 {
            width: 100%;
            z-index: 1;
          }
          .grid1-image08 {
            width: 100%;
          }
          .grid1-image09 {
            width: 100%;
            margin-top: -200px;
          }
          .grid1-image10 {
            width: 100%;
            margin-top: -50px;
          }
          .grid1-image11 {
            width: 100%;
          }
          .grid1-image12 {
            width: 100%;
          }
          .grid1-image13 {
            width: 100%;
            margin-top: -200px;
          }
          .grid1-image14 {
            width: 100%;
          }
          .grid1-image15 {
            width: 100%;
          }
          .grid1-root-class-name1 {
            top: -20%;
            left: -35%;
            position: absolute;
          }
          @media (max-width: 991px) {
            .grid1-image {
              width: 120px;
            }
            .grid1-image01 {
              width: 120px;
            }
            .grid1-image02 {
              width: 120px;
            }
            .grid1-image03 {
              width: 120px;
            }
            .grid1-image04 {
              width: 120px;
            }
            .grid1-image05 {
              width: 120px;
            }
            .grid1-image06 {
              width: 120px;
            }
            .grid1-image07 {
              width: 120px;
            }
            .grid1-image08 {
              width: 120px;
            }
            .grid1-image09 {
              width: 120px;
            }
            .grid1-image10 {
              width: 120px;
            }
            .grid1-image11 {
              width: 120px;
            }
            .grid1-image12 {
              width: 120px;
            }
            .grid1-image13 {
              width: 120px;
            }
            .grid1-image14 {
              width: 120px;
              margin-top: -50px;
            }
            .grid1-image15 {
              width: 120px;
            }
          }
          @media (max-width: 767px) {
            .grid1-image {
              width: 100px;
            }
            .grid1-image01 {
              width: 100px;
            }
            .grid1-image02 {
              width: 100px;
            }
            .grid1-image03 {
              width: 100px;
            }
            .grid1-image04 {
              width: 100px;
            }
            .grid1-image05 {
              width: 100px;
            }
            .grid1-image06 {
              width: 100px;
            }
            .grid1-image07 {
              width: 100px;
            }
            .grid1-image08 {
              width: 100px;
            }
            .grid1-image09 {
              width: 100px;
            }
            .grid1-image10 {
              width: 100px;
            }
            .grid1-image11 {
              width: 100px;
            }
            .grid1-image12 {
              width: 100px;
            }
            .grid1-image13 {
              width: 100px;
            }
            .grid1-image14 {
              width: 100px;
            }
            .grid1-image15 {
              width: 100px;
            }
          }
        `}
      </style>
    </>
  )
}

Grid1.defaultProps = {
  image_src7: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt7: 'image',
  image_src15: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt5: 'image',
  image_src14: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt4: 'image',
  image_alt1: 'image',
  image_src6: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src10: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt9: 'image',
  image_src12: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src9: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt3: 'image',
  image_alt13: 'image',
  image_alt15: 'image',
  image_src8: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt11: 'image',
  image_src5: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt12: 'image',
  image_alt2: 'image',
  image_alt: 'image',
  image_src4: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src11: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt10: 'image',
  image_alt14: 'image',
  image_src3: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src13: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src2: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt8: 'image',
  image_alt6: 'image',
}

Grid1.propTypes = {
  image_src7: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt7: PropTypes.string,
  image_src15: PropTypes.string,
  image_alt5: PropTypes.string,
  image_src14: PropTypes.string,
  image_src: PropTypes.string,
  image_alt4: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src6: PropTypes.string,
  image_src10: PropTypes.string,
  image_alt9: PropTypes.string,
  image_src12: PropTypes.string,
  image_src9: PropTypes.string,
  image_alt3: PropTypes.string,
  image_alt13: PropTypes.string,
  image_alt15: PropTypes.string,
  image_src8: PropTypes.string,
  image_alt11: PropTypes.string,
  image_src5: PropTypes.string,
  image_alt12: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt: PropTypes.string,
  image_src4: PropTypes.string,
  image_src11: PropTypes.string,
  image_alt10: PropTypes.string,
  image_alt14: PropTypes.string,
  image_src3: PropTypes.string,
  image_src13: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt8: PropTypes.string,
  image_alt6: PropTypes.string,
}

export default Grid1
