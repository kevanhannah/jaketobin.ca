export const block = `
	_type == 'block' => {
		_key,
		_type,
		children,
		level,
		listItem,
		markDefs[] {
			_type == "annotationLinkInternal" => {
				_key,
				_type,
				reference->
			},
			_type != "annotationLinkInternal" => @
		},
		style
	}
`;
