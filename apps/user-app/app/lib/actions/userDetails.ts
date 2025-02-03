"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";

export const getUserId = async () => {
  const session = await getServerSession(authOptions);
  return Number(session.user.id);
};
