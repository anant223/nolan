import React from 'react'
import {Logo} from '../index'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="h-[180px] w-full bg-gray-900 text-white flex flex-col justify-center content-start relative overflow-hidden">
      <div className="sm:flex w-full sm:justify-between px-16 sm:items-center grid grid-cols-1 space-y-1">
        <div className='p-2 flex justify-center'>
          <Logo/>
        </div>
        <div className=" sm:flex text-center w-full sm:absolute justify-center p-2 left-0 right-0">
          <div className=''>
            <div className="">
              <span>© NolanAI, Inc. 2024</span>
            </div>
            <div className=" space-x-2">
              <Link to="#">Testimonials</Link>
              <span>|</span>
              <Link to="#">Privacy Policy</Link>
              <span>|</span>
              <Link to="#">Referral Program</Link>
              <span>|</span>
              <Link to="#">Releases</Link>
              <span>|</span>
              <Link to="#">FAQ</Link>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 sm:items-center sm:justify-end justify-center">
          <Link to="#">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
            >
              <path
                d="M10.24 1.92c-4.587 0-8.32 3.733-8.32 8.32v11.52c0 4.587 3.733 8.32 8.32 8.32h11.52c4.587 0 8.32-3.733 8.32-8.32V10.24c0-4.587-3.733-8.32-8.32-8.32H10.24zm0 1.28h11.52a7.03 7.03 0 017.04 7.04v11.52a7.03 7.03 0 01-7.04 7.04H10.24a7.03 7.03 0 01-7.04-7.04V10.24a7.03 7.03 0 017.04-7.04zm13.44 3.84a1.28 1.28 0 100 2.56 1.28 1.28 0 000-2.56zM16 8.96c-3.88 0-7.04 3.16-7.04 7.04s3.16 7.04 7.04 7.04 7.04-3.16 7.04-7.04S19.88 8.96 16 8.96zm0 1.28A5.75 5.75 0 0121.76 16 5.75 5.75 0 0116 21.76 5.75 5.75 0 0110.24 16 5.75 5.75 0 0116 10.24z"
                fill="gray"
                fillOpacity="0.72"
              ></path>
            </svg>
          </Link>
          <Link to="#">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
            >
              <path
                d="M3.789 3.84l9.384 13.68-9.185 10.64h2.035l8.048-9.33 6.4 9.33h7.69l-9.805-14.291L27.008 3.84h-2.03l-7.522 8.715-5.978-8.715h-7.69zm2.43 1.28h4.585L25.73 26.88h-4.585L6.22 5.12z"
                fill="gray"
                fillOpacity="0.72"
              ></path>
            </svg>
          </Link>
          <Link to="#">
            <svg
              width="32"
              height="32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.617 5.76c-4.225 0-8.192.32-10.305.768-1.407.32-2.625 1.28-2.88 2.752-.255 1.535-.512 3.84-.512 6.72s.255 5.12.575 6.72c.257 1.408 1.472 2.433 2.88 2.753 2.242.447 6.08.767 10.305.767s8.062-.32 10.302-.767c1.41-.32 2.625-1.28 2.88-2.753.258-1.6.578-3.902.64-6.782 0-2.88-.32-5.186-.64-6.785-.255-1.408-1.47-2.433-2.88-2.753-2.24-.32-6.142-.64-10.365-.64zm0 1.28c4.608 0 8.318.383 10.11.703.96.257 1.728.897 1.855 1.73.385 2.047.64 4.224.64 6.464-.062 2.75-.382 4.99-.64 6.59-.19 1.215-1.47 1.6-1.855 1.73-2.305.448-6.145.765-9.985.765S8 24.768 5.76 24.259c-.96-.258-1.728-.898-1.855-1.73C3.392 20.735 3.2 18.367 3.2 16c0-2.945.257-5.12.512-6.462.193-1.218 1.535-1.603 1.855-1.73 2.113-.448 6.018-.768 10.05-.768zm-3.457 3.84v10.24L21.12 16l-8.96-5.12zm1.28 2.177L18.56 16l-5.12 2.942v-5.885z"
                fill="gray"
                fillOpacity="0.72"
              ></path>
            </svg>
          </Link>
          <Link to="#">
            <svg
              // ariaLabel="Threads"
              viewBox="0 0 192 192"
              fill="none"

              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
            >
              <path
                fill="gray"
                d="M141.537 88.988a66.667 66.667 0 00-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.229c8.249.053 14.474 2.452 18.503 7.129 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.371-39.134 15.264-38.105 34.568.522 9.792 5.4 18.216 13.735 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.458-.683 22.231-5.436 29.049-14.127 5.178-6.6 8.453-15.153 9.899-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.376-11.319 11.308-24.925 16.2-45.488 16.351-22.809-.169-40.06-7.484-51.275-21.742C35.236 139.966 29.808 120.682 29.605 96c.203-24.682 5.63-43.966 16.133-57.317C56.954 24.425 74.204 17.11 97.013 16.94c22.975.17 40.526 7.52 52.171 21.847 5.71 7.026 10.015 15.86 12.853 26.162l16.147-4.308c-3.44-12.68-8.853-23.606-16.219-32.668C147.036 9.607 125.202.195 97.07 0h-.113C68.882.194 47.292 9.642 32.788 28.08 19.882 44.485 13.224 67.315 13.001 95.932L13 96v.067c.224 28.617 6.882 51.447 19.788 67.854C47.292 182.358 68.882 191.806 96.957 192h.113c24.96-.173 42.554-6.708 57.048-21.189 18.963-18.945 18.392-42.692 12.142-57.27-4.484-10.454-13.033-18.945-24.723-24.553zM98.44 129.507c-10.44.588-21.286-4.098-21.82-14.135-.397-7.442 5.296-15.746 22.461-16.735 1.966-.114 3.895-.169 5.79-.169 6.235 0 12.068.606 17.371 1.765-1.978 24.702-13.58 28.713-23.802 29.274z"
              ></path>
            </svg>
          </Link>
          <Link to="#">
            <svg
              viewBox="0 0 24 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              color="gray"
            >
              <path
                d="M18.894 4.344A17.409 17.409 0 0014.532 3c-.192.33-.406.779-.555 1.13a16.677 16.677 0 00-4.833 0c-.15-.351-.373-.8-.555-1.13a17.162 17.162 0 00-4.363 1.344C1.463 8.419.716 12.397 1.09 16.323A17.782 17.782 0 006.435 19a13 13 0 001.14-1.845 11.182 11.182 0 01-1.802-.864c.15-.107.299-.224.438-.342 3.477 1.59 7.243 1.59 10.678 0 .15.118.288.235.437.342a11.18 11.18 0 01-1.802.864A13 13 0 0016.665 19a17.684 17.684 0 005.345-2.677c.459-4.544-.726-8.491-3.116-11.979zM8.056 13.901c-1.045 0-1.899-.949-1.899-2.112 0-1.162.832-2.112 1.899-2.112 1.056 0 1.92.95 1.899 2.112 0 1.163-.843 2.112-1.9 2.112zm7.009 0c-1.045 0-1.9-.949-1.9-2.112 0-1.162.833-2.112 1.9-2.112 1.056 0 1.92.95 1.899 2.112 0 1.163-.832 2.112-1.899 2.112z"
                stroke="currentColor"
                strokeLinejoin="round"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer