"use client";
import Router from "next/navigation";

export default function routerPush(path) {
  if (typeof window !== "undefined") {
    if (path === "") {
      Router.push("/");
    } else {
      Router.push(path);
    }
  }
};