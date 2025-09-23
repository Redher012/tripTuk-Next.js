import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) {
    return Response.json({ token: null });
  }

  try {
    const decoded = jwt.verify(token, process.env.EMAIL_SECRET);
    return Response.json({ token });
  } catch (err) {
    cookieStore.delete("auth_token");
    return Response.json({ token: null });
  }
}
