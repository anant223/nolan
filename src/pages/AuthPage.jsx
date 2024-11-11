import React from 'react'
import Auth from "../components/Auth"
const AuthPage = () => {
  return (
    <main className="w-full py-6 h-screen bg-[#191b1f] relative z-auto">
      <div className=" text-white h-full overflow-hidden">
        <div className=" relative">
          <div className=" absolute top-0 left-0">
            <svg
              width="600"
              height="904"
              viewBox="0 0 1151 1223"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.1" filter="url(#elipsis_svg__filter0_f_3945_84597)">
                <circle cx="354" cy="426" r="497" fill="#C63056"></circle>
              </g>
              <defs>
                <filter
                  id="elipsis_svg__filter0_f_3945_84597"
                  x="-443"
                  y="-371"
                  width="1594"
                  height="1594"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="150"
                    result="effect1_foregroundBlur_3945_84597"
                  ></feGaussianBlur>
                </filter>
              </defs>
            </svg>
          </div>
          <div className=" absolute top-0  right-0">
            <svg
              width="862"
              height="904"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.1" filter="url(#elipsis_svg__filter0_f_3945_84598)">
                <circle cx="797" cy="107" r="497" fill="#1D6EE3"></circle>
              </g>
              <defs>
                <filter
                  id="elipsis_svg__filter0_f_3945_84598"
                  x="0"
                  y="-690"
                  width="1594"
                  height="1594"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="150"
                    result="effect1_foregroundBlur_3945_84598"
                  ></feGaussianBlur>
                </filter>
              </defs>
            </svg>
          </div>
          <div className=" absolute top-0 left-0">
            <svg
              width="639"
              height="716"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M524.544 284.5c0 175.092-141.499 317.029-316.044 317.029S-107.544 459.592-107.544 284.5c0-175.092 141.5-317.03 316.044-317.03 174.545 0 316.044 141.938 316.044 317.03z"
                stroke="#fff"
                strokeOpacity="0.08"
              ></path>
              <path
                d="M580.299 284.5c0 205.893-166.462 372.799-371.799 372.799S-163.299 490.393-163.299 284.5c0-205.892 166.462-372.799 371.799-372.799S580.299 78.608 580.299 284.5z"
                stroke="#fff"
                strokeOpacity="0.08"
              ></path>
              <path
                d="M637.852 284.5c0 237.687-192.229 430.368-429.352 430.368-237.124 0-429.352-192.681-429.352-430.368 0-237.687 192.228-430.368 429.352-430.368 237.123 0 429.352 192.681 429.352 430.368z"
                stroke="#fff"
                strokeOpacity="0.08"
              ></path>
            </svg>
          </div>

          <div className=" relative top-[190px] py-8 px-5 min-h-[600px]  w-full grid sm:grid-cols-2  grid-cols-1">
            <div>
              <div className=" relative">
                <h1 className="text-4xl">LOG IN</h1>
                <h3 className="text-4xl">
                  <span> Unlock </span>
                  <span className="text-6xl font-bold"> the </span>
                  <span className=" font-thin"> full </span>
                  <span className="text-6xl font-bold"> NOLAN</span>
                  <br />
                  <span className=" font-thin">Experience </span>
                </h3>
              </div>
            </div>
            <div className=" absolute right-20 -top-24">
              <Auth/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AuthPage