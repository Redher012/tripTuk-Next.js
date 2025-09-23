"use client";

import { useEffect } from "react";

const SetCookieClient = ({ token }) => {
  useEffect(() => {
    fetch("/api/auth/set-cookie", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ token }),
    }).then((res) => {
      console.log("Cookie set response status:", res.status);
    });
  }, [token]);
  return null;
};

export default SetCookieClient;
