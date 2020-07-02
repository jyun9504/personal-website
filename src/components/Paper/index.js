import React from 'react';

const Paper = (props) => {
	return (
		<div className="paper u-container-width u-margin-bottom-medium">
			{ props.children }
		</div>
	)
}

export default Paper;