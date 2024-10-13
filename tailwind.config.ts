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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
	    backgroundImage: {
        'red-marble': 'radial-gradient(circle at 27% 27%, rgba(255, 205, 178, 1) 0%, rgba(255, 180, 162, 1) 25%, rgba(229, 152, 155, 1) 50%, rgba(181, 131, 141, 1) 75%, rgba(109, 104, 117, 1) 100%)',
        'purple-marble': 'radial-gradient(circle at 27% 27%, rgba(229, 204, 255, 1) 0%, rgba(204, 153, 255, 1) 25%, rgba(178, 102, 255, 1) 50%, rgba(153, 51, 255, 1) 75%, rgba(127, 0, 255, 1) 100%)',
        'blue-marble': 'radial-gradient(circle at 27% 27%, rgba(178, 205, 255, 1) 0%, rgba(162, 180, 255, 1) 25%, rgba(155, 152, 229, 1) 50%, rgba(141, 131, 181, 1) 75%, rgba(117, 104, 109, 1) 100%)',
        'green-marble': 'radial-gradient(circle at 27% 27%, rgba(178, 255, 205, 1) 0%, rgba(162, 255, 180, 1) 25%, rgba(155, 229, 152, 1) 50%, rgba(141, 181, 131, 1) 75%, rgba(109, 117, 104, 1) 100%)',
        'yellow-marble': 'radial-gradient(circle at 27% 27%, rgba(255, 255, 178, 1) 0%, rgba(255, 255, 162, 1) 25%, rgba(229, 229, 155, 1) 50%, rgba(181, 181, 141, 1) 75%, rgba(117, 117, 109, 1) 100%)',
        'marble-before': 'radial-gradient(circle at 50% 0px, #ffffff, rgba(255, 255, 255, 0) 58%)',
        'marble-after': 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8) 14%, rgba(255, 255, 255, 0) 24%)',
      },
      boxShadow: {
        'inner-marble': 'inset 1px 1px 2px rgba(0, 0, 0, 0.3), inset -1px -1px 2px rgba(255, 255, 255, 0.5)',
        'outer-marble': '1px 1px 3px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  variants: {},
  plugins: [],
};
export default config;