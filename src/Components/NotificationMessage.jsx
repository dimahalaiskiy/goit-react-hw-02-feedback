import React from 'react';
import PropTypes from 'prop-types';
import { StatisticItem } from './FeedBack.styled';

const NotificationMessage = ({ message }) => {
	return <StatisticItem>{message}</StatisticItem>;
};

NotificationMessage.propTypes = {
	message: PropTypes.string.isRequired,
};

export default NotificationMessage;
