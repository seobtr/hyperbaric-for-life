import React from 'react'

import PropTypes from 'prop-types'

const AuthorizedDealerComponent = (props) => {
  return (
    <>
      <div className="authorized-dealer-component-authorized-dealer">
        <div className="authorized-dealer-component-container">
          <h2 className="authorized-dealer-component-text">Distributors</h2>
        </div>
        <h2 className="authorized-dealer-component-text01">
          <span>Get Started on Your Very Own Hyperbaric Today!</span>
          <br></br>
        </h2>
        <div className="authorized-dealer-component-separator"></div>
        <div className="authorized-dealer-component-company-info">
          <div className="authorized-dealer-component-feature-card">
            <img
              alt="image"
              src="/playground_assets/telomere%20one-200h.png"
              className="authorized-dealer-component-image"
            />
          </div>
          <div className="authorized-dealer-component-container01">
            <h3 className="authorized-dealer-component-text04 Healine">
              {props.heading12}
            </h3>
            <span className="authorized-dealer-component-text05">
              {props.dba2}
            </span>
            <span className="authorized-dealer-component-text06">
              {props.address12}
            </span>
            <span className="authorized-dealer-component-text07">
              {props.region2}
            </span>
            <a
              href="tel:+1(512)865-9691"
              className="authorized-dealer-component-link"
            >
              <div className="authorized-dealer-component-container02">
                <div className="authorized-dealer-component-container03">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="authorized-dealer-component-icon"
                  >
                    <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                  </svg>
                </div>
                <span className="authorized-dealer-component-text08">
                  {props.phone2}
                </span>
              </div>
            </a>
            <a
              href={props.link_faxSection2}
              target="_blank"
              rel="noreferrer noopener"
              className="authorized-dealer-component-link1"
            >
              <div className="authorized-dealer-component-fax-section">
                <div className="authorized-dealer-component-container04">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="authorized-dealer-component-icon02"
                  >
                    <path d="M164.571 219.429c50.286 0 91.429 41.143 91.429 91.429v621.714c0 50.286-41.143 91.429-91.429 91.429h-73.143c-50.286 0-91.429-41.143-91.429-91.429v-621.714c0-50.286 41.143-91.429 91.429-91.429h73.143zM950.857 312.571c43.429 25.143 73.143 72.571 73.143 126.286v438.857c0 80.571-65.714 146.286-146.286 146.286h-493.714c-50.286 0-91.429-41.143-91.429-91.429v-877.714c0-30.286 24.571-54.857 54.857-54.857h384c30.286 0 72.571 17.714 93.714 38.857l86.857 86.857c21.143 21.143 38.857 63.429 38.857 93.714v93.143zM530.286 877.714v-73.143c0-10.286-8-18.286-18.286-18.286h-73.143c-10.286 0-18.286 8-18.286 18.286v73.143c0 10.286 8 18.286 18.286 18.286h73.143c10.286 0 18.286-8 18.286-18.286zM530.286 731.429v-73.143c0-10.286-8-18.286-18.286-18.286h-73.143c-10.286 0-18.286 8-18.286 18.286v73.143c0 10.286 8 18.286 18.286 18.286h73.143c10.286 0 18.286-8 18.286-18.286zM530.286 585.143v-73.143c0-10.286-8-18.286-18.286-18.286h-73.143c-10.286 0-18.286 8-18.286 18.286v73.143c0 10.286 8 18.286 18.286 18.286h73.143c10.286 0 18.286-8 18.286-18.286zM676.571 877.714v-73.143c0-10.286-8-18.286-18.286-18.286h-73.143c-10.286 0-18.286 8-18.286 18.286v73.143c0 10.286 8 18.286 18.286 18.286h73.143c10.286 0 18.286-8 18.286-18.286zM676.571 731.429v-73.143c0-10.286-8-18.286-18.286-18.286h-73.143c-10.286 0-18.286 8-18.286 18.286v73.143c0 10.286 8 18.286 18.286 18.286h73.143c10.286 0 18.286-8 18.286-18.286zM676.571 585.143v-73.143c0-10.286-8-18.286-18.286-18.286h-73.143c-10.286 0-18.286 8-18.286 18.286v73.143c0 10.286 8 18.286 18.286 18.286h73.143c10.286 0 18.286-8 18.286-18.286zM822.857 877.714v-73.143c0-10.286-8-18.286-18.286-18.286h-73.143c-10.286 0-18.286 8-18.286 18.286v73.143c0 10.286 8 18.286 18.286 18.286h73.143c10.286 0 18.286-8 18.286-18.286zM822.857 731.429v-73.143c0-10.286-8-18.286-18.286-18.286h-73.143c-10.286 0-18.286 8-18.286 18.286v73.143c0 10.286 8 18.286 18.286 18.286h73.143c10.286 0 18.286-8 18.286-18.286zM822.857 585.143v-73.143c0-10.286-8-18.286-18.286-18.286h-73.143c-10.286 0-18.286 8-18.286 18.286v73.143c0 10.286 8 18.286 18.286 18.286h73.143c10.286 0 18.286-8 18.286-18.286zM877.714 365.714v-146.286h-91.429c-30.286 0-54.857-24.571-54.857-54.857v-91.429h-365.714v292.571h512z"></path>
                  </svg>
                </div>
                <span className="authorized-dealer-component-text09">
                  {props.fax2}
                </span>
              </div>
            </a>
            <a
              href={props.link_container2}
              target="_blank"
              rel="noreferrer noopener"
              className="authorized-dealer-component-link2"
            >
              <div className="authorized-dealer-component-container05">
                <div className="authorized-dealer-component-container06">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="authorized-dealer-component-icon04"
                  >
                    <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 960.002c-62.958 0-122.872-13.012-177.23-36.452l233.148-262.29c5.206-5.858 8.082-13.422 8.082-21.26v-96c0-17.674-14.326-32-32-32-112.99 0-232.204-117.462-233.374-118.626-6-6.002-14.14-9.374-22.626-9.374h-128c-17.672 0-32 14.328-32 32v192c0 12.122 6.848 23.202 17.69 28.622l110.31 55.156v187.886c-116.052-80.956-192-215.432-192-367.664 0-68.714 15.49-133.806 43.138-192h116.862c8.488 0 16.626-3.372 22.628-9.372l128-128c6-6.002 9.372-14.14 9.372-22.628v-77.412c40.562-12.074 83.518-18.588 128-18.588 70.406 0 137.004 16.26 196.282 45.2-4.144 3.502-8.176 7.164-12.046 11.036-36.266 36.264-56.236 84.478-56.236 135.764s19.97 99.5 56.236 135.764c36.434 36.432 85.218 56.264 135.634 56.26 3.166 0 6.342-0.080 9.518-0.236 13.814 51.802 38.752 186.656-8.404 372.334-0.444 1.744-0.696 3.488-0.842 5.224-81.324 83.080-194.7 134.656-320.142 134.656z"></path>
                  </svg>
                </div>
                <span className="authorized-dealer-component-text10">
                  {props.website2}
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="authorized-dealer-component-company-info1">
          <div className="authorized-dealer-component-feature-card1">
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="authorized-dealer-component-image1"
            />
          </div>
          <div className="authorized-dealer-component-container07">
            <h3 className="authorized-dealer-component-text11 Healine">
              {props.heading1}
            </h3>
            <span className="authorized-dealer-component-text12">
              {props.dba}
            </span>
            <span className="authorized-dealer-component-text13">
              {props.address1}
            </span>
            <span className="authorized-dealer-component-text14">
              {props.region}
            </span>
            <a
              href="tel:+1(512)865-9691"
              className="authorized-dealer-component-link3"
            >
              <div className="authorized-dealer-component-container08">
                <div className="authorized-dealer-component-container09">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="authorized-dealer-component-icon06"
                  >
                    <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                  </svg>
                </div>
                <span className="authorized-dealer-component-text15">
                  {props.phone}
                </span>
              </div>
            </a>
            <a
              href={props.link_faxSection}
              target="_blank"
              rel="noreferrer noopener"
              className="authorized-dealer-component-link4"
            >
              <div className="authorized-dealer-component-fax-section1">
                <div className="authorized-dealer-component-container10">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="authorized-dealer-component-icon08"
                  >
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                </div>
                <span className="authorized-dealer-component-text16">
                  {props.email2}
                </span>
              </div>
            </a>
            <a
              href={props.link_container}
              target="_blank"
              rel="noreferrer noopener"
              className="authorized-dealer-component-link5"
            >
              <div className="authorized-dealer-component-container11">
                <div className="authorized-dealer-component-container12">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="authorized-dealer-component-icon10"
                  >
                    <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 960.002c-62.958 0-122.872-13.012-177.23-36.452l233.148-262.29c5.206-5.858 8.082-13.422 8.082-21.26v-96c0-17.674-14.326-32-32-32-112.99 0-232.204-117.462-233.374-118.626-6-6.002-14.14-9.374-22.626-9.374h-128c-17.672 0-32 14.328-32 32v192c0 12.122 6.848 23.202 17.69 28.622l110.31 55.156v187.886c-116.052-80.956-192-215.432-192-367.664 0-68.714 15.49-133.806 43.138-192h116.862c8.488 0 16.626-3.372 22.628-9.372l128-128c6-6.002 9.372-14.14 9.372-22.628v-77.412c40.562-12.074 83.518-18.588 128-18.588 70.406 0 137.004 16.26 196.282 45.2-4.144 3.502-8.176 7.164-12.046 11.036-36.266 36.264-56.236 84.478-56.236 135.764s19.97 99.5 56.236 135.764c36.434 36.432 85.218 56.264 135.634 56.26 3.166 0 6.342-0.080 9.518-0.236 13.814 51.802 38.752 186.656-8.404 372.334-0.444 1.744-0.696 3.488-0.842 5.224-81.324 83.080-194.7 134.656-320.142 134.656z"></path>
                  </svg>
                </div>
                <span className="authorized-dealer-component-text17">
                  {props.website}
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="authorized-dealer-component-company-info2">
          <div className="authorized-dealer-component-feature-card2">
            <img
              alt="image"
              src="/playground_assets/logo%20%E2%80%93%20oxyhealth%20llc-1200w.png"
              className="authorized-dealer-component-image2"
            />
          </div>
          <div className="authorized-dealer-component-container13">
            <h3 className="authorized-dealer-component-text18 Healine">
              {props.heading11}
            </h3>
            <span className="authorized-dealer-component-text19">
              {props.dba3}
            </span>
            <span className="authorized-dealer-component-text20">
              {props.address121}
            </span>
            <span className="authorized-dealer-component-text21">
              {props.region1}
            </span>
            <a
              href="tel:+1(512)865-9691"
              className="authorized-dealer-component-link6"
            >
              <div className="authorized-dealer-component-container14">
                <div className="authorized-dealer-component-container15">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="authorized-dealer-component-icon12"
                  >
                    <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                  </svg>
                </div>
                <span className="authorized-dealer-component-text22">
                  {props.phone1}
                </span>
              </div>
            </a>
            <a
              href={props.link_container1}
              target="_blank"
              rel="noreferrer noopener"
              className="authorized-dealer-component-link7"
            >
              <div className="authorized-dealer-component-container16">
                <div className="authorized-dealer-component-container17">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="authorized-dealer-component-icon14"
                  >
                    <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 960.002c-62.958 0-122.872-13.012-177.23-36.452l233.148-262.29c5.206-5.858 8.082-13.422 8.082-21.26v-96c0-17.674-14.326-32-32-32-112.99 0-232.204-117.462-233.374-118.626-6-6.002-14.14-9.374-22.626-9.374h-128c-17.672 0-32 14.328-32 32v192c0 12.122 6.848 23.202 17.69 28.622l110.31 55.156v187.886c-116.052-80.956-192-215.432-192-367.664 0-68.714 15.49-133.806 43.138-192h116.862c8.488 0 16.626-3.372 22.628-9.372l128-128c6-6.002 9.372-14.14 9.372-22.628v-77.412c40.562-12.074 83.518-18.588 128-18.588 70.406 0 137.004 16.26 196.282 45.2-4.144 3.502-8.176 7.164-12.046 11.036-36.266 36.264-56.236 84.478-56.236 135.764s19.97 99.5 56.236 135.764c36.434 36.432 85.218 56.264 135.634 56.26 3.166 0 6.342-0.080 9.518-0.236 13.814 51.802 38.752 186.656-8.404 372.334-0.444 1.744-0.696 3.488-0.842 5.224-81.324 83.080-194.7 134.656-320.142 134.656z"></path>
                  </svg>
                </div>
                <span className="authorized-dealer-component-text23">
                  {props.website3}
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .authorized-dealer-component-authorized-dealer {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            z-index: 1;
            position: relative;
            align-self: center;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: 0px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: var(--dl-radius-radius-radius1);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            backdrop-filter: saturate(200%) blur(30px);
            background-color: hsla(0, 0%, 100%, 0.8);
          }
          .authorized-dealer-component-container {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .authorized-dealer-component-text {
            font-size: 3rem;
            align-self: center;
            background-image: linear-gradient(
              310deg,
              rgb(119, 188, 255),
              rgb(33, 105, 254)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .authorized-dealer-component-text01 {
            color: var(--dl-color-secondary-700);
            align-self: flex-start;
            margin-top: var(--dl-space-space-unit);
            text-align: left;
          }
          .authorized-dealer-component-separator {
            width: 100px;
            height: 2px;
            background-color: #595959;
          }
          .authorized-dealer-component-company-info {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1320px;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: center;
          }
          .authorized-dealer-component-feature-card {
            width: 33%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #000000;
          }
          .authorized-dealer-component-feature-card:hover {
            transform: scale(1.02);
          }
          .authorized-dealer-component-image {
            width: 100%;
            height: var(--dl-size-size-medium);
            object-fit: contain;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .authorized-dealer-component-container01 {
            flex: 0 0 auto;
            width: 41%;
            display: flex;
            align-items: flex-start;
            margin-left: auto;
            margin-right: auto;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .authorized-dealer-component-text04 {
            color: var(--dl-color-secondary-400);
            margin-top: var(--dl-space-space-unitandhalf);
          }
          .authorized-dealer-component-text05 {
            color: var(--dl-color-secondary-400);
            margin-top: var(--dl-space-space-unit);
          }
          .authorized-dealer-component-text06 {
            color: var(--dl-color-secondary-400);
            margin-top: var(--dl-space-space-unit);
          }
          .authorized-dealer-component-text07 {
            color: var(--dl-color-secondary-400);
            margin-bottom: var(--dl-space-space-unitandhalf);
          }
          .authorized-dealer-component-link {
            display: contents;
          }
          .authorized-dealer-component-container02 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .authorized-dealer-component-container03 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.75rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-700);
          }
          .authorized-dealer-component-icon {
            fill: var(--dl-color-pimary-500);
            width: 20px;
            height: 20px;
          }
          .authorized-dealer-component-text08 {
            color: var(--dl-color-secondary-400);
          }
          .authorized-dealer-component-link1 {
            display: contents;
          }
          .authorized-dealer-component-fax-section {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .authorized-dealer-component-container04 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.75rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-700);
          }
          .authorized-dealer-component-icon02 {
            fill: var(--dl-color-pimary-500);
            width: 20px;
            height: 20px;
          }
          .authorized-dealer-component-text09 {
            color: var(--dl-color-secondary-400);
          }
          .authorized-dealer-component-link2 {
            display: contents;
          }
          .authorized-dealer-component-container05 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .authorized-dealer-component-container06 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.75rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-700);
          }
          .authorized-dealer-component-icon04 {
            fill: var(--dl-color-pimary-500);
            width: 20px;
            height: 20px;
          }
          .authorized-dealer-component-text10 {
            color: var(--dl-color-secondary-400);
          }
          .authorized-dealer-component-company-info1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1320px;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: center;
          }
          .authorized-dealer-component-feature-card1 {
            width: 33%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #0e0d0d;
          }
          .authorized-dealer-component-feature-card1:hover {
            transform: scale(1.02);
          }
          .authorized-dealer-component-image1 {
            width: 100%;
            object-fit: cover;
          }
          .authorized-dealer-component-container07 {
            flex: 0 0 auto;
            width: 41%;
            display: flex;
            align-items: flex-start;
            margin-left: auto;
            margin-right: auto;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .authorized-dealer-component-text11 {
            color: var(--dl-color-secondary-400);
            margin-top: var(--dl-space-space-unitandhalf);
          }
          .authorized-dealer-component-text12 {
            color: var(--dl-color-secondary-400);
            margin-top: var(--dl-space-space-unit);
          }
          .authorized-dealer-component-text13 {
            color: var(--dl-color-secondary-400);
            margin-top: var(--dl-space-space-unit);
          }
          .authorized-dealer-component-text14 {
            color: var(--dl-color-secondary-400);
            margin-bottom: var(--dl-space-space-unitandhalf);
          }
          .authorized-dealer-component-link3 {
            display: contents;
          }
          .authorized-dealer-component-container08 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .authorized-dealer-component-container09 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.75rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-700);
          }
          .authorized-dealer-component-icon06 {
            fill: var(--dl-color-pimary-500);
            width: 20px;
            height: 20px;
          }
          .authorized-dealer-component-text15 {
            color: var(--dl-color-secondary-400);
          }
          .authorized-dealer-component-link4 {
            display: contents;
          }
          .authorized-dealer-component-fax-section1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .authorized-dealer-component-container10 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.75rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-700);
          }
          .authorized-dealer-component-icon08 {
            fill: var(--dl-color-pimary-500);
            width: 20px;
            height: 20px;
          }
          .authorized-dealer-component-text16 {
            color: var(--dl-color-secondary-400);
          }
          .authorized-dealer-component-link5 {
            display: contents;
          }
          .authorized-dealer-component-container11 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .authorized-dealer-component-container12 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.75rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-700);
          }
          .authorized-dealer-component-icon10 {
            fill: var(--dl-color-pimary-500);
            width: 20px;
            height: 20px;
          }
          .authorized-dealer-component-text17 {
            color: var(--dl-color-secondary-400);
          }
          .authorized-dealer-component-company-info2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1320px;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: center;
          }
          .authorized-dealer-component-feature-card2 {
            width: 33%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .authorized-dealer-component-feature-card2:hover {
            transform: scale(1.02);
          }
          .authorized-dealer-component-image2 {
            width: 100%;
            height: var(--dl-size-size-medium);
            object-fit: contain;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .authorized-dealer-component-container13 {
            flex: 0 0 auto;
            width: 41%;
            display: flex;
            align-items: flex-start;
            margin-left: auto;
            margin-right: auto;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .authorized-dealer-component-text18 {
            color: var(--dl-color-secondary-400);
            margin-top: var(--dl-space-space-unitandhalf);
          }
          .authorized-dealer-component-text19 {
            color: var(--dl-color-secondary-400);
            margin-top: var(--dl-space-space-unit);
          }
          .authorized-dealer-component-text20 {
            color: var(--dl-color-secondary-400);
            margin-top: var(--dl-space-space-unit);
          }
          .authorized-dealer-component-text21 {
            color: var(--dl-color-secondary-400);
            margin-bottom: var(--dl-space-space-unitandhalf);
          }
          .authorized-dealer-component-link6 {
            display: contents;
          }
          .authorized-dealer-component-container14 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .authorized-dealer-component-container15 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.75rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-700);
          }
          .authorized-dealer-component-icon12 {
            fill: var(--dl-color-pimary-500);
            width: 20px;
            height: 20px;
          }
          .authorized-dealer-component-text22 {
            color: var(--dl-color-secondary-400);
          }
          .authorized-dealer-component-link7 {
            display: contents;
          }
          .authorized-dealer-component-container16 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .authorized-dealer-component-container17 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.75rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-700);
          }
          .authorized-dealer-component-icon14 {
            fill: var(--dl-color-pimary-500);
            width: 20px;
            height: 20px;
          }
          .authorized-dealer-component-text23 {
            color: var(--dl-color-secondary-400);
          }
          @media (max-width: 1200px) {
            .authorized-dealer-component-authorized-dealer {
              width: auto;
              height: auto;
              align-self: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              justify-content: center;
            }
            .authorized-dealer-component-text01 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .authorized-dealer-component-company-info {
              margin-top: var(--dl-space-space-fourunits);
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .authorized-dealer-component-feature-card {
              background-color: #000000;
            }
            .authorized-dealer-component-image {
              width: 100%;
              height: auto;
            }
            .authorized-dealer-component-text05 {
              margin-top: 0px;
            }
            .authorized-dealer-component-company-info1 {
              margin-top: var(--dl-space-space-fourunits);
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .authorized-dealer-component-feature-card1 {
              background-color: #000000;
            }
            .authorized-dealer-component-text12 {
              margin-top: 0px;
            }
            .authorized-dealer-component-company-info2 {
              margin-top: var(--dl-space-space-fourunits);
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .authorized-dealer-component-image2 {
              width: 100%;
              height: auto;
            }
            .authorized-dealer-component-text19 {
              margin-top: 0px;
            }
          }
          @media (max-width: 991px) {
            .authorized-dealer-component-text {
              align-self: center;
            }
            .authorized-dealer-component-text01 {
              color: var(--dl-color-secondary-700);
              text-align: center;
              margin-bottom: var(--dl-space-space-halfunit);
            }
          }
          @media (max-width: 767px) {
            .authorized-dealer-component-company-info {
              flex-direction: column;
            }
            .authorized-dealer-component-feature-card {
              width: 100%;
            }
            .authorized-dealer-component-container01 {
              width: 100%;
              margin-top: var(--dl-space-space-doubleunit);
            }
            .authorized-dealer-component-company-info1 {
              flex-direction: column;
            }
            .authorized-dealer-component-feature-card1 {
              width: 100%;
            }
            .authorized-dealer-component-container07 {
              width: 100%;
              margin-top: var(--dl-space-space-doubleunit);
            }
            .authorized-dealer-component-company-info2 {
              flex-direction: column;
            }
            .authorized-dealer-component-feature-card2 {
              width: 100%;
            }
            .authorized-dealer-component-container13 {
              width: 100%;
              margin-top: var(--dl-space-space-doubleunit);
            }
          }
          @media (max-width: 479px) {
            .authorized-dealer-component-authorized-dealer {
              width: 95%;
              padding: var(--dl-space-space-twounits);
              align-items: center;
              background-color: hsla(0, 0%, 100%, 0.8);
            }
            .authorized-dealer-component-text {
              width: auto;
              font-size: 2rem;
              align-self: center;
              text-align: left;
              margin-left: 0px;
            }
            .authorized-dealer-component-text01 {
              color: var(--dl-color-secondary-700);
              align-self: flex-start;
              text-align: left;
            }
            .authorized-dealer-component-separator {
              align-self: flex-start;
            }
            .authorized-dealer-component-feature-card {
              width: 100%;
              align-self: flex-start;
            }
            .authorized-dealer-component-container01 {
              align-items: flex-start;
            }
            .authorized-dealer-component-feature-card1 {
              width: 100%;
            }
            .authorized-dealer-component-container07 {
              align-items: flex-start;
            }
            .authorized-dealer-component-feature-card2 {
              width: 100%;
            }
            .authorized-dealer-component-container13 {
              align-items: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

AuthorizedDealerComponent.defaultProps = {
  website3: 'https://www.oxyhealth.com/',
  dba: 'RX-O2 HYPERBARIC CLINIC',
  link_container1: 'https://www.oxyhealth.com/',
  rootClassName: '',
  fax2: '512.327.8701',
  region2: 'West Lake Hills, TX 78746',
  region: 'Glendale, AZ 85301',
  link_faxSection2: 'tel::+1(512)327-8701',
  companyIMG1: '94af37ba-1968-4d49-bb63-6f298d569372',
  heading11: 'OxyHealth Corp',
  phone2: '512.865.9691',
  address121: '10719 Norwalk Blv',
  image_alt1: 'image',
  image_src1: '/playground_assets/rx-02-1200w.png',
  region1: 'Santa Fe Springs, Calf 90670',
  address12: '5656 Bee Cave Road   Suite E-200',
  rootClassName1: '',
  heading1: 'Oxygen Under Pressure Hyperbarics LLC',
  dba2: 'Telemore',
  link_faxSection: 'tel::+1(512)327-8701',
  website: 'RX-O2.com',
  link_container: 'https://rx-o2.com/',
  heading12: 'Telomere LLC',
  phone: '623-930-0887',
  companyIMG2: '/playground_assets/telomere%20one-200h.png',
  phone1: '877-789-0123',
  dba3: 'OXYHEALTH',
  link_container2: 'https://www.telomere.one',
  website2: 'www.telomere.one',
  address1: '5626 N 51st Ave',
  rootClassName2: '',
  email2: 'info@RX-O2.com',
}

AuthorizedDealerComponent.propTypes = {
  website3: PropTypes.string,
  dba: PropTypes.string,
  link_container1: PropTypes.string,
  rootClassName: PropTypes.string,
  fax2: PropTypes.string,
  region2: PropTypes.string,
  region: PropTypes.string,
  link_faxSection2: PropTypes.string,
  companyIMG1: PropTypes.string,
  heading11: PropTypes.string,
  phone2: PropTypes.string,
  address121: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  region1: PropTypes.string,
  address12: PropTypes.string,
  rootClassName1: PropTypes.string,
  heading1: PropTypes.string,
  dba2: PropTypes.string,
  link_faxSection: PropTypes.string,
  website: PropTypes.string,
  link_container: PropTypes.string,
  heading12: PropTypes.string,
  phone: PropTypes.string,
  companyIMG2: PropTypes.string,
  phone1: PropTypes.string,
  dba3: PropTypes.string,
  link_container2: PropTypes.string,
  website2: PropTypes.string,
  address1: PropTypes.string,
  rootClassName2: PropTypes.string,
  email2: PropTypes.string,
}

export default AuthorizedDealerComponent
