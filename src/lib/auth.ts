import { cookies } from "next/headers";

export function isAuthenticated(): boolean {
  const cookieStore = cookies();
  return cookieStore.get("admin_auth")?.value === "1";
}
