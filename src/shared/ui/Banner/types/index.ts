import { ThemeBanner } from '../enums';

export interface BannerProps {
  theme: ThemeBanner;
  className?: string;
  image?: string;
  bannerNameText?: string;
  bannerNameTextSecondary?: string;
  discountText?: string;
  firstPromoCodeText?: string;
  promoCodeText?: string;
  lastPromoCodeText?: string;
  dataTestId?: string;
  onClosedBanner?: () => void;
}
