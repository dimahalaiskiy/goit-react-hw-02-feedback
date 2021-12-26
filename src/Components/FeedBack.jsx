import React, { Component } from 'react';
import { Container } from './FeedBack.styled';
import Statistics from './Statistics';
import Title from './Title';
import FeedBackOptions from './FeedBackOptions';

class FeedBack extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	countTotalFeedBack = () => {
		return this.state.good + this.state.neutral + this.state.bad;
	};

	countPositiveFeedbackPercentage = () => {
		return Math.ceil(100 / ((this.state.good + this.state.bad) / this.state.good));
	};

	handleGoodIncrease = () => {
		this.setState((prevState) => {
			return { good: prevState.good + 1 };
		});
	};
	handleNeutralIncrease = () => {
		this.setState((prevState) => {
			return { neutral: prevState.neutral + 1 };
		});
	};
	handleBadIncrease = () => {
		this.setState((prevState) => {
			return { bad: prevState.bad + 1 };
		});
	};

	render() {
		return (
			<Container>
				<Title title='Please Leave a feedback!'>
					<FeedBackOptions
						goodIncrease={this.handleGoodIncrease}
						neutralIncrease={this.handleNeutralIncrease}
						badIncrease={this.handleBadIncrease}></FeedBackOptions>
				</Title>
				<Title title='Statistics'>
					<Statistics
						statistics={this.state}
						total={this.countTotalFeedBack}
						positiveFeedBack={this.countPositiveFeedbackPercentage}
					/>
				</Title>
			</Container>
		);
	}
}

export default FeedBack;
