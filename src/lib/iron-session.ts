import { SessionOptions } from "iron-session";

export interface SessionData {
  id?: number;
  email?: string;
  password?: string;
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET!,
  cookieName: "Day9",
  cookieOptions: {
    httpOnly: true,
  },
};