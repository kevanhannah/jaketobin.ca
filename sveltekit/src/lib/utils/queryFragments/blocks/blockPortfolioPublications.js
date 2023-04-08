export const blockPortfolioPublications = `
	_type == "blockPortfolioPublications" => {
		_type,
		publications[]-> {
			description,
			title,
			titleLink
		}
	}
`;
