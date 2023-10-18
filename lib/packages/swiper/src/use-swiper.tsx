import React, { createContext, useContext } from 'react';

export const swiperContext = createContext<{
	swiperRef: React.MutableRefObject<any> | undefined;
	length: number;
	activeIndex: number;
	setActiveIndex: (_index: number) => void;
}>({
	swiperRef: undefined,
	length: 0,
	activeIndex: 0,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	setActiveIndex: (_index: number) => {},
});

export const useSwiper = () => {
	const context = useContext(swiperContext);

	if (context === undefined) {
		throw new Error('useSwiper must be used within a SwiperProvider');
	}

	const { swiperRef, length, activeIndex, setActiveIndex } = context;

	const slideTo = (index: number) => {
		swiperRef?.current?.swiper.slideTo(index);
	};

	return {
		length,
		swiperRef,
		slideTo,
		activeIndex,
		setActiveIndex,
	};
};

export default useSwiper;
