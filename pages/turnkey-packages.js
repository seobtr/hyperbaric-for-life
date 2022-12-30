import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import DualBtn from '../components/dual-btn'
import Fortius420VariablePressure from '../components/fortius-420-variable-pressure'
import Fortius420Spec2 from '../components/fortius-420-spec-2'
import Fortius420Spec3 from '../components/fortius-420-spec-3'
import VerticalListSpec from '../components/vertical-list-spec'
import Component2 from '../components/component2'
import Footer from '../components/footer'

const TurnkeyPackages = (props) => {
  return (
    <>
      <div className="turnkey-packages-container">
        <Head>
          <title>
            Turnkey-Packages - Hyperbaric Hard-Shell Oxygen Chamber Manufacture
            | Hyperbaric for Life
          </title>
          <meta
            property="og:title"
            content="Turnkey-Packages - Hyperbaric Hard-Shell Oxygen Chamber Manufacture | Hyperbaric for Life"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <div className="turnkey-packages-hero">
          <div className="turnkey-packages-hero1">
            <div className="turnkey-packages-container01">
              <label className="turnkey-packages-text">
                HYPERBARIC MANUFACTURE
              </label>
              <div className="turnkey-packages-container02">
                <h1 className="turnkey-packages-heading">
                  <span className="turnkey-packages-text01">
                    TURNKEY
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br className="turnkey-packages-text02"></br>
                  <span className="turnkey-packages-text03">HYPERBARICS</span>
                  <br></br>
                </h1>
                <a
                  href="mailto:hbot4life@gmail.com?subject=Price Request"
                  className="turnkey-packages-link"
                >
                  <DualBtn
                    rootClassName="dual-btn-root-class-name4"
                    className="turnkey-packages-dual-btn"
                  ></DualBtn>
                </a>
              </div>
            </div>
            <div className="turnkey-packages-container03">
              <img
                alt="image"
                src="/playground_assets/foritus%20hardshell%20chamber%20unlabeled-600w.png"
                className="turnkey-packages-image"
              />
            </div>
            <a
              href="mailto:hbot4life@gmail.com?subject=Price Request"
              className="turnkey-packages-link1"
            >
              <DualBtn
                rootClassName="dual-btn-root-class-name3"
                className="turnkey-packages-dual-btn1"
              ></DualBtn>
            </a>
          </div>
        </div>
        <div className="turnkey-packages-features">
          <h2 id="fortius420" className="turnkey-packages-heading1">
            <span className="turnkey-packages-text05">
              FORTIUS 420
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
          </h2>
          <span className="turnkey-packages-text07">
            <span>
              Our largest and most versatile chamber. Physicians and
              practicioners can treat patients up to 3.0 ATA (29 psi) operating
              pressure. This chamber boasts a considerable 42&quot; diametric
              interior, yet is designed to fit in most offices and clinics. With
              mirrored controls inside and out the Fortius420® offers remarkably
              safe functionality at a wide range of protocols. Additionally,
              this chamber can deliver 100% oxygen at up to 3.0 ATA through a
              hood assembly system to remain cost effective for physicians while
              being safe for patients.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>
              In most cases the standard chamber can be shipped and installed in
              less than 10-15 business days. We pride ourselves on having
              chambers in stock.
            </span>
          </span>
          <div className="turnkey-packages-container04">
            <div className="turnkey-packages-container05">
              <div className="turnkey-packages-container06">
                <img
                  alt="image"
                  src="/playground_assets/fortius-420%20%5B1%5D-200h.png"
                  className="turnkey-packages-image1"
                />
              </div>
              <Fortius420VariablePressure rootClassName="rootClassName1"></Fortius420VariablePressure>
              <Fortius420Spec2 rootClassName="fortius420spec2-root-class-name"></Fortius420Spec2>
              <Fortius420Spec3 rootClassName="fortius420spec3-root-class-name"></Fortius420Spec3>
              <div className="turnkey-packages-feature-card">
                <svg viewBox="0 0 1024 1024" className="turnkey-packages-icon">
                  <path d="M616.149 181.12l-104.149 60.16-104.149-60.16 82.603-47.189c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM170.667 585.941l106.667 61.611v120.747l-85.12-48.64c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581zM746.667 768.299v-120.747l106.667-61.611v96.725c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333zM809.003 291.328l-297.003 171.819-297.003-171.819 107.093-61.227 168.576 97.408c13.611 7.851 29.739 7.381 42.709 0l168.533-97.365zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l136.448-77.995c9.301-1.835 17.536-6.699 23.637-13.483l138.624-79.232c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-139.008-79.403c-6.272-7.125-14.635-11.776-23.595-13.525l-136.405-77.952c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-136.533 77.995c-8.96 1.749-17.323 6.4-23.595 13.483l-138.624 79.232c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l139.008 79.445c6.059 6.827 14.293 11.691 23.637 13.483l136.405 77.952c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-106.667-60.928v-194.133c0-15.701-8.491-29.44-21.333-36.949l-170.667-98.603v-123.093zM554.667 877.995v-340.949l298.667-172.757v123.093l-170.667 98.603c-13.611 7.851-21.248 22.059-21.333 36.949v194.133z"></path>
                </svg>
                <h2 className="turnkey-packages-text12">Materials</h2>
                <ul className="turnkey-packages-ul list">
                  <li className="turnkey-packages-li list-item">
                    <span className="turnkey-packages-text13">
                      Non-toxic and medical grade components
                    </span>
                  </li>
                  <li className="turnkey-packages-li01 list-item">
                    <span className="turnkey-packages-text14">
                      Reinforced Steel
                    </span>
                  </li>
                  <li className="turnkey-packages-li02 list-item">
                    <span className="turnkey-packages-text15">
                      <span>Powder Coated in color finish of choice (</span>
                      <Link href="/custom-hyperbarics">
                        <a className="turnkey-packages-link2">
                          custom hard-shell option
                        </a>
                      </Link>
                      <span>) </span>
                      <br></br>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="turnkey-packages-container07">
                <img
                  alt="image"
                  src="/playground_assets/foritus%20hardshell%20chamber%20unlabeled-600w.png"
                  className="turnkey-packages-image2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="turnkey-packages-features1">
          <div className="turnkey-packages-container08">
            <div className="turnkey-packages-container09">
              <h2 id="fortius420exp" className="turnkey-packages-heading2">
                <span className="turnkey-packages-text19">FORTIUS 420 EXP</span>
                <br></br>
              </h2>
              <h2 className="turnkey-packages-heading3">
                <span className="turnkey-packages-text21">
                  Split Hyperbaric Chamber with or without expansions- Patent
                  Number US-D958,371 S
                </span>
                <br></br>
              </h2>
            </div>
          </div>
          <span className="turnkey-packages-text23">
            The Split Hyperbaric Chamber is not just any hyperbaric chamber.
            This Hard-Shell chamber is designed to fit through a 42&quot;
            doorway, elevator etc. Sections can be added to accommodate your
            needs. It is 62” in length. Each additional section adds another
            32&quot; when bolted together.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <div className="bannerQuote">
            <div className="turnkey-packages-container11">
              <blockquote className="turnkey-packages-text24">
                &quot;A Perfect Choice for any Clinic,  Office, or Home&quot;
              </blockquote>
            </div>
            <img
              alt="image"
              src="/playground_assets/two%20chambers1-1200w.png"
              className="turnkey-packages-image3"
            />
          </div>
          <div className="turnkey-packages-separator"></div>
          <div className="turnkey-packages-container12">
            <div className="turnkey-packages-container13">
              <div className="turnkey-packages-container14 bannerSpec bannerQuote">
                <div className="turnkey-packages-container15">
                  <div className="turnkey-packages-container16">
                    <img
                      alt="image"
                      src="/playground_assets/split%20chamber%20turn%20key1-200h.png"
                      className="turnkey-packages-image4"
                    />
                    <img
                      alt="image"
                      src="/playground_assets/split%20chamber%20turn%20key%20ii1-200h.png"
                      className="turnkey-packages-image5"
                    />
                  </div>
                  <div className="turnkey-packages-container17">
                    <div className="turnkey-packages-vertical-list">
                      <ul className="turnkey-packages-ul1 list">
                        <li className="list-item turnkey-packages-li03">
                          <span className="turnkey-packages-text25">
                            Designed to fit in most offices and clinics
                          </span>
                        </li>
                      </ul>
                      <ul className="turnkey-packages-ul2 list">
                        <li className="list-item">
                          <span className="turnkey-packages-text26">
                            A considerable 42″ diametric chamber and is 62” in
                            length
                          </span>
                        </li>
                      </ul>
                      <ul className="turnkey-packages-ul3 list">
                        <li className="list-item">
                          <span className="turnkey-packages-text27">
                            Conveniently Expandable *
                          </span>
                        </li>
                      </ul>
                      <ul className="turnkey-packages-ul4 list">
                        <li className="list-item">
                          <span className="turnkey-packages-text28">
                            Up to 3.0 ATA and as of 1/1/2023 all new split
                            chambers will be up to 4 ATA
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="features-container">
            <h2 className="turnkey-packages-text29">
              Benefits of the Fortius EXP
            </h2>
            <div className="turnkey-packages-container18">
              <img
                alt="image"
                src="/playground_assets/split%203%20chamber%20hyperbaric%20white-300h.png"
                className="turnkey-packages-image6"
              />
              <div className="turnkey-packages-feature-card1">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="turnkey-packages-icon02"
                >
                  <path d="M585.143 512c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM658.286 512c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM731.429 512c0 161.714-130.857 292.571-292.571 292.571s-292.571-130.857-292.571-292.571 130.857-292.571 292.571-292.571 292.571 130.857 292.571 292.571zM804.571 512c0-201.714-164-365.714-365.714-365.714s-365.714 164-365.714 365.714 164 365.714 365.714 365.714 365.714-164 365.714-365.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <div className="turnkey-packages-container19">
                  <h3 className="turnkey-packages-text30">
                    <span>Fully Featured Portable Hard-Shell</span>
                    <br></br>
                  </h3>
                  <span className="turnkey-packages-text33">
                    <span>
                      &apos;Our Fortius EXP Portable hard-shell hyperbarics are
                      designed to break into smaller and lighter components.
                      Easy to transport and fit through doorways.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="turnkey-packages-feature-card2">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="turnkey-packages-icon04"
                >
                  <path d="M585.143 512c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM658.286 512c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM731.429 512c0 161.714-130.857 292.571-292.571 292.571s-292.571-130.857-292.571-292.571 130.857-292.571 292.571-292.571 292.571 130.857 292.571 292.571zM804.571 512c0-201.714-164-365.714-365.714-365.714s-365.714 164-365.714 365.714 164 365.714 365.714 365.714 365.714-164 365.714-365.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <div className="turnkey-packages-container20">
                  <h3 className="turnkey-packages-text36">
                    Split Chamber Design
                  </h3>
                  <span className="turnkey-packages-text37">
                    <span>
                      This Unique Split Chamber Design contains two 32”
                      sections. These two sections can be bolted together to
                      create one large 64” chamber or two seperate 32” in
                      components.
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="turnkey-packages-feature-card3">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="turnkey-packages-icon06"
                >
                  <path d="M585.143 512c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM658.286 512c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM731.429 512c0 161.714-130.857 292.571-292.571 292.571s-292.571-130.857-292.571-292.571 130.857-292.571 292.571-292.571 292.571 130.857 292.571 292.571zM804.571 512c0-201.714-164-365.714-365.714-365.714s-365.714 164-365.714 365.714 164 365.714 365.714 365.714 365.714-164 365.714-365.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <div className="turnkey-packages-container21">
                  <h3 className="turnkey-packages-text40">
                    Modular Hyperbaric: Expand your Fortius EXP
                  </h3>
                  <span className="turnkey-packages-text41">
                    An impressive and one-of-a-kind feature is the ability for
                    the Fortius EXP to expand an EXTRA 32” length--when another
                    modular section is bolted.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="turnkey-packages-container22">
            <div className="turnkey-packages-container23">
              <div className="turnkey-packages-feature-card4">
                <svg
                  viewBox="0 0 1024 1024"
                  className="turnkey-packages-icon08"
                >
                  <path d="M512 64c282.77 0 512 229.23 512 512 0 192.792-106.576 360.666-264.008 448h-495.984c-157.432-87.334-264.008-255.208-264.008-448 0-282.77 229.23-512 512-512zM801.914 865.914c77.438-77.44 120.086-180.398 120.086-289.914h-90v-64h85.038c-7.014-44.998-21.39-88.146-42.564-128h-106.474v-64h64.284c-9.438-11.762-19.552-23.096-30.37-33.914-46.222-46.22-101.54-80.038-161.914-99.798v69.712h-64v-85.040c-20.982-3.268-42.36-4.96-64-4.96s-43.018 1.69-64 4.96v85.040h-64v-69.712c-60.372 19.76-115.692 53.576-161.914 99.798-10.818 10.818-20.932 22.152-30.37 33.914h64.284v64h-106.476c-21.174 39.854-35.552 83.002-42.564 128h85.040v64h-90c0 109.516 42.648 212.474 120.086 289.914 10.71 10.71 21.924 20.728 33.56 30.086h192.354l36.572-512h54.856l36.572 512h192.354c11.636-9.358 22.852-19.378 33.56-30.086z"></path>
                </svg>
                <h3 className="turnkey-packages-text42">Variable Pressure</h3>
                <span className="turnkey-packages-text43">Up to 3.0 ATA</span>
                <VerticalListSpec></VerticalListSpec>
                <span className="turnkey-packages-text44">
                  High-efficiency inline air filtration that filters air to 0.01
                  microns
                </span>
                <span className="turnkey-packages-text45">
                  Analog pressure gauge
                </span>
                <span className="turnkey-packages-text46">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="turnkey-packages-text47">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="turnkey-packages-text48">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="turnkey-packages-text49">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="turnkey-packages-feature-card5">
                <svg
                  viewBox="0 0 1024 1024"
                  className="turnkey-packages-icon10"
                >
                  <path d="M448 128v-16c0-26.4-21.6-48-48-48h-160c-26.4 0-48 21.6-48 48v16h-192v128h192v16c0 26.4 21.6 48 48 48h160c26.4 0 48-21.6 48-48v-16h576v-128h-576zM256 256v-128h128v128h-128zM832 432c0-26.4-21.6-48-48-48h-160c-26.4 0-48 21.6-48 48v16h-576v128h576v16c0 26.4 21.6 48 48 48h160c26.4 0 48-21.6 48-48v-16h192v-128h-192v-16zM640 576v-128h128v128h-128zM448 752c0-26.4-21.6-48-48-48h-160c-26.4 0-48 21.6-48 48v16h-192v128h192v16c0 26.4 21.6 48 48 48h160c26.4 0 48-21.6 48-48v-16h576v-128h-576v-16zM256 896v-128h128v128h-128z"></path>
                </svg>
                <h3 className="turnkey-packages-text50">Controls</h3>
                <ul className="turnkey-packages-ul5 list">
                  <li className="turnkey-packages-li07 list-item">
                    <span className="turnkey-packages-text51">
                      Mirrored Interior/External Controls
                    </span>
                  </li>
                </ul>
                <div className="turnkey-packages-container24">
                  <h4 className="turnkey-packages-text52">External Controls</h4>
                  <span className="turnkey-packages-text53">For Operator</span>
                </div>
                <div className="turnkey-packages-container25">
                  <h4 className="turnkey-packages-text54">Internal Controls</h4>
                  <span className="turnkey-packages-text55">
                    User Self-Operation
                  </span>
                </div>
                <div className="turnkey-packages-vertical-list-spec">
                  <div className="turnkey-packages-vertical-list1"></div>
                </div>
              </div>
              <div className="turnkey-packages-feature-card6">
                <svg
                  viewBox="0 0 1243.4285714285713 1024"
                  className="turnkey-packages-icon12"
                >
                  <path d="M987.429 256l-219.429 402.286h438.857zM256 256l-219.429 402.286h438.857zM725.143 146.286c-10.857 30.857-36 56-66.857 66.857v737.714h347.429c10.286 0 18.286 8 18.286 18.286v36.571c0 10.286-8 18.286-18.286 18.286h-768c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h347.429v-737.714c-30.857-10.857-56-36-66.857-66.857h-280.571c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h280.571c15.429-42.857 55.429-73.143 103.429-73.143s88 30.286 103.429 73.143h280.571c10.286 0 18.286 8 18.286 18.286v36.571c0 10.286-8 18.286-18.286 18.286h-280.571zM621.714 155.429c25.143 0 45.714-20.571 45.714-45.714s-20.571-45.714-45.714-45.714-45.714 20.571-45.714 45.714 20.571 45.714 45.714 45.714zM1243.429 658.286c0 117.714-162.857 164.571-256 164.571s-256-46.857-256-164.571v0c0-22.286 199.429-375.429 224-420 6.286-11.429 18.857-18.857 32-18.857s25.714 7.429 32 18.857c24.571 44.571 224 397.714 224 420v0zM512 658.286c0 117.714-162.857 164.571-256 164.571s-256-46.857-256-164.571v0c0-22.286 199.429-375.429 224-420 6.286-11.429 18.857-18.857 32-18.857s25.714 7.429 32 18.857c24.571 44.571 224 397.714 224 420z"></path>
                </svg>
                <h3 className="turnkey-packages-text56">Weight</h3>
                <div className="turnkey-packages-container26">
                  <h4 className="turnkey-packages-text57">
                    Hard Shell Chamber:
                  </h4>
                  <span className="turnkey-packages-text58">
                    567 Kgs (1,250 Lbs)
                  </span>
                </div>
                <div className="turnkey-packages-container27">
                  <span className="turnkey-packages-text59">Compressor</span>
                  <span className="turnkey-packages-text60">
                    16.78 Kgs (37 Lbs)
                  </span>
                </div>
              </div>
              <div className="turnkey-packages-feature-card7">
                <svg
                  viewBox="0 0 1024 1024"
                  className="turnkey-packages-icon14"
                >
                  <path d="M298 726h246l-246-246v246zM754 754l100 100h-598q-34 0-60-26t-26-60v-598l100 100-44 46 30 30 44-46 84 84-46 44 30 32 46-46 84 84-46 44 30 30 46-44 82 82-46 46 32 30 44-46 84 84-46 44 30 30z"></path>
                </svg>
                <h3 className="turnkey-packages-text61">Dimensions</h3>
                <div className="turnkey-packages-container28">
                  <div className="turnkey-packages-vertical-list-spec1">
                    <span className="turnkey-packages-text62">Length</span>
                    <div className="turnkey-packages-vertical-list2">
                      <ul className="turnkey-packages-ul6 list">
                        <li className="turnkey-packages-li08 list-item">
                          <span className="turnkey-packages-text63">
                            When bolted together it is 64” in length (2 – 32”
                            sections)
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </li>
                        <li className="turnkey-packages-li09 list-item">
                          <span className="turnkey-packages-text64">
                            optional additional 32”
                          </span>
                        </li>
                        <li className="turnkey-packages-li10 list-item">
                          <span className="turnkey-packages-text65">
                            <span>Center sections available upon order</span>
                            <br></br>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="turnkey-packages-container29">
                  <span className="turnkey-packages-text68">
                    Shell Diameter
                  </span>
                  <span className="turnkey-packages-text69">42 inch</span>
                </div>
                <div className="turnkey-packages-container30">
                  <span className="turnkey-packages-text70">Door Diameter</span>
                  <span className="turnkey-packages-text71">28 inch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Component2 rootClassName="component2-root-class-name2"></Component2>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
      <style jsx>
        {`
          .turnkey-packages-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .turnkey-packages-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-self: center;
            min-height: 80vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .turnkey-packages-hero1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            flex-wrap: wrap;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .turnkey-packages-container01 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .turnkey-packages-text {
            color: rgb(255, 255, 255);
            font-size: 10px;
            align-self: flex-start;
            padding-top: 10px;
            border-color: var(--dl-color-grays-dark100);
            border-width: 1px;
            padding-left: 15px;
            border-radius: 20px;
            padding-right: 15px;
            padding-bottom: 10px;
            background-color: rgb(0, 0, 0);
            border-top-left-radius: 30;
          }
          .turnkey-packages-container02 {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .turnkey-packages-heading {
            font-size: 3rem;
            background-image: linear-gradient(
              310deg,
              rgb(119, 188, 255),
              rgb(33, 105, 254)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .turnkey-packages-link {
            display: contents;
          }
          .turnkey-packages-dual-btn {
            text-decoration: none;
          }
          .turnkey-packages-container03 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
          }
          .turnkey-packages-image {
            width: 565px;
            height: 360px;
            align-self: center;
            object-fit: contain;
          }
          .turnkey-packages-link1 {
            display: contents;
          }
          .turnkey-packages-dual-btn1 {
            text-decoration: none;
          }
          .turnkey-packages-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            backdrop-filter: saturate(200%) blur(30px);
            background-color: rgba(255, 254, 254, 0.8);
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
            border-bottom-left-radius: var(--dl-radius-radius-radius8);
            border-bottom-right-radius: var(--dl-radius-radius-radius8);
          }
          .turnkey-packages-heading1 {
            font-size: 3rem;
            background-image: linear-gradient(
              310deg,
              rgb(119, 188, 255),
              rgb(33, 105, 254)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .turnkey-packages-text07 {
            font-size: 18px;
          }
          .turnkey-packages-container04 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .turnkey-packages-container05 {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .turnkey-packages-container06 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
          }
          .turnkey-packages-image1 {
            width: auto;
            height: auto;
            object-fit: cover;
            flex-shrink: 0;
            margin-left: 0px;
            object-position: left;
          }
          .turnkey-packages-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .turnkey-packages-icon {
            fill: #595959;
            width: 2rem;
            height: 2rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .turnkey-packages-text12 {
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .turnkey-packages-ul {
            width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-position: inside;
          }
          .turnkey-packages-li {
            color: #5a5252;
          }
          .turnkey-packages-text13 {
            color: rgb(153, 153, 153);
            font-size: 18px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .turnkey-packages-li01 {
            color: #5a5252;
          }
          .turnkey-packages-text14 {
            color: rgb(153, 153, 153);
            font-size: 18px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .turnkey-packages-li02 {
            color: #5a5252;
          }
          .turnkey-packages-text15 {
            color: rgb(153, 153, 153);
            font-size: 18px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .turnkey-packages-link2 {
            text-decoration: underline;
          }
          .turnkey-packages-container07 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
          }
          .turnkey-packages-image2 {
            width: auto;
            object-fit: contain;
            flex-shrink: 0;
            object-position: left;
          }
          .turnkey-packages-features1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            backdrop-filter: saturate(200%) blur(30px);
            background-color: rgba(255, 254, 254, 0.8);
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
            border-bottom-left-radius: var(--dl-radius-radius-radius8);
            border-bottom-right-radius: var(--dl-radius-radius-radius8);
          }
          .turnkey-packages-container08 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: column;
            justify-content: flex-start;
          }
          .turnkey-packages-container09 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .turnkey-packages-heading2 {
            font-size: 3rem;
            align-self: flex-start;
            text-align: center;
            background-image: linear-gradient(
              310deg,
              rgb(119, 188, 255),
              rgb(33, 105, 254)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .turnkey-packages-text23 {
            font-size: 18px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .turnkey-packages-container11 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: 0px;
            flex-direction: column;
          }
          .turnkey-packages-text24 {
            width: auto;
            font-size: 28px;
            align-self: center;
            font-style: normal;
            font-family: Lexend;
            font-weight: 600;
            line-height: 1.3;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: 0px;
            text-transform: none;
            text-decoration: none;
          }
          .turnkey-packages-image3 {
            width: 50%;
            height: auto;
            object-fit: contain;
            flex-shrink: 0;
            object-position: left;
          }
          .turnkey-packages-separator {
            width: 100px;
            height: 2px;
            align-self: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            background-color: #595959;
          }
          .turnkey-packages-container12 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .turnkey-packages-container13 {
            flex: 0 0 auto;
            width: auto;
            height: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .turnkey-packages-container14 {
            padding: 0px;
            flex-wrap: wrap;
          }
          .turnkey-packages-container15 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .turnkey-packages-container16 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .turnkey-packages-image4 {
            width: auto;
            height: auto;
            object-fit: contain;
          }
          .turnkey-packages-image5 {
            width: auto;
            object-fit: cover;
          }
          .turnkey-packages-container17 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .turnkey-packages-vertical-list {
            width: auto;
            display: flex;
            padding: 0px;
            overflow: wrap;
            position: relative;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .turnkey-packages-ul1 {
            width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-position: outside;
          }
          .turnkey-packages-text25 {
            font-size: 20px;
            text-align: left;
            font-family: Lexend;
            font-weight: 400;
            line-height: 1.1;
            text-transform: none;
            text-decoration: none;
          }
          .turnkey-packages-ul2 {
            width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-position: outside;
          }
          .turnkey-packages-text26 {
            font-size: 20px;
            word-break: break-all;
            font-family: Lexend;
            font-weight: 400;
            line-height: 1.1;
            text-transform: none;
            text-decoration: none;
          }
          .turnkey-packages-ul3 {
            width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-position: outside;
          }
          .turnkey-packages-text27 {
            font-size: 20px;
            font-family: Lexend;
            font-weight: 400;
            line-height: 1.1;
            text-transform: none;
            text-decoration: none;
          }
          .turnkey-packages-ul4 {
            width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-position: outside;
          }
          .turnkey-packages-text28 {
            font-size: 20px;
            font-family: Lexend;
            font-weight: 400;
            line-height: 1.1;
            text-transform: none;
            text-decoration: none;
          }
          .turnkey-packages-text29 {
            font-size: 2.4rem;
            align-self: flex-start;
            background-image: linear-gradient(
              310deg,
              rgb(119, 188, 255),
              rgb(33, 105, 254)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .turnkey-packages-container18 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .turnkey-packages-image6 {
            width: 368px;
            height: 202px;
            object-fit: cover;
          }
          .turnkey-packages-feature-card1 {
            width: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            flex-direction: row;
            justify-content: flex-start;
          }
          .turnkey-packages-icon02 {
            fill: var(--dl-color-default-white);
            width: 2rem;
            height: 2rem;
            align-self: flex-start;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .turnkey-packages-container19 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .turnkey-packages-text30 {
            color: rgb(255, 255, 255);
            font-size: 28px;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .turnkey-packages-text33 {
            color: rgb(255, 254, 254);
          }
          .turnkey-packages-feature-card2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .turnkey-packages-icon04 {
            fill: var(--dl-color-default-white);
            width: 2rem;
            height: 2rem;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .turnkey-packages-container20 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .turnkey-packages-text36 {
            color: rgb(255, 255, 255);
            font-size: 28px;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .turnkey-packages-text37 {
            color: rgb(255, 254, 254);
          }
          .turnkey-packages-feature-card3 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .turnkey-packages-icon06 {
            fill: var(--dl-color-default-white);
            width: 2rem;
            height: 2rem;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .turnkey-packages-container21 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .turnkey-packages-text40 {
            color: rgb(255, 255, 255);
            font-size: 28px;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .turnkey-packages-text41 {
            color: rgb(255, 254, 254);
          }
          .turnkey-packages-container22 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .turnkey-packages-container23 {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .turnkey-packages-feature-card4 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .turnkey-packages-icon08 {
            fill: #595959;
            width: 2rem;
            height: 2rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .turnkey-packages-text42 {
            font-size: 28px;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .turnkey-packages-text43 {
            color: rgb(153, 153, 153);
            font-size: 18px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .turnkey-packages-text44 {
            color: rgb(153, 153, 153);
            font-size: 18px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .turnkey-packages-text45 {
            color: rgb(153, 153, 153);
            font-size: 18px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .turnkey-packages-text46 {
            color: #999999;
          }
          .turnkey-packages-text47 {
            color: #999999;
          }
          .turnkey-packages-text48 {
            color: #999999;
          }
          .turnkey-packages-text49 {
            color: #999999;
          }
          .turnkey-packages-feature-card5 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .turnkey-packages-icon10 {
            fill: #595959;
            width: 2rem;
            height: 2rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .turnkey-packages-text50 {
            font-size: 28px;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .turnkey-packages-ul5 {
            width: auto;
            padding: 0px;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-position: inside;
          }
          .turnkey-packages-li07 {
            color: #5a5252;
          }
          .turnkey-packages-text51 {
            color: rgb(153, 153, 153);
            font-size: 18px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .turnkey-packages-container24 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .turnkey-packages-text52 {
            font-size: 20px;
            font-weight: bold;
          }
          .turnkey-packages-text53 {
            color: rgb(153, 153, 153);
            font-size: 18px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .turnkey-packages-container25 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .turnkey-packages-text54 {
            font-size: 20px;
            font-weight: bold;
          }
          .turnkey-packages-text55 {
            color: rgb(153, 153, 153);
            font-size: 18px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .turnkey-packages-vertical-list-spec {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .turnkey-packages-vertical-list1 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            padding: 0px;
            position: relative;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .turnkey-packages-feature-card6 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .turnkey-packages-icon12 {
            fill: #595959;
            width: 2rem;
            height: 2rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .turnkey-packages-text56 {
            font-size: 28px;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .turnkey-packages-container26 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .turnkey-packages-text57 {
            font-size: 20px;
            font-weight: bold;
          }
          .turnkey-packages-text58 {
            color: rgb(153, 153, 153);
            font-size: 18px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .turnkey-packages-container27 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .turnkey-packages-text59 {
            font-size: 20px;
            font-weight: bold;
          }
          .turnkey-packages-text60 {
            color: rgb(153, 153, 153);
            font-size: 18px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .turnkey-packages-feature-card7 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .turnkey-packages-icon14 {
            width: 2rem;
            height: 2rem;
          }
          .turnkey-packages-text61 {
            font-size: 28px;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .turnkey-packages-container28 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .turnkey-packages-vertical-list-spec1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .turnkey-packages-text62 {
            font-size: 20px;
            font-weight: bold;
          }
          .turnkey-packages-vertical-list2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            padding: 0px;
            position: relative;
            align-self: flex-start;
            align-items: flex-start;
            padding-top: 0px;
            flex-direction: column;
          }
          .turnkey-packages-ul6 {
            width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-position: inside;
          }
          .turnkey-packages-li08 {
            color: #5a5252;
          }
          .turnkey-packages-text63 {
            color: rgb(153, 153, 153);
            font-size: 18px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .turnkey-packages-li09 {
            color: #5a5252;
          }
          .turnkey-packages-text64 {
            color: rgb(153, 153, 153);
            font-size: 18px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .turnkey-packages-li10 {
            color: #5a5252;
          }
          .turnkey-packages-text65 {
            color: rgb(153, 153, 153);
            font-size: 18px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .turnkey-packages-container29 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .turnkey-packages-text68 {
            font-size: 20px;
            font-weight: bold;
          }
          .turnkey-packages-text69 {
            color: rgb(153, 153, 153);
            font-size: 18px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .turnkey-packages-container30 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .turnkey-packages-text70 {
            font-size: 20px;
            font-weight: bold;
          }
          .turnkey-packages-text71 {
            color: rgb(153, 153, 153);
            font-size: 18px;
            margin-bottom: var(--dl-space-space-unit);
          }
          @media (max-width: 1200px) {
            .turnkey-packages-image {
              width: auto;
              height: auto;
            }
            .turnkey-packages-features {
              width: 95%;
            }
            .turnkey-packages-image1 {
              width: auto;
              height: auto;
              border-radius: 0px;
            }
            .turnkey-packages-image2 {
              width: auto;
              height: auto;
              border-radius: 0px;
            }
            .turnkey-packages-features1 {
              width: 95%;
            }
            .turnkey-packages-heading2 {
              align-self: flex-start;
              text-align: center;
            }
            .turnkey-packages-heading3 {
              font-size: 3rem;
            }
            .turnkey-packages-image3 {
              width: 100%;
              height: 100%;
              margin-left: 0px;
              border-radius: 0px;
            }
            .turnkey-packages-separator {
              align-self: flex-start;
            }
            .turnkey-packages-text29 {
              align-self: flex-start;
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .turnkey-packages-hero1 {
              flex-direction: column;
              justify-content: center;
            }
            .turnkey-packages-text {
              align-self: center;
            }
            .turnkey-packages-container02 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .turnkey-packages-heading {
              text-align: center;
            }
            .turnkey-packages-text01 {
              text-align: center;
            }
            .turnkey-packages-text02 {
              text-align: center;
            }
            .turnkey-packages-text03 {
              text-align: center;
            }
            .turnkey-packages-image {
              width: auto;
            }
            .turnkey-packages-features {
              align-items: center;
            }
            .turnkey-packages-heading1 {
              text-align: center;
            }
            .turnkey-packages-text05 {
              text-align: center;
            }
            .turnkey-packages-container04 {
              flex-direction: column;
            }
            .turnkey-packages-container05 {
              width: auto;
            }
            .turnkey-packages-container06 {
              width: auto;
              padding: var(--dl-space-space-unit);
              align-items: center;
            }
            .turnkey-packages-image1 {
              width: auto;
              height: auto;
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
            }
            .turnkey-packages-container07 {
              width: auto;
              height: auto;
              padding: var(--dl-space-space-unit);
              align-items: center;
            }
            .turnkey-packages-image2 {
              width: 100%;
              height: auto;
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
            }
            .turnkey-packages-features1 {
              align-items: center;
            }
            .turnkey-packages-heading2 {
              text-align: center;
            }
            .turnkey-packages-text19 {
              text-align: center;
            }
            .turnkey-packages-text21 {
              text-align: center;
            }
            .turnkey-packages-image3 {
              width: 100%;
              height: auto;
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
            }
            .turnkey-packages-image4 {
              width: auto;
            }
            .turnkey-packages-container17 {
              width: auto;
            }
            .turnkey-packages-text29 {
              text-align: center;
            }
            .turnkey-packages-feature-card1 {
              align-items: flex-start;
            }
            .turnkey-packages-feature-card2 {
              align-items: flex-start;
            }
            .turnkey-packages-feature-card3 {
              align-items: flex-start;
            }
            .turnkey-packages-container22 {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .turnkey-packages-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .turnkey-packages-hero1 {
              align-self: center;
              align-items: center;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .turnkey-packages-container01 {
              align-self: center;
            }
            .turnkey-packages-text {
              align-self: flex-start;
            }
            .turnkey-packages-heading {
              align-self: center;
              text-align: center;
            }
            .turnkey-packages-image {
              width: 100%;
            }
            .turnkey-packages-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .turnkey-packages-container04 {
              flex-direction: column;
            }
            .turnkey-packages-features1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .turnkey-packages-text24 {
              text-align: center;
            }
            .turnkey-packages-image3 {
              width: 100%;
              height: 307px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .turnkey-packages-container14 {
              width: auto;
              height: auto;
              flex-direction: row;
            }
            .turnkey-packages-container15 {
              flex-direction: column;
            }
            .turnkey-packages-container16 {
              flex-direction: row;
            }
            .turnkey-packages-image4 {
              width: auto;
              height: auto;
              align-self: center;
            }
            .turnkey-packages-container17 {
              width: auto;
              flex-wrap: wrap;
            }
            .turnkey-packages-vertical-list {
              width: auto;
              height: auto;
            }
            .turnkey-packages-container18 {
              grid-template-columns: 1fr;
            }
            .turnkey-packages-feature-card1 {
              flex-direction: row;
            }
            .turnkey-packages-container19 {
              flex-direction: column;
            }
            .turnkey-packages-feature-card2 {
              flex-direction: row;
            }
            .turnkey-packages-container20 {
              flex-direction: column;
            }
            .turnkey-packages-feature-card3 {
              flex-direction: row;
            }
            .turnkey-packages-container21 {
              flex-direction: column;
            }
            .turnkey-packages-container22 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .turnkey-packages-hero {
              min-height: 100%;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .turnkey-packages-hero1 {
              min-height: 100%;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: center;
            }
            .turnkey-packages-container01 {
              align-self: center;
            }
            .turnkey-packages-text {
              align-self: center;
            }
            .turnkey-packages-container02 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .turnkey-packages-heading {
              font-size: 2rem;
              text-align: center;
            }
            .turnkey-packages-image {
              width: 100%;
            }
            .turnkey-packages-features {
              width: 95%;
              align-self: center;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .turnkey-packages-heading1 {
              font-size: 2rem;
              align-self: flex-start;
              text-align: left;
            }
            .turnkey-packages-text07 {
              align-self: center;
              padding-top: var(--dl-space-space-unit);
              padding-left: 0px;
              padding-right: 0px;
            }
            .turnkey-packages-container05 {
              grid-template-columns: 1fr;
            }
            .turnkey-packages-image1 {
              width: auto;
              height: auto;
            }
            .turnkey-packages-text12 {
              font-style: normal;
              font-weight: 600;
            }
            .turnkey-packages-image2 {
              width: 100%;
              height: auto;
            }
            .turnkey-packages-features1 {
              width: 95%;
              align-self: center;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .turnkey-packages-heading2 {
              font-size: 2rem;
              text-align: left;
            }
            .turnkey-packages-heading3 {
              font-size: 1.5rem;
            }
            .turnkey-packages-text23 {
              margin-top: var(--dl-space-space-unit);
            }
            .turnkey-packages-container11 {
              width: auto;
            }
            .turnkey-packages-text24 {
              text-align: center;
            }
            .turnkey-packages-image3 {
              width: 100%;
              height: auto;
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .turnkey-packages-container14 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .turnkey-packages-container15 {
              flex-direction: column;
            }
            .turnkey-packages-container16 {
              width: auto;
              flex-direction: column;
            }
            .turnkey-packages-image4 {
              width: auto;
            }
            .turnkey-packages-image5 {
              width: auto;
            }
            .turnkey-packages-container17 {
              width: auto;
            }
            .turnkey-packages-vertical-list {
              width: 397px;
              height: auto;
              flex-direction: column;
            }
            .turnkey-packages-li03 {
              list-style-position: outside;
            }
            .turnkey-packages-ul2 {
              list-style-position: outside;
            }
            .turnkey-packages-ul3 {
              list-style-position: outside;
            }
            .turnkey-packages-ul4 {
              list-style-position: outside;
            }
            .turnkey-packages-icon02 {
              align-self: flex-start;
            }
            .turnkey-packages-container19 {
              flex-direction: column;
            }
            .turnkey-packages-icon04 {
              align-self: flex-start;
            }
            .turnkey-packages-container20 {
              flex-direction: column;
            }
            .turnkey-packages-icon06 {
              align-self: flex-start;
            }
            .turnkey-packages-container21 {
              flex-direction: column;
            }
            .turnkey-packages-container23 {
              grid-template-columns: 1fr;
            }
            .turnkey-packages-text42 {
              font-style: normal;
              font-weight: 600;
            }
            .turnkey-packages-text50 {
              font-style: normal;
              font-weight: 600;
            }
            .turnkey-packages-text56 {
              font-style: normal;
              font-weight: 600;
            }
            .turnkey-packages-text61 {
              font-style: normal;
              font-weight: 600;
            }
          }
        `}
      </style>
    </>
  )
}

export default TurnkeyPackages
