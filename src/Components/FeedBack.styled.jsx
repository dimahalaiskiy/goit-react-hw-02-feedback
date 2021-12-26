import styled from 'styled-components';

export const Heading = styled.h2`
	font-family: Helvetica;
	font-size: 32px;
`;

export const Container = styled.div`
	width: 600px;
	margin: 0 auto;
`;

export const Button = styled.button`
	width: 56px;
	height: 30px;
	cursor: pointer;
	color: indigo;
	background-color: lightblue;
	margin-right: 10px;
	border: 1px solid pink;
	transition: all 0.5s;
	&:hover {
		background-color: lightgreen;
		box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
	}
`;

export const StatisticItem = styled.p`
	font-size: 16px;
`;
