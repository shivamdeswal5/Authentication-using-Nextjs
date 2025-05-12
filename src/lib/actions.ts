'use server'
import { SessionData } from "./iron-session";
import { defaultSession, sessionOptions } from "./iron-session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";



//to decrypt the session
export async function getSession() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
}

export async function logout() {
  const session = await getSession();
  session.destroy();
  redirect("/login-ironsession");
}


export async function login(
  prevState:{error:undefined | string},
  formData: FormData
) {
  const session = await getSession();

  const formEmail = formData.get("username") as string;
  const formPassword = formData.get("password") as string;

  //   const User = {
  //   id: 1,
  //   email: "shivam@gmail.com",
  //   password: "shivam", 
  // };

  // if (formEmail !== User.email || formPassword !== User.password) {
  //   return { error: "Wrong Credentials!" };
  // }
  
  const User = {
    id:1,
    email:formEmail,
    img:"avatar.png"
  }

  if(!User){
    return { error: "Wrong Credentials!" }
  }

  session.isLoggedIn = true;
  session.id = User.id;
  session.email = User.email;

  await session.save();
  redirect("/home")
}