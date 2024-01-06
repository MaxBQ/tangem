import { Banner } from '@/shared/ui/Banner';
import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useObserver } from '@/shared/hooks/useObserver.tsx';
import giftTop from '@/shared/assets/giftHeader.png';
import giftBottom from '@/shared/assets/gift.png';
import cls from './BannerWatcher.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { ThemeBanner } from '@/shared/ui/Banner/enums';
interface BannerWatcherProps {
  children?: ReactNode;
}

export const BannerWatcher = (props: BannerWatcherProps) => {
  const { children } = props;
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [isMount, setIsMount] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeRef = useRef<ReturnType<typeof setTimeout>>();
  const { isVisible } = useObserver(ref);
  const closedBanner = localStorage.getItem('bannerBottom');
  const cbm = useMemo(() => closedBanner, [closedBanner]);

  const onShowCloseBannerBottom = useCallback(() => {
    if (!isVisible) {
      setIsMount(!isVisible);
    }
    if (isVisible) {
      setShowBanner(!isVisible);
    }
    timeRef.current = setTimeout(() => {
      if (!isVisible) {
        setShowBanner(!isVisible);
      }
    }, 50);
    timeRef.current = setTimeout(() => {
      if (isVisible) {
        setIsMount(!isVisible);
      }
    }, 700);
  }, [isVisible]);

  const onCloseClick = useCallback(() => {
    setShowBanner(false);
    timeRef.current = setTimeout(() => {
      localStorage.setItem('bannerBottom', 'false');
      setIsMount(false);
    }, 700);
  }, []);

  useEffect(() => {
    if (isVisible !== null && !cbm) {
      onShowCloseBannerBottom();
    }
    return () => {
      clearTimeout(timeRef.current);
    };
  }, [isVisible, onShowCloseBannerBottom, cbm]);

  return (
    <>
      <Banner
        dataTestId="banner_top"
        theme={ThemeBanner.TOP}
        ref={ref}
        image={giftTop}
        bannerNameText="Black Friday"
        bannerNameTextSecondary="24-27 Nov"
        discountText="10%OFF"
        firstPromoCodeText="Use code"
        promoCodeText="10FRIDAY"
        lastPromoCodeText="at checkout"
      />
      {children}
      {isMount && (
        <div className={classNames(cls.bannerFixed, { [cls.show]: showBanner }, [])}>
          <Banner
            dataTestId="banner_bottom"
            theme={ThemeBanner.BOTTOM}
            image={giftBottom}
            bannerNameText="Black Friday"
            discountText="10%OFF"
            firstPromoCodeText="Use code"
            promoCodeText="10FRIDAY"
            lastPromoCodeText="at checkout"
            onClosedBanner={onCloseClick}
          />
        </div>
      )}
    </>
  );
};
