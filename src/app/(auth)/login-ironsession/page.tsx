import { getSession } from "../../../lib/actions";
import Login from "../../../components/loginForm/Login"
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await getSession();

  if (session.isLoggedIn) {
    redirect("/home");
  }

  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;