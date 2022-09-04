import React from "react";

interface ISVG {
  width?: number;
  height?: number;
  className?: string;
}

export const IconLogo: React.FC<ISVG> = ({ width, height, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 115}
    height={height || 36}
    className={className}
  >
    <path
      d="M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v4c0 13.255-10.745 24-24 24H4a4 4 0 0 1-4-4V4Z"
      fill="#F59E0B"
    />
    <path
      d="M4 8a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v4c0 13.255-10.745 24-24 24H8a4 4 0 0 1-4-4V8Z"
      fill="#4BE4C9"
    />
    <path
      d="M49.376 26V14.8h2.88v4.336h4V14.8h2.88V26h-2.88v-4.304h-4V26h-2.88Zm16.308.16c-.886 0-1.68-.192-2.384-.576a4.394 4.394 0 0 1-1.648-1.568c-.406-.661-.608-1.419-.608-2.272 0-.853.202-1.61.608-2.272.405-.672.954-1.2 1.648-1.584.704-.384 1.498-.576 2.384-.576.885 0 1.674.192 2.368.576a4.206 4.206 0 0 1 1.648 1.584c.405.661.608 1.419.608 2.272 0 .853-.203 1.61-.608 2.272a4.242 4.242 0 0 1-1.648 1.568c-.694.384-1.483.576-2.368.576Zm0-2.32c.544 0 .992-.197 1.344-.592.352-.395.528-.896.528-1.504 0-.619-.176-1.125-.528-1.52a1.702 1.702 0 0 0-1.344-.608 1.75 1.75 0 0 0-1.36.608c-.352.395-.528.901-.528 1.52 0 .608.176 1.11.528 1.504a1.77 1.77 0 0 0 1.36.592Zm9.16 2.336c-.938 0-1.674-.299-2.208-.896-.522-.608-.784-1.456-.784-2.544v-5.248h2.72v4.928c0 .48.112.853.336 1.12.235.267.566.4.992.4.416 0 .757-.128 1.024-.384s.4-.581.4-.976v-5.088h2.72V26H77.5l-.08-1.056a2.968 2.968 0 0 1-1.104.896 3.31 3.31 0 0 1-1.472.336ZM82.34 26v-8.512h2.544l.064.992a3.376 3.376 0 0 1 2.56-1.168c.96 0 1.69.299 2.192.896.512.587.768 1.44.768 2.56V26h-2.72v-5.008c0-.96-.41-1.43-1.232-1.408-.427 0-.778.128-1.056.384-.277.256-.416.57-.416.944V26H82.34Zm10.906 0v-6.16h-1.472v-2.352h1.472v-2.144h2.72v2.144h1.584v2.352h-1.584V26h-2.72Zm9.768.16c-.95 0-1.776-.187-2.48-.56a4.154 4.154 0 0 1-1.617-1.568c-.383-.661-.575-1.413-.575-2.256 0-.875.186-1.643.56-2.304.373-.672.885-1.2 1.536-1.584.65-.384 1.392-.576 2.224-.576.8 0 1.509.187 2.128.56a3.852 3.852 0 0 1 1.44 1.536c.341.65.506 1.392.496 2.224l-.016.688h-5.744c.138.459.405.821.8 1.088.405.267.922.4 1.552.4.352 0 .661-.048.928-.144.277-.107.57-.283.88-.528l1.264 1.792c-.534.437-1.083.752-1.648.944a5.345 5.345 0 0 1-1.728.288Zm-.304-6.608c-.971 0-1.563.437-1.776 1.312h3.296v-.016a1.271 1.271 0 0 0-.464-.928c-.278-.245-.63-.368-1.056-.368ZM108.324 26v-8.512h2.56l.048 1.264c.288-.427.65-.773 1.088-1.04.448-.267.922-.4 1.424-.4.181 0 .357.016.528.048.17.032.325.07.464.112l-.736 2.992a2.216 2.216 0 0 0-.48-.176 2.172 2.172 0 0 0-.656-.096c-.448 0-.816.15-1.104.448-.278.299-.416.688-.416 1.168V26h-2.72Z"
      fill="#1B1C57"
    />
  </svg>
);

export const IconMap: React.FC<ISVG> = ({ width, height, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 24}
    height={height || 24}
    className={className}
  >
    <path d="M12 1c2.387 0 4.676.993 6.364 2.762C20.052 5.53 21 7.928 21 10.429c0 4.505-2.902 8.652-8.598 12.449a.726.726 0 0 1-.804 0C5.902 19.08 3 14.934 3 10.428c0-2.5.948-4.898 2.636-6.666C7.324 1.993 9.613 1 12 1Zm0 6.286c-.796 0-1.559.33-2.121.92A3.22 3.22 0 0 0 9 10.43c0 .833.316 1.633.879 2.222.562.59 1.325.92 2.121.92s1.559-.33 2.121-.92A3.22 3.22 0 0 0 15 10.429a3.22 3.22 0 0 0-.879-2.223A2.933 2.933 0 0 0 12 7.286Z" />
  </svg>
);

