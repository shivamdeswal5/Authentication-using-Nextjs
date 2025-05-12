import { logout } from "../../lib/actions";
import { Button } from "@mui/material";
export default function LogoutForm() {
  return (
    <form action={logout}>
      <Button type="submit">Logout</Button>
    </form>
  );
}
