import React from 'react'
import {ele1, screen } from '../constant';
import CustomeBtn from '../components/CustomeBtn';
import { useSelector } from 'react-redux';

const Home = () => {
  
  return (
    <main className="w-full text-white relative min-h-[93vh]">
      <div className="bg-[#191b1f] relative">
        <div className="">
          <div className="">
            <div className="absolute top-0 left-0">
              <svg
                width="600"
                height="904"
                viewBox="0 0 1151 1223"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  opacity="0.1"
                  filter="url(#elipsis_svg__filter0_f_3945_84597)"
                >
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
            <div className="absolute top-0  right-0">
              <svg
                width="862"
                height="904"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  opacity="0.1"
                  filter="url(#elipsis_svg__filter0_f_3945_84598)"
                >
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
            <div className="absolute top-0 left-0">
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
            <div className="absolute top-[190px] py-8 px-5 min-h-[600px]">
              <div>
                <div className=" relative">
                  <h1 className="text-4xl">Bring your film project to life</h1>
                  <h3 className="text-4xl">
                    <span> from </span>
                    <span className="text-6xl font-bold"> idea </span>
                    <span className=" font-thin"> to </span>
                    <span className="text-6xl font-bold"> production </span>
                  </h3>
                </div>
                <div className=" mt-10">
                  <CustomeBtn name="Start Creating" icon=">" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute sm:top-0 sm:right-[15px] sm:w-full sm:h-full h-[400px] w-[100%] top-0 right-0">
                <svg
                  viewBox="0 0 1440 1223"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto md:w-auto"
                >
                  <path
                    d="M873.5 210.648a13.5 13.5 0 0112.133-13.431l482.997-49.151c7.96-.809 14.87 5.435 14.87 13.431v388.126c0 7.955-6.84 14.185-14.76 13.441l-483.003-45.37c-6.936-.651-12.237-6.474-12.237-13.441V210.648z"
                    stroke="#fff"
                    strokeOpacity="0.08"
                  ></path>
                  <path
                    d="M883.5 206.598c0-11.481 8.645-21.121 20.06-22.367l467-50.952c13.31-1.453 24.94 8.974 24.94 22.367v399.921c0 13.318-11.5 23.722-24.75 22.387l-467.005-47.033c-11.495-1.158-20.245-10.834-20.245-22.387V206.598z"
                    stroke="#fff"
                    strokeOpacity="0.08"
                  ></path>
                </svg>
              </div>
              <div className=" absolute bg-blue-600 w-[520px] h-[320px] right-[50px] perspective-1500-rotate-y-35 blur-lg top-[150px]"></div>
              <div className="absolute right-[50px] top-[150px] w-[520px] h-[320px] perspective-1500-rotate-y-35">
                <img
                  src="https://www.nolanai.app/_next/image?url=%2Fimages%2Fhero-img-for-studios_50.webp&w=1920&q=75"
                  alt="disco_img"
                  className="w-full h-full object-cover rounded-sm shadow-blue-800"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative pt-[540px] ">
          <div className="bg-gradient-to-b from-transparent to-[#191b1f] text-center">
            <h1 className="text-4xl font-bold">
              NolanAI is a collaborative film production suite
            </h1>
            <h2 className="font-semibold text-2xl pt-[10px] pb-[20px] leading-[28px]">
              "covering the full film production process from concept creation
              and screenwriting to planning and stage production"
            </h2>
          </div>
        </div>
        <div className=" flex justify-center items-center pt-[64px] px-[64px] flex-col relative">
          <div className=" grid grid-cols-3 items-center justify-between w-full">
            <div className="text-center flex flex-col  items-center  gap-6">
              <div>{ele1}</div>
              <h1>AI Co-Pilot Editor</h1>
              <p className="p-2">
                Overcome writer’s block with AI-driven prompts and suggestions,
                ensuring a seamless writing flow.
              </p>
            </div>
            <div className=" text-center flex flex-col items-center gap-6">
              <div>{ele1}</div>
              <h1>AI Pitch Deck</h1>
              <p className="p-2">
                Create compelling pitch decks effortlessly with ready-made
                templates. NolanAI extracts crucial details to suggest casts and
                visualize your story.
              </p>
            </div>
            <div className="text-center flex flex-col items-center gap-6">
              <div>{ele1}</div>
              <h1>Multilingual</h1>
              <p className="p-2">
                Work seamlessly in Spanish, French, Portuguese, or Russian - no
                language barriers to hold back your projects.
              </p>
            </div>
          </div>
          <div className="py-6">
            <CustomeBtn name={"Sign Up For Free =>"} />
          </div>
          <div className=" text-center py-6">
            <h1 className=" text-4xl ">Leading the charge in Ethical AI</h1>
            <h2 className="text-2xl py-6">
              At NolanAI, we prioritize the ethical implications of AI in the
              creative industry. We believe in AI-powered tools that enhance
              human-driven storytellin
            </h2>
          </div>
          <div className="">
            <CustomeBtn name={"Learn More"} />
          </div>
        </div>
        <div className="py-16 px-8">
          <div className="text-center text-4xl py-6">
            <h4>
              From
              <span className=" font-bold"> screen writing </span>
              to
              <span className="font-bold"> pre-production</span>,
            </h4>
            <h4>we got you covered!</h4>
          </div>
          <div className=" relative py-6 grid grid-cols-2  items-center">
            <div className="sm:w-full sm:h-full h-[400px] w-[100%]">
              {screen}
            </div>
            <div className="">
              <div className="py-6">
                <h4 className="text-4xl">Enhance your</h4>
                <h4 className="text-4xl font-bold ">
                  screenwriting experience
                </h4>
                <p className="text-2xl py-6">
                  providing tailored solutions to overcome writer’s block and
                  streamlining your creative process.
                </p>
              </div>
              <div>
                <CustomeBtn name={"NolanAI for Screen writer"} />
              </div>
            </div>
          </div>
          <div className=" relative pt-20">
            <div className=" pt-[50px] absolute flex justify-center w-full bottom-0 py-6">
              <svg
                width="596"
                height="264"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M.167 6a5.333 5.333 0 1010.666 0A5.333 5.333 0 00.167 6zM278 185.5l.427.904-.427-.904zm306.667 73a5.333 5.333 0 1010.666 0 5.333 5.333 0 00-10.666 0zM4.5 6c0 .665.006 1.332.019 2l2-.037C6.505 7.307 6.5 6.653 6.5 6h-2zm.167 6.026c.074 1.345.173 2.694.295 4.048l1.992-.18c-.12-1.33-.217-2.657-.29-3.977l-1.997.11zm.721 8.033c.165 1.333.352 2.67.562 4.01l1.976-.309c-.206-1.32-.39-2.635-.553-3.946l-1.985.245zm1.243 7.974c.246 1.312.513 2.627.8 3.945l1.954-.426c-.283-1.3-.546-2.595-.788-3.888l-1.966.369zm1.719 7.892a150.08 150.08 0 001.013 3.87l1.928-.532a148.02 148.02 0 01-1-3.818l-1.941.48zm2.139 7.75a162.3 162.3 0 001.218 3.836l1.899-.63c-.42-1.263-.82-2.526-1.204-3.787l-1.913.581zm2.527 7.63a174.39 174.39 0 001.41 3.797l1.866-.718a172.396 172.396 0 01-1.394-3.753l-1.882.674zm2.887 7.515c.507 1.236 1.03 2.47 1.568 3.706l1.834-.8a184.027 184.027 0 01-1.551-3.665l-1.85.76zm3.222 7.393c.556 1.206 1.126 2.411 1.711 3.615l1.799-.874a195.886 195.886 0 01-1.694-3.578l-1.816.837zm3.508 7.22c.608 1.192 1.23 2.382 1.866 3.57l1.764-.944a205.483 205.483 0 01-1.849-3.535l-1.781.91zm3.79 7.083a218.978 218.978 0 002 3.5l1.728-1.01a216.294 216.294 0 01-1.983-3.467l-1.746.977zm4.058 6.95a227.647 227.647 0 002.114 3.407l1.69-1.07c-.71-1.122-1.409-2.248-2.095-3.376l-1.709 1.04zm4.3 6.795a237.585 237.585 0 002.233 3.334l1.652-1.127c-.749-1.099-1.487-2.2-2.214-3.306l-1.67 1.099zm4.521 6.629a248.605 248.605 0 002.354 3.272l1.614-1.181a242.481 242.481 0 01-2.335-3.246l-1.633 1.155zm4.749 6.489a255.013 255.013 0 002.448 3.179l1.575-1.233c-.82-1.047-1.63-2.098-2.429-3.154l-1.594 1.208zm4.957 6.331c.839 1.037 1.688 2.07 2.547 3.098l1.534-1.283a249.09 249.09 0 01-2.526-3.073l-1.555 1.258zm5.144 6.157c.875 1.015 1.76 2.024 2.653 3.029l1.494-1.33a252.273 252.273 0 01-2.633-3.005l-1.514 1.306zm5.343 6.004c.903.985 1.816 1.963 2.737 2.936l1.452-1.375c-.914-.966-1.82-1.937-2.716-2.913l-1.473 1.352zm5.526 5.836c.933.956 1.875 1.906 2.826 2.85l1.409-1.42a254.23 254.23 0 01-2.805-2.828l-1.43 1.398zm5.695 5.656c.965.929 1.938 1.851 2.918 2.767L75 138.668a261.413 261.413 0 01-2.895-2.746l-1.388 1.441zm5.874 5.484c.991.898 1.99 1.788 2.996 2.672l1.32-1.503c-.999-.877-1.99-1.761-2.974-2.651l-1.342 1.482zm6.037 5.299a250.76 250.76 0 003.08 2.579l1.272-1.543a248.38 248.38 0 01-3.056-2.559l-1.296 1.523zm6.198 5.109c1.046.835 2.1 1.662 3.16 2.481l1.223-1.582a264.647 264.647 0 01-3.135-2.462l-1.248 1.563zm6.358 4.913c1.072.802 2.15 1.595 3.236 2.38l1.172-1.621a240.97 240.97 0 01-3.21-2.361l-1.198 1.602zm6.509 4.707a258.65 258.65 0 003.312 2.275l1.119-1.658a244.723 244.723 0 01-3.285-2.256l-1.146 1.639zm6.662 4.495a230.62 230.62 0 003.384 2.163l1.063-1.694a241.095 241.095 0 01-3.356-2.145l-1.091 1.676zm6.804 4.27c1.148.694 2.3 1.377 3.459 2.05l1.005-1.729a227.116 227.116 0 01-3.429-2.033l-1.035 1.712zm6.949 4.038c1.17.653 2.345 1.296 3.525 1.927l.944-1.763a222.99 222.99 0 01-3.494-1.91l-.975 1.746zm7.087 3.794c1.193.611 2.39 1.211 3.592 1.8l.88-1.796a214.905 214.905 0 01-3.56-1.784l-.912 1.78zm7.215 3.534a211.03 211.03 0 003.661 1.669l.813-1.827a211.241 211.241 0 01-3.627-1.654l-.847 1.812zm7.348 3.267a205.59 205.59 0 003.716 1.526l.742-1.857a209.049 209.049 0 01-3.68-1.512l-.778 1.843zm7.468 2.982c1.255.473 2.514.932 3.776 1.379l.667-1.885a199.384 199.384 0 01-3.738-1.366l-.705 1.872zm7.577 2.681c1.274.422 2.553.831 3.834 1.226l.589-1.912c-1.268-.39-2.533-.795-3.795-1.213l-.628 1.899zm7.689 2.369c1.289.368 2.581.721 3.876 1.061l.507-1.935a184.213 184.213 0 01-3.834-1.049l-.549 1.923zm7.782 2.039c1.305.311 2.613.608 3.923.89l.421-1.955a179.568 179.568 0 01-3.88-.881l-.464 1.946zm7.863 1.691c1.318.253 2.639.49 3.962.712l.331-1.972c-1.308-.22-2.614-.454-3.917-.704l-.376 1.964zm7.938 1.331c1.327.191 2.657.366 3.989.525l.237-1.986c-1.316-.157-2.63-.33-3.942-.519l-.284 1.98zm7.99.954c1.335.126 2.673.237 4.011.331l.14-1.995a163.926 163.926 0 01-3.962-.327l-.189 1.991zm8.031.563c1.339.06 2.679.104 4.02.13l.04-1.999a163.86 163.86 0 01-3.969-.129l-.091 1.998zm8.046.159c1.343-.007 2.686-.032 4.031-.075l-.063-1.999a150.95 150.95 0 01-3.979.074l.011 2zm8.045-.253c1.338-.077 2.678-.172 4.017-.284l-.167-1.993c-1.322.111-2.644.204-3.965.28l.115 1.997zm8.035-.676c1.327-.147 2.654-.311 3.982-.494l-.273-1.982c-1.31.181-2.62.343-3.93.489l.221 1.987zm7.964-1.097c1.328-.219 2.655-.457 3.981-.712l-.378-1.964c-1.309.252-2.619.486-3.928.703l.325 1.973zm7.904-1.524a149.09 149.09 0 003.92-.92l-.484-1.941c-1.288.321-2.577.624-3.867.908l.431 1.953zm7.836-1.952a153.29 153.29 0 003.842-1.122l-.587-1.912c-1.263.387-2.526.756-3.791 1.107l.536 1.927zm7.671-2.353c1.275-.428 2.55-.875 3.822-1.341l-.687-1.878c-1.256.46-2.513.901-3.772 1.324l.637 1.895zm7.567-2.766c1.239-.49 2.477-.998 3.713-1.525l-.784-1.84c-1.22.52-2.441 1.021-3.664 1.505l.735 1.86zm7.416-3.159c.617-.281 1.233-.567 1.848-.858l-.854-1.808c-.608.287-1.216.569-1.824.847l.83 1.819zm1.848-.858c.615-.29 1.229-.577 1.843-.861l-.841-1.815c-.618.286-1.236.575-1.856.868l.854 1.808zm5.512-2.525a250.82 250.82 0 013.65-1.587l-.782-1.84c-1.223.52-2.45 1.053-3.679 1.599l.811 1.828zm7.34-3.12a236.208 236.208 0 013.744-1.484l-.721-1.866c-1.255.486-2.514.984-3.776 1.497l.753 1.853zm7.468-2.887c1.259-.462 2.514-.91 3.766-1.345l-.656-1.889c-1.263.438-2.529.89-3.799 1.356l.689 1.878zm7.576-2.63c1.267-.414 2.53-.814 3.79-1.201l-.587-1.912c-1.272.39-2.547.794-3.825 1.212l.622 1.901zm7.633-2.342c1.292-.37 2.58-.726 3.865-1.067l-.514-1.933c-1.297.345-2.598.704-3.902 1.078l.551 1.922zm7.71-2.05c1.309-.321 2.614-.628 3.916-.92l-.438-1.951c-1.315.295-2.633.604-3.955.928l.477 1.943zm7.826-1.756c1.305-.265 2.606-.516 3.904-.753l-.358-1.968c-1.312.24-2.627.493-3.945.761l.399 1.96zm7.867-1.433c1.317-.212 2.631-.41 3.942-.593l-.277-1.981c-1.324.185-2.652.385-3.983.599l.318 1.975zm7.907-1.105a183.21 183.21 0 013.982-.429l-.194-1.991c-1.337.13-2.679.275-4.023.434l.235 1.986zm7.943-.771a188.27 188.27 0 014.007-.261l-.109-1.997a186.16 186.16 0 00-4.049.264l.151 1.994zm7.996-.434c1.334-.044 2.665-.074 3.992-.089l-.023-2c-1.342.015-2.687.045-4.035.09l.066 1.999zm7.996-.094c1.331.013 2.659.04 3.985.081l.061-1.999a185.745 185.745 0 00-4.027-.081l-.019 1.999zm7.988.245c1.332.069 2.661.152 3.988.248l.144-1.995a191.82 191.82 0 00-4.029-.25l-.103 1.997zm7.97.577c1.329.124 2.656.261 3.98.411l.225-1.987c-1.337-.152-2.677-.29-4.02-.415l-.185 1.991zm7.943.901c1.323.177 2.644.367 3.962.569l.303-1.976c-1.33-.205-2.664-.397-4-.575l-.265 1.982zm7.908 1.215c1.314.227 2.625.467 3.934.72l.378-1.964a213.008 213.008 0 00-3.97-.727l-.342 1.971zm7.855 1.513c1.304.276 2.607.564 3.907.864l.449-1.949a223.618 223.618 0 00-3.942-.872l-.414 1.957zm7.796 1.796c1.294.322 2.586.655 3.876 1l.516-1.933a243.576 243.576 0 00-3.909-1.008l-.483 1.941zm7.733 2.063c1.282.365 2.562.74 3.841 1.126l.577-1.915a263.334 263.334 0 00-3.871-1.135l-.547 1.924zm7.667 2.313c1.269.405 2.536.819 3.801 1.243l.636-1.897a271.217 271.217 0 00-3.829-1.251l-.608 1.905zm7.593 2.543c1.257.442 2.513.892 3.767 1.352l.688-1.878a307.115 307.115 0 00-3.792-1.361l-.663 1.887zm7.518 2.755c1.247.476 2.493.961 3.738 1.454l.737-1.859a327.785 327.785 0 00-3.762-1.463l-.713 1.868zm7.448 2.951c1.235.507 2.47 1.022 3.703 1.545l.781-1.841a341.142 341.142 0 00-3.725-1.555l-.759 1.851zm7.38 3.129c1.222.534 2.443 1.076 3.663 1.625l.821-1.824a372.478 372.478 0 00-3.682-1.634l-.802 1.833zm7.316 3.291c1.209.559 2.417 1.125 3.624 1.697l.857-1.807a411.21 411.21 0 00-3.641-1.705l-.84 1.815zm7.244 3.433c1.2.583 2.4 1.171 3.598 1.766l.889-1.792a481.491 481.491 0 00-3.613-1.773l-.874 1.799zm7.182 3.562c1.194.604 2.387 1.214 3.58 1.83l.917-1.777a468.332 468.332 0 00-3.594-1.837l-.903 1.784zm7.129 3.679c1.183.621 2.366 1.248 3.548 1.879l.943-1.764a581.678 581.678 0 00-3.561-1.886l-.93 1.771zm7.082 3.782c1.173.636 2.345 1.277 3.518 1.922l.964-1.752a682.23 682.23 0 00-3.528-1.928l-.954 1.758zm7.036 3.871c1.164.649 2.329 1.303 3.494 1.96l.983-1.741a770.992 770.992 0 00-3.503-1.966l-.974 1.747zm6.985 3.942c1.163.664 2.325 1.331 3.488 2.001l.999-1.733c-1.165-.671-2.33-1.34-3.495-2.005l-.992 1.737zm6.955 4.01a1152.5 1152.5 0 013.471 2.029l1.012-1.725c-1.159-.68-2.318-1.358-3.477-2.032l-1.006 1.728zm6.93 4.067c1.15.68 2.3 1.363 3.451 2.048l1.023-1.719a1641.76 1641.76 0 00-3.456-2.051l-1.018 1.722zm6.906 4.111c1.145.686 2.291 1.374 3.438 2.064l1.031-1.713a1843.73 1843.73 0 00-3.442-2.067l-1.027 1.716zm6.878 4.139l3.441 2.084 1.037-1.71c-1.148-.697-2.296-1.392-3.443-2.085l-1.035 1.711zm6.87 4.167l3.434 2.091 1.041-1.708-3.436-2.092-1.039 1.709zm6.865 4.184l3.428 2.092 1.042-1.707-3.428-2.092-1.042 1.707zm6.862 4.189l3.428 2.093 1.042-1.708-3.428-2.092-1.042 1.707zm6.86 4.185c1.145.697 2.291 1.395 3.439 2.092l1.038-1.709-3.437-2.091-1.04 1.708zm6.871 4.175c1.145.694 2.292 1.388 3.441 2.082l1.034-1.712c-1.148-.693-2.294-1.387-3.438-2.08l-1.037 1.71zm6.887 4.158c1.147.69 2.295 1.379 3.445 2.067l1.027-1.716c-1.148-.688-2.296-1.376-3.442-2.065l-1.03 1.714zm6.901 4.129c.576.343 1.153.686 1.731 1.028l1.02-1.72-1.729-1.027-1.022 1.719z"
                  fill="#fff"
                  fillOpacity="0.16"
                  clipPath="url(#screenwriterVector_svg__c)"
                ></path>
              </svg>
            </div>
          </div>
          <div className=" relative py-6 items-center flex flex-row-reverse -mt-[190px] overflow-hidden px-12">
            <div className="sm:w-full sm:h-full h-[400px] w-[100%] relative left-24">
              {screen}
            </div>
            <div className="">
              <div className="py-6 ">
                <h4 className="text-4xl">Enhance your</h4>
                <h4 className="text-4xl font-bold ">
                  screenwriting experience
                </h4>
                <p className="text-2xl py-6">
                  providing tailored solutions to overcome writer’s block and
                  streamlining your creative process.
                </p>
              </div>
              <div>
                <CustomeBtn name={"NolanAI for Screen writer"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home

