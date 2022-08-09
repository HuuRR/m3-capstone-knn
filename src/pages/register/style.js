import styled from "styled-components";


export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 3em;

	background-color: #d9d9d9;
	box-shadow: 32px 43px 58px -20px rgba(0, 0, 0, 0.46);
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	
	width: 100%;
	max-width: 90%;
	padding: 2em 1em;

	@media (min-width: 490px) {
		padding: 3em 2em;
		max-width: 70%;
	}

	.header-container {
		display: flex;
		justify-content: center;
		align-items: center;

		text-align: center;
	}

	.text-container {
		display: flex;
		justify-content: space-evenly;
		align-items: flex-start;
		flex-direction: column;
		gap: 2em;
		@media (min-width: 800px) {
			flex-direction: row;
		}
	}

	.text-container--content {
		display: flex;
		flex-direction: column;
		gap: 2em;
		justify-content: space-between;

		min-height: 300px;
		border-radius: 5px;
		background-color: #39125e;

		color: white;

		padding: 2em;

		button {
			font-size: 0.8rem;
			padding: 0.5em;

			background-color: #6f73e3;
			transition: ease-in-out 200ms;

			@media (min-width: 490px) {
				padding: 1em;
				font-size: 1rem;
			}
		}
		button:hover {
			filter: brightness(0.8);
		}
	}

	.text-content {
		h4 {
			font-size: 1.2rem;

			background-color: #d9d9d9;
			color: #39125e;

			padding: 0.5em;
			margin-bottom: 1em;
			border-radius: 5px;
		}
	}
	.list-container {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
		margin-left: 1em;

		cursor: default;
		li {
			transform: translateX(-0.75em);
			transition: transform 200ms;
		}

		li::before {
			content: "#";
			display: inline-block;
			width: 0.75em;

			color: #888888;

			opacity: 0;
			transition: opacity 200ms;
		}

		li:hover {
			transform: none;
		}
		li:hover::before {
			opacity: 1;
		}
	}
`;

export const Title = styled.h1`
	color: #2a2fde;

	font-size: 1.5rem;
	font-weight: bold;
	text-align: center;

	margin: 0 auto 2%;

	text-transform: uppercase;
	@media (min-width: 1024px) {
		font-size: 1.8rem;
	}
`;

export const Subtitle = styled.h2`
	font-size: 1rem;
	font-weight: bold;

	@media (min-width: 1024px) {
		font-size: 1.3rem;
	}
`;
