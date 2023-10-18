import { Children, FC, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { SwiperEvents } from 'swiper/types';
import useSwiper from './use-swiper';
import { SwiperSlide } from 'swiper/react';

register();

const Bullet = ({
	isActive,
	onClick,
}: {
	isActive: boolean;
	onClick: () => void;
}) => (
	<div
		style={{
			width: '16px',
			height: '16px',
			backgroundColor: isActive ? 'red' : 'blue',
			borderRadius: '50%',
			cursor: 'pointer',
		}}
		onClick={onClick}
		onKeyDown={onClick}
		role='presentation'
	/>
);

interface ISwiperProps {
	children: React.ReactNode;
	CustomBulletComponent?: FC<{
		isActive?: boolean;
		onClick?: () => void;
	}>;
	bulletContainerProps?: React.HTMLAttributes<HTMLDivElement>;
	slidesPerView?: number | 'auto';
	slidesGap?: `${number}px`;
	freeMode?: boolean;
	height?: string;
	onSliderMove?: (swiper: SwiperEvents, event: any) => void;
	noBullets?: boolean;
	centerInsufficientSlides?: boolean;
}

export const Swiper = ({
	children,
	CustomBulletComponent,
	bulletContainerProps,
	slidesPerView,
	slidesGap,
	freeMode,
	height,
	onSliderMove,
	noBullets,
	centerInsufficientSlides,
}: ISwiperProps) => {
	const { swiperRef, activeIndex, setActiveIndex, slideTo } = useSwiper();

	const childrenArr = Children.toArray(children);

	useEffect(() => {
		const swiper = swiperRef?.current?.swiper;

		if (swiper) {
			swiper.on('slideChange', () => {
				setActiveIndex(swiper.activeIndex);
			});

			swiper.on('sliderMove', onSliderMove);
		}
	}, [onSliderMove, swiperRef, setActiveIndex]);

	return (
		<div
			style={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<swiper-container
				ref={swiperRef}
				slides-per-view={slidesPerView}
				space-between={slidesGap}
				center-insufficient-slides={centerInsufficientSlides}
				free-mode={freeMode}
				style={{ height, width: '100%' }}
			>
				{children}
			</swiper-container>

			{!noBullets && childrenArr.length > 1 && (
				<div
					{...bulletContainerProps}
					style={{
						display: 'flex',
						justifyContent: 'center',
						gap: '16px',
						...(bulletContainerProps?.style || {}),
					}}
				>
					{childrenArr.map(
						(_, i) =>
							CustomBulletComponent && (
								<CustomBulletComponent
									key={i}
									isActive={i === activeIndex}
									onClick={() => slideTo(i)}
								/>
							)
					)}
				</div>
			)}
		</div>
	);
};

Swiper.defaultProps = {
	CustomBulletComponent: Bullet,
	bulletContainerProps: {},
	slidesPerView: 'auto',
	slidesGap: '16px',
	freeMode: false,
	height: '500px',
	onSliderMove: () => {},
	noBullets: false,
	centerInsufficientSlides: true,
};

Swiper.Slide = SwiperSlide;
