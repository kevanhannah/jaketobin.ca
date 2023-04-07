export const bodyQuery = `
	_type == 'block' => @,
	_type == 'blockCallToAction' => @{
		_type,
		body,
		content[0] {
			_type == "collectionWithImage" => {
				_type,
				collection-> { _type, store { slug { current } } },
				image
			},
			_type == "module.image" => {
				aspectRatio,
				image
			},
			_type == "productWithVariant" => {
				_type,
				product-> { _type, images[0], store { slug { current } } },
				variant-> { store }
			},
		},
		layout,
		links[] {
			_type == "linkInternal" => @ {
				reference-> {
					_type == "collection" => @ {
						_type,
						store {
							slug
						}
					},
					_type == "product" => @ {
						_type,
						store {
							slug
						}
					}
				},
				title
			}
		},
		title
		},
		_type == 'blockImageWithText' => @{
			_type,
			aspectRatio,
			body,
			content[]{
				_type == 'portfolioItem' => @->,
				_type == 'module.image' => @,
			},
			layout,
			link[0] { reference -> { slug { current }, _type }, title },
			title
		},
		_type == 'blockPortfolioGrid' => @{
			_type,
			items[]-> { images[0] },
			link[0] { reference -> { slug { current }, _type }, title }
		},
		_type == 'blockProductGrid' => @{
			_type,
			items[]-> { images[0], store },
			title
		},
	`;
