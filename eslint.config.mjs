// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";

export default withNuxt([
    {
        plugins: {
            "better-tailwindcss": eslintPluginBetterTailwindcss
        },
        rules: {
            ...eslintPluginBetterTailwindcss.configs["recommended-warn"].rules,
        },
        settings: {
            "better-tailwindcss": {
                entryPoint: "app/assets/css/main.css",
            }
        }
    }
]); // Your custom configs here
