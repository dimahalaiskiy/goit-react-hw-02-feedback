import React from 'react';
import { Button } from '../FeedBack.styled';
import PropTypes from 'prop-types';

const FeedBackOptions = ({ goodIncrease, neutralIncrease, badIncrease }) => {
	return (
		<>
			<Button onClick={goodIncrease}>Good</Button>
			<Button onClick={neutralIncrease}>Neutral</Button>
			<Button onClick={badIncrease}>Bad</Button>
		</>
	);
};

FeedBackOptions.propTypes = {
	goodIncrease: PropTypes.func.isRequired,
	neutralIncrease: PropTypes.func.isRequired,
	badIncrease: PropTypes.func.isRequired,
};

export default FeedBackOptions;
