"use client";

import React from "react";
import { useEffect } from "react";

import { redirect, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function LoginPage(){
  const { data: session, status } = useSession();
  const callbackUrl = useSearchParams().get("callbackUrl") || "/";
  
  useEffect(() => {
    // ログイン済みの場合はTOPページにリダイレクト
    if (status === "authenticated") {
      redirect("/");
    }
  }, [session, status]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form className="w-full max-w-xs space-y-6 rounded bg-white p-8 shadow-md">
        <button
          onClick={()=>{signIn("google", { callbackUrl }); }}
          type="button"
          className="w-full bg-red-500 text-white rounded-lg px-4 py-2"
        >
          Googleでログイン
        </button>
        <button
          onClick={()=>{signIn("twitter",{ callbackUrl })}}
          type="button"
          className="w-full bg-blue-500 text-white rounded-lg px-4 py-2"
        >
          Twitterでログイン
        </button>
      </form>
    </div>
  );
};

