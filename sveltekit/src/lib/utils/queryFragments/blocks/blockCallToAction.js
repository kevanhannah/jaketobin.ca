import { linkExternal } from '../objects/linkExternal';
import { linkInternal } from '../objects/linkInternal';

export const blockCallToAction = `
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
		links[0] {
			${linkExternal},
			${linkInternal},
		},
		title
	}
`;
