import { BannerSectionBlock } from "@/banner-section"

export default function BasicBannerExample() {
  return (
    <BannerSectionBlock
      variant="variant1"
      title="Important Announcement"
      description="We have some exciting news to share with you!"
      dismissible={true}
    />
  )
}
