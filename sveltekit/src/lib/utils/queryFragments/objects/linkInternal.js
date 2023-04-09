export const linkInternal = `
	_type == "linkInternal" => {
		_type,
		reference-> {
			_type == "collection" => {
				_type,
				store {
					slug
				}
			},
			_type == "product" => {
				_type,
				store {
					slug
				}
			},
			_type != "collection" && _type != "product" => {
				_type,
				slug {
					current
				}
			}
		},
		title
	}
`;
