import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      0: '0rem',
      1: '0.1rem',
      2: '0.2rem',
      4: '0.4rem',
      8: '0.8rem',
      12: '1.2rem',
      16: '1.6rem',
      20: '2rem',
      24: '2.4rem',
      32: '3.2rem',
      40: '4rem',
      48: '4.8rem',
      56: '5.6rem',
      64: '6.4rem'
    },
    extend: {
      fontSize: {
        12: [
          '1.2rem',
          {
            lineHeight: '2rem'
          }
        ],
        14: [
          '1.4rem',
          {
            lineHeight: '2.2rem'
          }
        ],
        16: [
          '1.6rem',
          {
            lineHeight: '2.4rem'
          }
        ],
        24: [
          '2.4rem',
          {
            lineHeight: '3.2rem'
          }
        ],
        32: [
          '3.2rem',
          {
            lineHeight: '4rem'
          }
        ],
        40: [
          '4rem',
          {
            lineHeight: '4.8rem'
          }
        ]
      },
      breakpoints: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1240px',
        xxl: '1440px'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
