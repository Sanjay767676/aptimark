import { Service, ProcessStep, PortfolioProject, Testimonial } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: "web-dev",
    title: "Website Development",
    description: "Bespoke digital architecture optimized for conversion and storytelling. We build with speed and longevity in mind.",
    iconName: "Globe",
    badge: "Most Requested",
    detailedProcess: [
      "Interactive user flows and storyboarding to align with brand essence",
      "SEO-friendly, componentized React framework development",
      "Fluid layout responsive optimizations and dynamic asset pipelines",
      "99+ Core Web Vitals performance tuning and serverless cloud deployment"
    ],
    techStack: ["React 19", "Tailwind v4", "Next.js / Vite", "Cloud Run", "Framer Motion"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYJbR02aCWEfbLOaFRSc_PSneT7wOkMyzDTEnf5g0MtirAE52F01OJjcs_-OJZxdE3QNDJnUaV7CZIpGnRvr6Vw_E7ri0SSKJCfQd69BgE2wIs5Hzfrh4OyQJRGvuAbxM8prTjiwRCmJ8ScLRUDBiPTvYlxjz_rzpr3dCrR8CkcGs4wCu1hYsPklnfg0Igj1irE6BUcu0MZJNI4Eg9oM-5jqA9-BmiWQSoLy7bb8J38Lz4dRDNjvVzU8fKIv1NEysczmifcZtZwUQ",
    estPrice: 8500
  },
  {
    id: "seo",
    title: "SEO Strategy",
    description: "Invisible engineering that ensures your brand finds its voice in the global noise. Data-driven discovery at its finest.",
    iconName: "Search",
    detailedProcess: [
      "Rigorous technical domain crawls & indexability audits",
      "Thematic keyword mapping and semantic markup injection",
      "Premium markdown content hubs built with programmatic structure",
      "Google Search Console, analytics, and schema JSON-LD setup"
    ],
    techStack: ["Screaming Frog", "Google Search Console", "Schema JSON-LD", "Ahrefs Suite"],
    estPrice: 3500
  },
  {
    id: "refactoring",
    title: "Legacy Refactoring",
    description: "Revitalizing aging codebases into modern, performant assets without losing institutional knowledge.",
    iconName: "RefreshCw",
    detailedProcess: [
      "Incremental module-by-module extraction and safety tests",
      "Transition from legacy JavaScript engines to strict TypeScript types",
      "Unlocking instant speed with Vite bundler configurations",
      "Decoupling slow databases and reducing cold-start delays"
    ],
    techStack: ["TypeScript 5.8", "Webpack to Vite Transition", "Jest / Vitest", "ESLint Strict Rules"],
    estPrice: 12000
  },
  {
    id: "app-dev",
    title: "App Development",
    description: "Seamless mobile experiences for iOS and Android.",
    iconName: "Smartphone",
    detailedProcess: [
      "Native fluid-behavior layout modeling",
      "Cross-platform state sync via lightweight offline database states",
      "Security hardening, localized encryption, and biometrics integrations",
      "App Store & Google Play Store release orchestration"
    ],
    techStack: ["React Native", "Expo Core", "iOS Swift Bridges", "Android Kotlin Bridges"],
    image: "", // Minimal clean icon-only structure initially
    estPrice: 15000
  },
  {
    id: "custom-it",
    title: "Custom IT Solutions",
    description: "Tailored technical solutions for unique business challenges.",
    iconName: "Settings",
    detailedProcess: [
      "Custom business workflow automation and telemetry dashboards",
      "Secure private network integrations and serverless cloud clusters",
      "High-output API gateway architectures with multi-client supports",
      "Rigorous automated QA checks and devops CI/CD deployments"
    ],
    techStack: ["Google Cloud Platform", "Docker & Kubernetes", "Node.js / Express", "Firebase Suite", "GitHub Actions"],
    estPrice: 9500
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    id: "discover",
    numberString: "01",
    title: "Discover",
    description: "We peel back the layers to find the core purpose of your digital presence through deep research.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXIludoeCSOEeJ0z4hD2Sfa39HZsBQr2IY3H69jWghkmv0o1E1suhaKcRctCPxnfYfeDk3EhtkgEBNR74uCeSkHXFv0aC2hItYj6xz7NVjAfyH8dAd_YJNTxOt6MD9gv6VVb3E-WbD3FJdZNxdAL5BHFvZeBiSLveFehl0PSIxOety0j65jJqo_jaPKjWnqQIdsMgJq05Zqlb8Zardo6CbiK7o8b5WDy9CpfdYabM5ECQPToCmoEgEYK9uue_OPT4zysEsbFPOOB0",
    detailedNotes: "Every project kicks off with dedicated strategy workshops. We audit your existing stack, understand user frustrations, design detailed performance metrics, and lay down precise goals for code or design success.",
    timeframe: "Week 1"
  },
  {
    id: "design",
    numberString: "02",
    title: "Design",
    description: "Visual storytelling meets functional elegance. We create interfaces that invite touch and exploration.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcDyFMDmgnERaQHg519XnDVcf1MrqSdPvM-4ZfUDEz8UW_rq7r8ekbY1v3ygHWq1HkX7HXzTZ7bzKEoUHFTYz5MPXVqQ8v07mFX721d7FC1ctpgqYihkVlSFScNOa92Msj6MbCLDmbzzWgY1PHL-2EykKeE6L2J7LWklGIILKrltYaQHoHDMxB9otVzGIpVw2JynEZfwWCTTuv28cYXosCY27wcD4AmxuP55P0Rskjs9UQzcBwPFM10EqZfvlItdDeWnjJEhEKgns",
    detailedNotes: "Armed with research, we craft a distinctive visual system: tailored color palettes matching your brand mood, highly cohesive typographic scale, and smooth micro-interaction blueprints. Final high-fidelity interactive mockups guarantee absolute client clarity before code is written.",
    timeframe: "Weeks 2-3"
  },
  {
    id: "build",
    numberString: "03",
    title: "Build",
    description: "Our engineers translate vision into high-performance code, ensuring every interaction is fluid and fast.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD71Ce2yZVOHfDc4N5tulyKWvyT4F8lYdqfLue43IO7S48CRVo4F-E-3EaQcbEKjpcmXeE_9cNROXs4ekcU9c9ctNpPn4yGB4YgdOXJOwkuVv0r02OxLWXS0xlYFZAj5w4aNg8iYY0I_Z8SLgwwZTNHFkd_FQzRlkwfxC42LL-ZOpqGamt01_AokDZ-eHjXOibCS8qKD4PGsiIqFob7h4WTomzXRW50mk5UIJu7TmL-e1qupPP6lWoyn9uHH6dh_ODLHgqmqU0ImrQ",
    detailedNotes: "Writing production-ready, clean, modular TypeScript is where we thrive. We bypass bloating frameworks, building structured components with instant asset loading pipelines and beautiful, hardware-accelerating motion transitions.",
    timeframe: "Weeks 4-6"
  },
  {
    id: "launch",
    numberString: "04",
    title: "Launch",
    description: "Precision deployment followed by continuous monitoring and optimization for long-term growth.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmBAIme3stsvntpL689oNdUhys9EZE-FAiEcc6Jcr4d9rnaOkKI5rP4akuONIgPLZjVMARZY3Z5yuiC7C08A4YtfsDI6Vp1CFIrR-M0cfIXP20DWXJlFHvAMaNGrW0o7CLUGe_lz5DKe1J43HiJlZK0tWs-I675dUrrtpDT8FCL3gr0eRrQd8ldCiTXVnf4gqjS5Ev848Bd_dFhJyLTLLTAlB-EN-I42G-2ZVnqAJ3qQQw6d1__EfusAwp9UpT2fjrHXMPwFfSQH8",
    detailedNotes: "Through surgical cloud configurations, we deploy to fast container distributions. We conduct intensive lighthouse speed runs, link up search console signals, and hand over a clean development roadmap for absolute longevity.",
    timeframe: "Ongoing Integration"
  }
];

