import { useMemo, useRef, useState } from 'react';
import { swiperContext } from './use-swiper';

interface ISwiperProviderProps {
	children: React.ReactNode;
	length: number;
}

export const SwiperProvider = ({ children, length }: ISwiperProviderProps) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const swiperRef = useRef(null);

	const value = useMemo(
		() => ({
			swiperRef,
			length,
			activeIndex,
			setActiveIndex,
		}),
		[swiperRef, length, activeIndex]
	);

	return (
		<swiperContext.Provider value={value}>{children}</swiperContext.Provider>
	);
};
