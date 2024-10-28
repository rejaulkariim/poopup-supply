"use server";

import { auth, signIn, signOut } from "@/lib/auth";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const login = async (provider: string) => {
  await signIn(provider, { redirectTo: "/user/dashboard" });
  revalidatePath("/dashboard");
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
  revalidatePath("/");
};

export async function getUserFromDB() {
  const session = await auth();
  if (!session) {
    return null;
  }

  const user = await db.user.findUnique({
    where: { email: session?.user?.email || "" },
  });

  return user;
}
