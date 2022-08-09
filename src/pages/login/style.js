import styled from "styled-components";

export const Wrapper = styled.div`
	margin-top: 5%;

	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2em;

	@media (max-width: 960px) {
		flex-direction: column;
	}

	@media (max-width: 390px) {
		width: 100%;
	}
	img{
		width: 70%;

		@media (min-width: 960px) {
			width: 40%;
		}
	}
`;
