import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import LogoutButton from "../../components/loginForm/Logout";

export default async function DashboardPage() {
  const session:any = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <h1>Welcome {session.user.email}</h1>
      <LogoutButton />
    </div>
  );
}
