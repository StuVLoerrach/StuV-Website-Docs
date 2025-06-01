import { BannerSectionBlock } from "@/banner-section"

export default function PromotionalBannerExample() {
  return (
    <BannerSectionBlock
      variant="variant3"
      title="Limited Time Offer"
      description="Get 50% off on all premium plans. Offer ends soon!"
      ctaText="Claim Offer"
      ctaLink="/pricing"
      dismissible={false}
    />
  )
}
