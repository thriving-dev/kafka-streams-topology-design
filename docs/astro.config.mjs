import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://kstd.thriving.dev',
  integrations: [starlight({
    title: 'Kafka Streams Topology Design',
    logo: {
      light: '/src/assets/logo1_M.png',
      dark: '/src/assets/logo1_M.png',
      replacesTitle: false
    },
    social: {
      linkedin: 'https://www.linkedin.com/in/hartmut-co-uk/',
      twitter: 'https://twitter.com/TheThrivingDev',
      github: 'https://github.com/thriving-dev/kafka-streams-topology-design',
    },
    sidebar: [{
      label: 'Guide',
      autogenerate: {
        directory: 'guide'
      }
    }, {
      label: 'Notation',
      autogenerate: {
        directory: 'notation'
      }
    }],
    components: {
      PageFrame: './src/components/overrides/OPageFrame.astro',
      PageTitle: './src/components/overrides/OPageTitle.astro',
      SiteTitle: './src/components/overrides/OSiteTitle.astro',
      SocialIcons: './src/components/overrides/OSocialIcons.astro',
      Footer: './src/components/overrides/OFooter.astro',
      ThemeProvider: './src/components/overrides/OThemeProvider.astro',
      ThemeSelect: './src/components/overrides/OThemeSelect.astro'
    },
    customCss: ['./src/tailwind.css', 'swiper/css', 'swiper/css/navigation', 'swiper/css/pagination', 'medium-zoom/dist/style.css']
  }), tailwind({
    applyBaseStyles: false
  }), icon()],
  image: {
    // Example: Enable the Sharp-based image service with a custom config
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false
      }
    }
  },
  // output: "static",
  output: "hybrid",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
