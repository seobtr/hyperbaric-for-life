import React from 'react'
import Link from 'next/link'

const Copyright = (props) => {
  return (
    <>
      <div className="copyright-copyright">
        <div className="copyright-max-width max-content-container">
          <span className="copyright-text">
            <span>© All rights reserved</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <Link href="/">
              <a className="copyright-link">Hyperbaric For Life</a>
            </Link>
            <span>. </span>
            <span>
              Powered by
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer noopener"
              className="copyright-link1"
            >
              Vercel
            </a>
            <span>
              . Web Design:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://seobtr.com"
              target="_blank"
              rel="noreferrer noopener"
              className="copyright-link2"
            >
              SEO BTR
            </a>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .copyright-copyright {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .copyright-max-width {
            align-items: stretch;
          }
          .copyright-text {
            color: var(--dl-color-grays-gray100);
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
            line-height: 1.5;
          }
          .copyright-link {
            text-decoration: underline;
          }
          .copyright-link1 {
            text-decoration: underline;
          }
          .copyright-link2 {
            text-decoration: underline;
          }
          @media (max-width: 991px) {
            .copyright-max-width {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Copyright
