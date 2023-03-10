import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { splitVendorChunkPlugin } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/SewageMap/",

    build: {
        chunkSizeWarningLimit: 1500
    },
    plugins: [
        splitVendorChunkPlugin(),
        // For all styled components:
        // create classnames from fileName and displayName in development
        react({
            babel: {
                presets: ["@babel/preset-typescript"],
                plugins: [
                    "@babel/plugin-transform-typescript",
                    [
                        "babel-plugin-styled-components",
                        {
                            ssr: false,
                            pure: true,
                            displayName: true,
                            fileName: false
                        }
                    ]
                ]
            }
        })
    ]
});
