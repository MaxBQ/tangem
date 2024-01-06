import { forwardRef, useCallback } from 'react';

import { classNames } from '../../lib/classNames/classNames.ts';
import { Text } from '../Text';
import { Button } from '../Button';

import CloseSVG from '../../assets/Close.svg?react';
import MenuIconSVG from '../../assets/menuIcon.svg?react';
import useWindowSize from '../../hooks/useWindowSize.tsx';
import cls from './index.module.scss';

import { AlignText, SizeText, ThemeText, WeightText } from '../Text/enums';
import { SizeButton, ThemeButton } from '../Button/enums';
import { ThemeBanner } from './enums';
import type { BannerProps } from './types';

export const Banner = forwardRef((props: BannerProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const {
    theme,
    className,
    image,
    bannerNameText,
    bannerNameTextSecondary,
    discountText,
    firstPromoCodeText,
    promoCodeText,
    lastPromoCodeText,
    dataTestId,
    onClosedBanner,
  } = props;

  const windowSize = useWindowSize();

  const onClickHandler = useCallback(() => {
    if (onClosedBanner) {
      onClosedBanner();
    }
  }, [onClosedBanner]);

  if (theme === ThemeBanner.TOP) {
    return (
      <div
        data-testid={dataTestId}
        className={classNames(cls.banner, {}, [cls.top, className])}
        ref={ref}
      >
        <div className={cls.imgWrapper}>
          <img src={image} alt="gift_header" />
        </div>
        <div className={cls.textWrapper}>
          <div className={cls.nameWrapper}>
            {bannerNameText ? (
              <Text
                weight={WeightText.SEMIBOLD}
                text={windowSize > 393 && windowSize < 834 ? bannerNameText : `${bannerNameText},`}
              />
            ) : null}
            &nbsp;
            {bannerNameTextSecondary && windowSize > 834 ? (
              <Text text={bannerNameTextSecondary} />
            ) : null}
          </div>
          {discountText ? (
            <Text weight={WeightText.SEMIBOLD} text={discountText} theme={ThemeText.GOLD} />
          ) : null}
          <span className={cls.promoCodeWrapper}>
            {firstPromoCodeText ? <Text text={firstPromoCodeText} /> : null}
            &nbsp;
            {promoCodeText ? (
              <Text weight={WeightText.SEMIBOLD} text={promoCodeText} theme={ThemeText.GOLD} />
            ) : null}
            &nbsp;
            {lastPromoCodeText && windowSize > 834 ? <Text text={lastPromoCodeText} /> : null}
          </span>
        </div>
        <div className={cls.buttonsWrapper}>
          {windowSize > 680 ? (
            <>
              <Button theme={ThemeButton.WHITE} size={SizeButton.SIZE_M}>
                <Text
                  weight={WeightText.SEMIBOLD}
                  text="Shop now"
                  theme={ThemeText.BLACK_GRADIENT}
                  align={AlignText.CENTER}
                />
              </Button>
              {windowSize > 834 && (
                <Button>
                  <CloseSVG fill="white" />
                </Button>
              )}
            </>
          ) : (
            <Button>
              <MenuIconSVG fill="white" />
            </Button>
          )}
        </div>
      </div>
    );
  }

  if (theme === ThemeBanner.BOTTOM) {
    return (
      <div
        data-testid={dataTestId}
        className={classNames(cls.banner, {}, [cls.bottom, className])}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={cls.wrapperItems}>
          <div className={cls.wrapperContent}>
            {bannerNameText ? (
              <Text
                weight={WeightText.MEDIUM}
                className={cls.itemTitle}
                size={SizeText.SIZE_XL}
                text={bannerNameText}
              />
            ) : null}
            {discountText ? (
              <Text
                weight={WeightText.MEDIUM}
                className={cls.itemDiscount}
                size={SizeText.SIZE_L}
                text={discountText}
                theme={ThemeText.GOLD_GRADIENT}
              />
            ) : null}
            <span className={cls.promoCodeWrapper}>
              {firstPromoCodeText ? (
                <Text weight={WeightText.MEDIUM} text={firstPromoCodeText} />
              ) : null}
              &nbsp;
              {promoCodeText ? (
                <Text weight={WeightText.MEDIUM} text={promoCodeText} theme={ThemeText.GOLD} />
              ) : null}
              &nbsp;
              {lastPromoCodeText ? (
                <Text weight={WeightText.MEDIUM} text={lastPromoCodeText} />
              ) : null}
            </span>
            <Button theme={ThemeButton.TRANSPARENT} size={SizeButton.SIZE_L}>
              <Text
                weight={WeightText.MEDIUM}
                text={windowSize && windowSize > 393 ? 'Shop now through Monday' : 'Shop now'}
                align={AlignText.CENTER}
              />
            </Button>
          </div>
        </div>
        <Button className={cls.buttonClose} onClick={onClickHandler}>
          <CloseSVG fill="white" />
        </Button>
      </div>
    );
  }
});
