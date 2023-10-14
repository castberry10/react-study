import AuthTemplate from "../components/auth/AuthTemplate";
import AuthForm from "../components/auth/AuthFrom";


const RegisterPage = () => {
	return (
	<AuthTemplate>
		<AuthForm type="register"></AuthForm>
	</AuthTemplate>);
}

export default RegisterPage;