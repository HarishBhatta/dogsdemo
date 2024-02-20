import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      fontSize: {
        primary: ['16.672px','25.008px']
      },
      backgroundImage: {
        'cat' : "url('./background.jpg)",
      },
      fontFamily: {
        poppins: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)']      },
      colors: {
        "blue" : "rgba(19, 162, 169)", 
      },
    },
  },
  plugins: [],
};
export default config;
