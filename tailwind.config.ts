import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-primary': '#1D3531',
        'green-actived': '#5D8A83',
        'green-border' : '#2A4B46',
        'green-btn': '#CCEC60',
        'green-title-card': '#719D96'
      },
      maxWidth: {
        grid: '1240px',
        'text-hero': '1056px',
        'area-icons': '855px',
        'area-mockups': '957px',
        'area-cards': '1320px'
      },
      height: {
        'hero-section': '874px',
        'area-cards': "562px"
      },
      backgroundImage: {
        'hero': "url('/bg-hero.svg')"
      }
    },
  },
  plugins: [],
};
export default config;
