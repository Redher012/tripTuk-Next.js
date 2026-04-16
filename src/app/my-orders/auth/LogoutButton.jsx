"use client";

import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } finally {
      router.push("/my-orders");
      router.refresh();
    }
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="inline-flex w-fit whitespace-nowrap items-center justify-center gap-2 bg-white text-amber-800 border border-amber-200 hover:bg-amber-50 px-5 py-2.5 rounded-full font-semibold shadow-sm transition cursor-pointer"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
