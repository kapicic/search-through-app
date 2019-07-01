import React, { FC } from 'react'

import BE from '../../style/elements'; // BE = base elements
import BS from './BannerStyle'; // BS = banner style

const Banner: FC = () => {
	return (
		<BS.BannerWrapper>
			<BE.Container>
				<h1>Aloha banner</h1>
				<p>This is a search form placeholder</p>
			</BE.Container>
		</BS.BannerWrapper>
	)
}

export default Banner;
