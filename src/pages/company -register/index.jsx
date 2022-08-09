import undraw_business_shop_re_ruf4 from "../../assets/undraw_business_shop_re_ruf4.svg";
import CompanyRegistration from "../../components/company-registration";
import { Wrapper } from "../login/style";

function CompanyRegisterPage() {
	return (
		<Wrapper>
			<CompanyRegistration />
			<img
				src={undraw_business_shop_re_ruf4}
				alt="imagem da tela de registro de empresa"
			/>
		</Wrapper>
	);
}

export default CompanyRegisterPage;