export const IconChevronRight: React.FC<ISVG> = ({ width, height, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 24}
    height={height || 24}
    className={className}
  >
    <path d="M9.993 5.002a.988.988 0 0 0-.879.532 1.002 1.002 0 0 0 .116 1.104l4.442 5.348-4.284 5.358a1 1 0 0 0 .15 1.407.99.99 0 0 0 1.142.12.993.993 0 0 0 .305-.27l4.79-5.986a1.001 1.001 0 0 0 0-1.267L10.815 5.36a.993.993 0 0 0-.823-.36Z" />
  </svg>
);

export const IconColorBlur1: React.FC<ISVG> = ({ width, height, className }) => (
  <svg width={688} height={396} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity={0.3} filter="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M545.209 70c-11.036 34.669-36.295 61.19-59.172 89.462-19.711 24.359-40.717 46.073-65.745 64.911-27.878 20.983-54.17 50.185-89.019 51.573-34.962 1.393-64.322-24.539-93.206-44.312-27.156-18.59-46.492-44.207-69.901-67.348-32.04-31.674-87.333-49.644-93.6-94.285C68.507 26.845 112.49-6.65 139.353-40.94c23.809-30.39 50.385-57.306 83.085-77.799 33.577-21.043 69.644-48.243 108.835-42.477 39.128 5.755 55.765 55.714 91.815 71.994 42.028 18.979 104.667-7.2 132.748 29.413 26.867 35.03 2.768 87.727-10.627 129.809Z"
        fill="#82FFD2"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={-46}
        y={-282}
        width={734}
        height={678}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation={60} result="effect1_foregroundBlur_4_19" />
      </filter>
    </defs>
  </svg>
);

export const IconVilla: React.FC<ISVG> = ({ width, height, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 24}
    height={height || 24}
    className={className}
  >
    <path d="M7 21H4c-.55 0-1-.45-1-1V8.69c0-.42.25-.79.64-.94l11-4.23a1 1 0 0 1 1.36.94V10H8c-.55 0-1 .45-1 1v10Zm10-9h-7c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h4v-4c0-.55.45-1 1-1s1 .45 1 1v4h4c.55 0 1-.45 1-1v-8c0-1.1-.9-2-2-2s-2 .9-2 2Z" />
  </svg>
);

export const IconHouse: React.FC<ISVG> = ({ width, height, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width || 24}
    height={height || 24}
    className={className}
  >
    <path d="M21 10.832V19.5a1.508 1.508 0 0 1-.792 1.326c-.216.117-.46.177-.706.174h-4.505a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 1-.75.75H4.5a1.49 1.49 0 0 1-1.124-.507A1.544 1.544 0 0 1 3 19.466v-8.634a1.503 1.503 0 0 1 .491-1.11l7.5-6.819a1.494 1.494 0 0 1 2.018 0l7.5 6.819a1.504 1.504 0 0 1 .491 1.11Z" />
  </svg>
);

export const IconAparment: React.FC<ISVG> = ({ width, height, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 24}
    height={height || 24}
    className={className}
  >
    <path d="M17 11V5c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h6v-4h2v4h6c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2h-2ZM7 19H5v-2h2v2Zm0-4H5v-2h2v2Zm0-4H5V9h2v2Zm4 4H9v-2h2v2Zm0-4H9V9h2v2Zm0-4H9V5h2v2Zm4 8h-2v-2h2v2Zm0-4h-2V9h2v2Zm0-4h-2V5h2v2Zm4 12h-2v-2h2v2Zm0-4h-2v-2h2v2Z" />
  </svg>
);

export const IconFire: React.FC<ISVG> = ({ width, height, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 24}
    height={height || 24}
    className={className}
  >
    <path d="M13.033 7.331a5.43 5.43 0 0 0-1.295-1.8l-.455-.417a.126.126 0 0 0-.203.052l-.203.582c-.127.366-.36.74-.69 1.107a.098.098 0 0 1-.064.03.086.086 0 0 1-.067-.023.092.092 0 0 1-.031-.075c.058-.94-.223-2.001-.84-3.156-.508-.96-1.216-1.708-2.1-2.23l-.646-.38a.125.125 0 0 0-.187.115l.034.75c.023.512-.036.966-.177 1.342-.171.461-.418.89-.734 1.273a4.62 4.62 0 0 1-.742.72 5.51 5.51 0 0 0-1.567 1.9 5.434 5.434 0 0 0-.133 4.535 5.49 5.49 0 0 0 2.928 2.9A5.497 5.497 0 0 0 8 14.984c.742 0 1.46-.143 2.14-.426a5.447 5.447 0 0 0 1.747-1.167A5.41 5.41 0 0 0 13.5 9.533c0-.763-.156-1.503-.467-2.202Z" />
  </svg>
);
export const IconWallet: React.FC<ISVG> = ({ width, height, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 24}
    height={height || 24}
    className={className}
  >
    <path d="M12.8 4.8h-10v-.4l8.8-.704V4.4h1.2V3.2c0-.88-.713-1.498-1.583-1.374L3.184 2.974C2.313 3.098 1.6 3.92 1.6 4.8v8a1.6 1.6 0 0 0 1.6 1.6h9.6a1.6 1.6 0 0 0 1.6-1.6V6.4a1.6 1.6 0 0 0-1.6-1.6Zm-1.2 5.605a1.203 1.203 0 0 1-1.2-1.201 1.199 1.199 0 0 1 2.05-.848 1.2 1.2 0 0 1-.85 2.049Z" />
  </svg>
);
