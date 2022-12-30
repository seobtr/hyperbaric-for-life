import React from 'react'

import PropTypes from 'prop-types'

import Label from './label'
import MemberDetails from './member-details'

const Section2 = (props) => {
  return (
    <>
      <div className="section2-section2">
        <div className="section2-container">
          <Label text="WITH BURNED SOLES​"></Label>
          <h2 className="section2-text Text2XL">
            <span className="section2-text01">
              You need to fight like David with Goliath
            </span>
            <br></br>
          </h2>
          <span className="section2-text02 TextXL">{props.text}</span>
        </div>
        <div className="section2-growing-company-section">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="section2-image"
          />
          <div className="section2-container01">
            <div className="section2-container02">
              <svg
                viewBox="0 0 967.4605714285714 1024"
                className="section2-icon"
              >
                <path d="M822.857 256c0-30.286-24.571-54.857-54.857-54.857s-54.857 24.571-54.857 54.857 24.571 54.857 54.857 54.857 54.857-24.571 54.857-54.857zM950.857 91.429c0 189.714-52.571 316-188 452-33.143 32.571-70.857 66.286-111.429 100.571l-11.429 216.571c-0.571 5.714-4 11.429-9.143 14.857l-219.429 128c-2.857 1.714-5.714 2.286-9.143 2.286-4.571 0-9.143-1.714-13.143-5.143l-36.571-36.571c-4.571-5.143-6.286-12-4.571-18.286l48.571-157.714-160.571-160.571-157.714 48.571c-1.714 0.571-3.429 0.571-5.143 0.571-4.571 0-9.714-1.714-13.143-5.143l-36.571-36.571c-5.714-6.286-6.857-15.429-2.857-22.286l128-219.429c3.429-5.143 9.143-8.571 14.857-9.143l216.571-11.429c34.286-40.571 68-78.286 100.571-111.429 142.857-142.286 252-188 450.857-188 10.286 0 19.429 8 19.429 18.286z"></path>
              </svg>
            </div>
            <h3 className="section2-text03 Healine">{props.heading1}</h3>
            <span className="section2-text04">{props.text1}</span>
            <div className="section2-container03">
              <div className="section2-container04">
                <svg viewBox="0 0 1024 1024" className="section2-icon02">
                  <path d="M636 938h-6q-92-24-158-90-38-38-65-103t-27-119q0-52 38-89t92-37 93 37 39 89q0 34 25 58t63 24 64-24 26-58q0-120-91-206t-219-86q-92 0-168 47t-114 125q-24 50-24 120 0 80 28 154 6 20-14 26t-26-12q-32-82-32-168 0-78 30-138 42-90 129-144t191-54q146 0 249 99t103 237q0 52-39 88t-93 36-92-36-38-88q0-34-26-59t-64-25-63 25-25 59q0 112 80 192 56 56 140 78 18 2 14 26-4 16-20 16zM530 626q0 74 55 128t137 54q4 0 18-2t23-2 18 3 11 13q4 22-18 26-24 4-52 4-80 0-132-38-102-70-102-186 0-22 22-22 20 0 20 22zM416 930q-8 0-14-6-54-54-86-114-46-80-46-184 0-94 71-162t171-68 171 68 71 162q0 20-22 20t-22-20q0-78-58-133t-140-55-140 55-58 133q0 96 38 164 26 46 80 104 16 14 0 30-6 6-16 6zM150 414q-22 0-22-20 0-4 4-12 64-92 160-140 100-52 220-52t220 52q98 48 160 138 4 8 4 12 0 14-16 20t-24-8q-60-82-144-124-92-46-200-47t-200 47q-90 46-146 126-6 8-16 8zM760 190q-8 0-10-2-118-60-238-60-130 0-238 60-10 6-20 0t-10-18q0-14 10-20 116-64 258-64 130 0 258 64 18 10 8 28-8 12-18 12z"></path>
                </svg>
              </div>
              <span className="section2-text05">{props.text2}</span>
            </div>
            <div className="section2-container05">
              <div className="section2-container06">
                <svg viewBox="0 0 1024 1024" className="section2-icon04">
                  <path d="M917.806 357.076c-22.21-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-368c-44.114 0-80 35.888-80 80v736c0 44.112 35.886 80 80 80h608c44.112 0 80-35.888 80-80v-496c0-14.332-4.372-39.35-42.194-90.924zM785.374 302.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.982 17.78 50.678 41.878 81.374 72.572v0zM896 944c0 8.672-7.328 16-16 16h-608c-8.672 0-16-7.328-16-16v-736c0-8.672 7.328-16 16-16 0 0 367.956-0.002 368 0v224c0 17.672 14.324 32 32 32h224v496z"></path>
                  <path d="M602.924 42.196c-51.574-37.822-76.592-42.196-90.924-42.196h-368c-44.112 0-80 35.888-80 80v736c0 38.632 27.528 70.958 64 78.39v-814.39c0-8.672 7.328-16 16-16h486.876c-9.646-7.92-19.028-15.26-27.952-21.804z"></path>
                </svg>
              </div>
              <span className="section2-text06">{props.text3}</span>
            </div>
            <div className="section2-container07">
              <div className="section2-container08">
                <svg
                  viewBox="0 0 1024.5851428571427 1024"
                  className="section2-icon07"
                >
                  <path d="M1008 6.286c12 8.571 17.714 22.286 15.429 36.571l-146.286 877.714c-1.714 10.857-8.571 20-18.286 25.714-5.143 2.857-11.429 4.571-17.714 4.571-4.571 0-9.143-1.143-13.714-2.857l-301.143-122.857-170.286 186.857c-6.857 8-16.571 12-26.857 12-4.571 0-9.143-0.571-13.143-2.286-14.286-5.714-23.429-19.429-23.429-34.286v-258.286l-269.714-110.286c-13.143-5.143-21.714-17.143-22.857-31.429-1.143-13.714 6.286-26.857 18.286-33.714l950.857-548.571c12-7.429 27.429-6.857 38.857 1.143zM812.571 862.857l126.286-756-819.429 472.571 192 78.286 493.143-365.143-273.143 455.429z"></path>
                </svg>
              </div>
              <span className="section2-text07">{props.text4}</span>
            </div>
          </div>
        </div>
        <div className="section2-container09">
          <h6 className="section2-text08">
            <span>THE ENTOURAGE</span>
          </h6>
          <h3 className="section2-text10 Healine">{props.heading}</h3>
          <span className="section2-text11 TextXL">
            <span className="section2-text12">
              It depends on your friends and companions, it depends on who goes
              out with you, if they have money, if you have money.
            </span>
          </span>
        </div>
        <div className="section2-team">
          <div className="section2-container10">
            <div className="section2-container11">
              <MemberDetails image_src="https://play.teleporthq.io/static/svg/default-img.svg"></MemberDetails>
              <div className="section2-container12">
                <div className="section2-container13">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="section2-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
                <div className="section2-container14">
                  <svg viewBox="0 0 1024 1024" className="section2-icon11">
                    <path d="M783.104 239.957c-74.667-74.283-165.888-111.957-271.104-111.957-106.197 0-197.675 37.717-271.915 112-74.368 74.283-112.085 165.845-112.085 272 0 105.173 37.675 196.395 111.957 271.104 74.283 74.923 165.803 112.896 272.043 112.896 105.259 0 196.48-37.973 271.189-112.768 74.88-74.795 112.811-166.059 112.811-271.232 0-106.155-37.973-197.717-112.896-272.043zM722.859 722.901c-48.512 48.597-103.936 76.288-168.192 84.693v-210.261h85.333v-85.333h-85.333v-59.733c0-14.123 11.477-25.6 25.643-25.6h59.691v-85.333h-59.605c-31.659 0-58.069 11.648-79.232 35.072-21.163 23.339-31.829 51.84-31.829 85.675v49.92h-85.333v85.333h85.333v210.347c-64.939-8.32-120.576-36.053-168.832-84.651-58.667-59.051-87.168-128.085-87.168-211.029 0-83.883 28.459-153.088 87.125-211.627 58.453-58.581 127.659-87.040 211.541-87.040 82.987 0 151.979 28.501 210.987 87.168 59.008 58.539 87.68 127.744 87.68 211.499 0 82.816-28.715 151.851-87.808 210.901z"></path>
                  </svg>
                </div>
                <div className="section2-container15">
                  <svg viewBox="0 0 1024 1024" className="section2-icon13">
                    <path d="M382 554h88v382q-62-6-139-43t-123-83q62-34 113-110t61-146zM730 554h206q-10 100-66 188-50-24-90-79t-50-109zM154 742q-58-90-66-188h206q-10 54-50 109t-90 79zM642 554q10 70 61 146t113 110q-44 46-121 83t-141 43v-382h88zM382 470q-10-70-61-146t-113-110q44-46 121-83t141-43v382h-88zM642 470h-88v-382q62 6 139 43t123 83q-62 34-113 110t-61 146zM294 470h-206q10-100 66-188 50 24 90 79t50 109zM730 470q10-54 50-109t90-79q56 88 66 188h-206z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="section2-container16">
              <MemberDetails
                heading1="Romina Hadid"
                heading11="Marketing Specialist"
                image_src="https://play.teleporthq.io/static/svg/default-img.svg"
              ></MemberDetails>
              <div className="section2-container17">
                <div className="section2-container18">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="section2-icon15"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
                <div className="section2-container19">
                  <svg viewBox="0 0 1024 1024" className="section2-icon17">
                    <path d="M783.104 239.957c-74.667-74.283-165.888-111.957-271.104-111.957-106.197 0-197.675 37.717-271.915 112-74.368 74.283-112.085 165.845-112.085 272 0 105.173 37.675 196.395 111.957 271.104 74.283 74.923 165.803 112.896 272.043 112.896 105.259 0 196.48-37.973 271.189-112.768 74.88-74.795 112.811-166.059 112.811-271.232 0-106.155-37.973-197.717-112.896-272.043zM722.859 722.901c-48.512 48.597-103.936 76.288-168.192 84.693v-210.261h85.333v-85.333h-85.333v-59.733c0-14.123 11.477-25.6 25.643-25.6h59.691v-85.333h-59.605c-31.659 0-58.069 11.648-79.232 35.072-21.163 23.339-31.829 51.84-31.829 85.675v49.92h-85.333v85.333h85.333v210.347c-64.939-8.32-120.576-36.053-168.832-84.651-58.667-59.051-87.168-128.085-87.168-211.029 0-83.883 28.459-153.088 87.125-211.627 58.453-58.581 127.659-87.040 211.541-87.040 82.987 0 151.979 28.501 210.987 87.168 59.008 58.539 87.68 127.744 87.68 211.499 0 82.816-28.715 151.851-87.808 210.901z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="section2-container20">
              <MemberDetails
                heading1="Alexa Smith"
                heading11="UI/UX Designer"
                image_src="https://play.teleporthq.io/static/svg/default-img.svg"
              ></MemberDetails>
              <div className="section2-container21">
                <div className="section2-container22">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="section2-icon19"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
                <div className="section2-container23">
                  <svg viewBox="0 0 1024 1024" className="section2-icon21">
                    <path d="M783.104 239.957c-74.667-74.283-165.888-111.957-271.104-111.957-106.197 0-197.675 37.717-271.915 112-74.368 74.283-112.085 165.845-112.085 272 0 105.173 37.675 196.395 111.957 271.104 74.283 74.923 165.803 112.896 272.043 112.896 105.259 0 196.48-37.973 271.189-112.768 74.88-74.795 112.811-166.059 112.811-271.232 0-106.155-37.973-197.717-112.896-272.043zM722.859 722.901c-48.512 48.597-103.936 76.288-168.192 84.693v-210.261h85.333v-85.333h-85.333v-59.733c0-14.123 11.477-25.6 25.643-25.6h59.691v-85.333h-59.605c-31.659 0-58.069 11.648-79.232 35.072-21.163 23.339-31.829 51.84-31.829 85.675v49.92h-85.333v85.333h85.333v210.347c-64.939-8.32-120.576-36.053-168.832-84.651-58.667-59.051-87.168-128.085-87.168-211.029 0-83.883 28.459-153.088 87.125-211.627 58.453-58.581 127.659-87.040 211.541-87.040 82.987 0 151.979 28.501 210.987 87.168 59.008 58.539 87.68 127.744 87.68 211.499 0 82.816-28.715 151.851-87.808 210.901z"></path>
                  </svg>
                </div>
                <div className="section2-container24">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="section2-icon23"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="section2-container25">
              <MemberDetails
                heading1="Jenna Kardi"
                heading11="Founder and ceo"
                image_src="https://play.teleporthq.io/static/svg/default-img.svg"
              ></MemberDetails>
              <div className="section2-container26">
                <div className="section2-container27">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="section2-icon25"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
                <div className="section2-container28">
                  <svg viewBox="0 0 1024 1024" className="section2-icon27">
                    <path d="M783.104 239.957c-74.667-74.283-165.888-111.957-271.104-111.957-106.197 0-197.675 37.717-271.915 112-74.368 74.283-112.085 165.845-112.085 272 0 105.173 37.675 196.395 111.957 271.104 74.283 74.923 165.803 112.896 272.043 112.896 105.259 0 196.48-37.973 271.189-112.768 74.88-74.795 112.811-166.059 112.811-271.232 0-106.155-37.973-197.717-112.896-272.043zM722.859 722.901c-48.512 48.597-103.936 76.288-168.192 84.693v-210.261h85.333v-85.333h-85.333v-59.733c0-14.123 11.477-25.6 25.643-25.6h59.691v-85.333h-59.605c-31.659 0-58.069 11.648-79.232 35.072-21.163 23.339-31.829 51.84-31.829 85.675v49.92h-85.333v85.333h85.333v210.347c-64.939-8.32-120.576-36.053-168.832-84.651-58.667-59.051-87.168-128.085-87.168-211.029 0-83.883 28.459-153.088 87.125-211.627 58.453-58.581 127.659-87.040 211.541-87.040 82.987 0 151.979 28.501 210.987 87.168 59.008 58.539 87.68 127.744 87.68 211.499 0 82.816-28.715 151.851-87.808 210.901z"></path>
                  </svg>
                </div>
                <div className="section2-container29">
                  <svg viewBox="0 0 1024 1024" className="section2-icon29">
                    <path d="M382 554h88v382q-62-6-139-43t-123-83q62-34 113-110t61-146zM730 554h206q-10 100-66 188-50-24-90-79t-50-109zM154 742q-58-90-66-188h206q-10 54-50 109t-90 79zM642 554q10 70 61 146t113 110q-44 46-121 83t-141 43v-382h88zM382 470q-10-70-61-146t-113-110q44-46 121-83t141-43v382h-88zM642 470h-88v-382q62 6 139 43t123 83q-62 34-113 110t-61 146zM294 470h-206q10-100 66-188 50 24 90 79t50 109zM730 470q10-54 50-109t90-79q56 88 66 188h-206z"></path>
                  </svg>
                </div>
                <div className="section2-container30">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="section2-icon31"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .section2-section2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .section2-container {
            width: 66%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .section2-text {
            color: var(--dl-color-secondary-400);
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            line-height: 2.5rem;
          }
          .section2-text01 {
            font-weight: 700;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .section2-text02 {
            color: var(--dl-color-secondary-7001);
            text-align: center;
            margin-bottom: var(--dl-space-space-unitandhalf);
          }
          .section2-growing-company-section {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .section2-image {
            width: 33%;
            object-fit: cover;
            margin-left: auto;
            margin-right: auto;
            border-radius: var(--dl-radius-radius-radius50);
          }
          .section2-container01 {
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
          .section2-container02 {
            flex: 0 0 auto;
            width: 4rem;
            height: 4rem;
            display: flex;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-700);
          }
          .section2-icon {
            fill: var(--dl-color-pimary-500);
            width: 24px;
            height: 24px;
          }
          .section2-text03 {
            color: var(--dl-color-secondary-400);
            margin-top: var(--dl-space-space-unitandhalf);
          }
          .section2-text04 {
            color: var(--dl-color-secondary-400);
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unitandhalf);
          }
          .section2-container03 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .section2-container04 {
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
          .section2-icon02 {
            fill: var(--dl-color-pimary-500);
            width: 20px;
            height: 20px;
          }
          .section2-text05 {
            color: var(--dl-color-secondary-400);
          }
          .section2-container05 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .section2-container06 {
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
          .section2-icon04 {
            fill: var(--dl-color-pimary-500);
            width: 20px;
            height: 20px;
          }
          .section2-text06 {
            color: var(--dl-color-secondary-400);
          }
          .section2-container07 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .section2-container08 {
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
          .section2-icon07 {
            fill: var(--dl-color-pimary-500);
            width: 20px;
            height: 20px;
          }
          .section2-text07 {
            color: var(--dl-color-secondary-400);
          }
          .section2-container09 {
            flex: 0 0 auto;
            width: 66%;
            display: flex;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .section2-text08 {
            color: #f97316ff;
            font-size: 1rem;
            font-style: normal;
            font-weight: 700;
          }
          .section2-text10 {
            color: var(--dl-color-secondary-400);
            text-align: center;
          }
          .section2-text11 {
            color: var(--dl-color-secondary-7001);
            text-align: center;
            margin-bottom: 0.25rem;
          }
          .section2-text12 {
            display: inline;
            font-weight: 400;
            white-space: normal;
          }
          .section2-team {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .section2-container10 {
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: flex-start;
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .section2-container11 {
            width: 50%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .section2-container12 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-space-space-unitandhalf);
            align-items: flex-start;
            flex-direction: row;
          }
          .section2-container13 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #37bcf8;
          }
          .section2-icon09 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .section2-container14 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #4aa4e3ff;
          }
          .section2-icon11 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .section2-container15 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #ec4999;
          }
          .section2-icon13 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .section2-container16 {
            width: 50%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .section2-container17 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-space-space-unitandhalf);
            align-items: flex-start;
            flex-direction: row;
          }
          .section2-container18 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #bd195d;
          }
          .section2-icon15 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .section2-container19 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #4aa4e3ff;
          }
          .section2-icon17 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .section2-container20 {
            width: 50%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .section2-container21 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-space-space-unitandhalf);
            align-items: flex-start;
            flex-direction: row;
          }
          .section2-container22 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #37bcf8;
          }
          .section2-icon19 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .section2-container23 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #4aa4e3ff;
          }
          .section2-icon21 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .section2-container24 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #bd195d;
          }
          .section2-icon23 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .section2-container25 {
            width: 50%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .section2-container26 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-space-space-unitandhalf);
            align-items: flex-start;
            flex-direction: row;
          }
          .section2-container27 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #37bcf8;
          }
          .section2-icon25 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .section2-container28 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #4aa4e3ff;
          }
          .section2-icon27 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .section2-container29 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #ec4999;
          }
          .section2-icon29 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .section2-container30 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #bd195d;
          }
          .section2-icon31 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          @media (max-width: 991px) {
            .section2-text {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .section2-container {
              width: 100%;
            }
            .section2-growing-company-section {
              flex-direction: column;
            }
            .section2-image {
              width: 100%;
            }
            .section2-container01 {
              width: 100%;
              margin-top: var(--dl-space-space-doubleunit);
            }
            .section2-container09 {
              width: auto;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .section2-container10 {
              flex-wrap: wrap;
              flex-direction: row;
            }
            .section2-container11 {
              width: 50%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .section2-container16 {
              width: 50%;
              padding-bottom: var(--dl-space-space-tripleunit);
            }
            .section2-container20 {
              width: 50%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .section2-container25 {
              width: 50%;
            }
          }
          @media (max-width: 479px) {
            .section2-container01 {
              align-items: flex-start;
            }
            .section2-container10 {
              align-items: center;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Section2.defaultProps = {
  text4: 'Dynamic components',
  image_alt: 'image',
  heading1: 'A growing company',
  text2: 'Carefully crafted components',
  text3: 'Amazing page examples',
  heading: "It is everything, and it won't change",
  text1:
    "The extension comes with three pre-build pages to help you get started faster. You can change the text and images and you're good to go.",
  image_src:
    'https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
  text: 'Brother, life in est is not like in the west. Over the night, the black clouds appear, but at least I have my poetry for my freedom. The victory is for those that rise after they fall.',
}

Section2.propTypes = {
  text4: PropTypes.string,
  image_alt: PropTypes.string,
  heading1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  heading: PropTypes.string,
  text1: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
}

export default Section2
