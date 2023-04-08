export const bodyQuery = `
	_type == 'block' => {
		_key,
		_type,
		children,
		markDefs[] {
			_type == "annotationLinkInternal" => {
				_key,
				_type,
				reference->
			},
			_type != "annotationLinkInternal" => @
		},
		style
	},
	_type == 'blockCallToAction' => {
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
			_type == "linkInternal" => {
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
					}
				},
				title
			}
		},
		title
		},
		_type == 'blockImageWithText' => {
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
		_type == "blockPortfolioArtwork" => {
			_type,
			portfolioArtwork-> {
				body,
				images,
				title
			}
		},
		_type == 'blockGrid' => {
			_type,
			items[]-> {
				_type == "portfolioItem" => { _type, images[0] },
				_type == "product" => { _type, images[0], store }
			},
			link[0] { reference -> { slug { current }, _type }, title },
			title
		},
		_type == 'blockProductGrid' => {
			_type,
			items[]-> { images[0], store },
			title
		},
		_type == "blockPortfolioPublications" => {
			_type,
			publications[]-> {
				description,
				title,
				titleLink
			}
		}
	`;
