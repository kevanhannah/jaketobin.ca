export const blockGrid = `
	_type == 'blockGrid' => {
		_type,
		items[]-> {
			_type == "portfolioItem" => { _type, images[0] },
			_type == "product" => { _type, images[0], store }
		},
		link[0] { reference -> { slug { current }, _type }, title },
		title
	}
`;