export const PORTFOLIO_DATA: PortfolioProject[] = [
  {
    id: "aura-banking",
    title: "Aura Banking",
    subtitle: "Fintech • App Design",
    category: "Fintech • App Design",
    client: "Aura Wealth Corp",
    challenge: "Traditional personal banking and investment channels suffer from data fragmentation, stress-inducing layout noise, and slow loading times. Our mission was to rebuild a high-fidelity wealth management app based on absolute sun-baked minimalism to eliminate budget anxiety.",
    solutions: [
      "Designed a highly reduced client dashboard focusing on liquid capital and active investment routines",
      "Aesthetic layout optimization with 44px minimum target densities for accessible mobile touch feedback",
      "Engineered a lightning-fast data synchronizer with serverless Cloud Run APIs",
      "Introduced micro-motional celebratory triggers for recurring saving habits"
    ],
    outcomes: [
      { label: "Core Web Vitals", value: "99/100" },
      { label: "User Retention", value: "+140%" },
      { label: "Onboarding Time", value: "-60%" },
      { label: "Accessibility Status", value: "AAA Grade" }
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ55QC-INCX--9RIyvcrQ5pIo9AG2-CSEIO_eKGgd6vTB2dH-9Ii9TozP41JUuMyKe_O8L6bGOzOhw7hm6pCs6WJbflGTv3B_TRbHI4KMoPHffGIe_aM_9-hbcCT6CNChd318b85yPQDQJKYuJ_RYablgqvvAV9hZKCosS3xh9D59tOt4qiQMhpoXBGgqOOCjOKIXmHxjDEwVjUaC1P4mYTjR0VcsNXDgCfAqzXtp-NWRN8anK0bFxZymZCXpLLRvDneopWtDzSRQ"
  },
  {
    id: "sol-skin",
    title: "Sol Skin Rituals",
    subtitle: "E-Commerce • Shopify",
    category: "E-Commerce • Shopify",
    client: "Sol Skin Rituals Co.",
    challenge: "Sol Skin Rituals needed to translate their organic physical sensory experience into a gorgeous digital checkout page. They suffered from heavy bounce rates on mobile due to slow page speeds and a generic cart workflow.",
    solutions: [
      "Built a fully custom, lightning-fast headless storefront relying on React 19 architecture",
      "Crafted an interactive skin-matching routine selector integrating smooth motion transitions",
      "Optimized multi-threaded asset serving to bring load times down to sub-half-second speeds",
      "Designed clean checkout steps minimizing input friction to maximize overall transaction volume"
    ],
    outcomes: [
      { label: "Mobile Page Load", value: "0.4 seconds" },
      { label: "Conversion Rate Ratio", value: "+112%" },
      { label: "Average Order Value", value: "+45%" },
      { label: "Active Subscriptions", value: "2.8x Increase" }
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL_IJuZujt6SEq17UkFka8aWOXFQz1FeE-PPokLUW58ErxJpa94uRBq18MSm54VlpdCcZGDD5cCDswpoGYeMIIUymMVrfyc3lrF80IPwrlsN6uG4R1MTzwkwgndLJuF1G3Gv6f4WVzRxkm88VaIQkWOzMdD01Lq1JXudUd7EbdUNdUI47OtjMyxtobGfUQrdsFyr00KfqsptnaoQc3InTRRF4ZFCnBsBTJregzWJWmhARvPMFIIcEO1b5e1NWJILR20aDNfQ1lPoU"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    reviewer: "Elena Rostova",
    company: "Director of Product, Aura Wealth Corp",
    content: "Aptimark completely re-architected our vision. They don't just write functional code; they engineer physical-like sensations on smooth glass. Our retention rates and speed benchmarks surpassed every corporate goal.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop"
  },
  {
    id: "t2",
    reviewer: "Julian Croft",
    company: "Founder, Sol Skin Rituals",
    content: "The aesthetic discipline is outstanding. They listened carefully and transformed a sluggish shop structure into an ultra-premium, tactile web storefront. Mobile conversions literally doubled of our baseline after launch.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&h=120&fit=crop"
  },
  {
    id: "t3",
    reviewer: "Marcus Thorne",
    company: "Operations Lead, Apex Capital",
    content: "Revamping our legacy database and backend API with Aptimark saved us untold compute costs. The system has run without a single hiccup at extreme scale. Highly recommended digital practitioners.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop"
  }
];
