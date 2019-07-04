interface UserContent {
	nid: [{
			value: number
	}],
	title: [{
		value: string
	}],
	body?: [{
		value: string,
		format: string,
		processed: string,
		summary: string,
	}] 
	field_image?: [{
		target_id: number,
		alt: string,
		title: string,
		width: number,
		height: number,
		target_type: string,
		target_uuid: string,
		url: string
	}]
}

export default UserContent;
