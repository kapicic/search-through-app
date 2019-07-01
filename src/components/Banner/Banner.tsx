import React, { FC } from 'react'

import BE from '../../style/elements'; // BE = base elements
import BS from './BannerStyle'; // BS = banner style

const Banner: FC = () => {
	return (
		<BS.BannerWrapper>
			<BE.Container>
				<BS.BannerTitle>Search through app</BS.BannerTitle>
				<p>This is a search form placeholder</p>
			</BE.Container>
		</BS.BannerWrapper>
	)
}

export default Banner;
