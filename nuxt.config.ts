// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
    alias: {
        "@": resolve(__dirname, "/"),
    },
    css: ["~/assets/main.scss"],
    devtools: { enabled: true },
    modules: [
        "nuxt-swiper",
        [
            "@nuxtjs/google-fonts",
            {
                families: {
                    Lato: [300, 400, 700, 900],
                    Roboto: [400, 500, 700],
                },
            },
        ],
        [
            "@pinia/nuxt",
            {
                autoImports: [["defineStore", "definePiniaStore"]],
            },
        ],
    ],
    swiper: {
        prefix: "Swiper",
        styleLang: "css",
        modules: ["navigation", "pagination"],
    },
    imports: {
        dirs: ["./stores"],
    },
});
