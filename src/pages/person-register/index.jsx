import undraw_hologram_re_7ppw from "../../assets/undraw_hologram_re_7ppw.svg";
import PersonRegistration from "../../components/person-registration";

import { Wrapper } from "../login/style.js";

function PersonRegisterPage() {
	return (
		<Wrapper>
			<PersonRegistration />
			<img
				className="img-holograma"
				src={undraw_hologram_re_7ppw}
				alt="imagem da tela registro de pessoas"
			/>
		</Wrapper>
	);
}

export default PersonRegisterPage;
