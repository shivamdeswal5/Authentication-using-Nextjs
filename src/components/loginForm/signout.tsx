import { logout } from "../../lib/actions";
import { Button } from "@mui/material";
export default function LogoutForm() {
  return (
    <form action={logout}>
      <Button>Logout</Button>
    </form>
  );
}
