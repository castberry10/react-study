import AuthTemplate from "../components/auth/AuthTemplate";
import AuthForm from "../components/auth/AuthFrom";

const LoginPage = () => {
	return (
		<AuthTemplate>
			<AuthForm type="login"></AuthForm>
		</AuthTemplate>
	);
}

export default LoginPage;