import { useMediaQuery } from 'react-responsive';

export function useMediaQueries() {
	const isBigScreen = useMediaQuery({ query: '(min-width: 1025px)' });
	const isSmallScreen = useMediaQuery({ query: '(min-width: 768px)' });
	const isTablet = useMediaQuery({ query: '(min-width: 481px)' });
	const isMobile = useMediaQuery({ query: '(min-width: 320px)' });

	return { isBigScreen, isSmallScreen, isTablet, isMobile };
}
