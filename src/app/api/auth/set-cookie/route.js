import { cookies } from "next/headers";

export async function POST(req) {
  const { token } = await req.json();
  const cookieStore = await cookies();

  cookieStore.set("auth_token", token, {
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 15,
  });

  return new Response("Cookie Set", { status: 200 });
}
