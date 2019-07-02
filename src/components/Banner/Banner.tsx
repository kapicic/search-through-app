import React, { FC } from 'react'

import BE from '../../style/elements'; // BE = base elements
import BS from './BannerStyle'; // BS = banner style
import Search from '../Search/Search';

const Banner: FC<any> = () => {
	return (
		<BS.BannerWrapper>
			<BE.Container>
				<BS.BannerTitle>Search through app</BS.BannerTitle>
				<Search />
			</BE.Container>
		</BS.BannerWrapper>
	)
}

export default Banner;
