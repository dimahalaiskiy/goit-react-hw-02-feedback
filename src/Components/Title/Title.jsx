import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../FeedBack.styled';

const Title = ({ title, children }) => {
	return (
		<>
			<Heading>{title}</Heading>
			{children}
		</>
	);
};

Title.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Title;
