"use server";

import bcrypt from "bcryptjs";
import { TLoginParams } from "./shared.types";
import { cookies } from "next/headers";

export async function setCookies(data: string) {
  const cookieStore = await cookies();
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  cookieStore.set({
    name: "accessToken",
    value: data,
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    expires,
  });
}

export async function getSession() {
  const toBeTokened = "admin-auth" + "vannilooks@gmail.com" + "admin-login";
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  console.log(accessToken, "accessToken");
  if (accessToken === undefined || accessToken === null || accessToken === "") {
    return false;
  } else {
    const isMatch = await compareBcrypt(toBeTokened, accessToken);
    console.log(isMatch, "isMatch");
    return isMatch;
  }
}

export async function validateLoginAction(params: TLoginParams) {
  try {
    const defaultPassword = "Admin@VN@321";
    const defaultEmail = "vannilooks@gmail.com";

    const { email, password } = params;

    if (email !== defaultEmail && password !== defaultPassword) {
      return {
        status: "400",
        message: "Invalid credentials",
      };
    } else if (email !== defaultEmail) {
      return {
        status: "400",
        message: "Invalid email",
      };
    } else if (password !== defaultPassword) {
      return {
        status: "400",
        message: "Invalid password",
      };
    } else if (password === defaultPassword) {
      const toBeTokened = "admin-auth" + defaultEmail + "admin-login";

      const hash = await bcrypt.hash(toBeTokened, 10);

      const cookieStore = await setCookies(hash);
      return {
        status: "200",
        message: "You have successfully logged in",
        data: JSON.stringify(cookieStore),
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: "500",
      message: "Something went wrong, please try again",
    };
  }
}

export async function compareBcrypt(toBeTokened: string, hash: string) {
  const isMatch = await bcrypt.compare(toBeTokened, hash);
  console.log(isMatch, "isMatch-compare");
  try {
    return isMatch;
  } catch (error) {
    console.log(error);
    return false;
  }
}
