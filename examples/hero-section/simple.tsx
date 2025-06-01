import { HeroSectionBlock } from "@/hero-section"

export default function SimpleHeroExample() {
  return (
    <HeroSectionBlock
      variant="variant1"
      title="Welcome to Our Platform"
      subtitle="Build amazing websites with our powerful page builder components"
      ctaButtons={[
        {
          text: "Get Started",
          link: "/signup",
          variant: "primary",
        },
        {
          text: "Learn More",
          link: "/docs",
          variant: "secondary",
        },
      ]}
    />
  )
}
