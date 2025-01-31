import { Cookies } from "react-cookie";

const cookies = new Cookies();

type CookieSetOptions = {
  path?: string;
  expires?: Date;
  maxAge?: number;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: "strict" | "lax" | "none";
};

type CookieRemoveOptions = {
  path?: string;
  domain?: string;
};

export const setCookie = (name: string, value: string, options?: CookieSetOptions) => {
  cookies.set(name, value, { ...options });
};

export const getCookie = (name: string): string | undefined => {
  return cookies.get(name);
};

export const removeCookie = (name: string, options?: CookieRemoveOptions) => {
  cookies.remove(name, { ...options });
};
