import React from 'react';
import PropTypes from 'prop-types';
import NotificationMessage from '../NotificationMessage';
import { StatisticItem } from '../FeedBack.styled';

const Statistics = ({ statistics: { good, neutral, bad }, total, positiveFeedBack }) => {
	return (
		<>
			<div>
				{total() ? (
					<>
						<StatisticItem>Good: {good}</StatisticItem>
						<StatisticItem>Neutral: {neutral}</StatisticItem>
						<StatisticItem>Bad: {bad}</StatisticItem>
						<StatisticItem>Total: {total()}</StatisticItem>
						<StatisticItem>
							Positive FeedBack: {positiveFeedBack() ? positiveFeedBack() : 0}%
						</StatisticItem>
					</>
				) : (
					<NotificationMessage message='No feedback given' />
				)}
			</div>
		</>
	);
};

Statistics.propTypes = {
	statistics: PropTypes.shape({
		good: PropTypes.number.isRequired,
		neutral: PropTypes.number.isRequired,
		bad: PropTypes.number.isRequired,
	}),
	total: PropTypes.func.isRequired,
	positiveFeedBack: PropTypes.func.isRequired,
};

export default Statistics;
