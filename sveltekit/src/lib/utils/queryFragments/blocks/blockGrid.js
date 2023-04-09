import { linkExternal } from '../objects/linkExternal';
import { linkInternal } from '../objects/linkInternal';

export const blockGrid = `
	_type == 'blockGrid' => {
		_type,
		items[]-> {
			_type == "portfolioItem" => { _type, images[0] },
			_type == "product" => { _type, images[0], store }
		},
		link[0] { 
			${linkExternal},
			${linkInternal},
		 },
		title
	}
`;
