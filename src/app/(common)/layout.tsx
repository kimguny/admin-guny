import Layout from "@/components/Layout";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  // Header, Sidebar가 있는 레이아웃으로 한번 더 감쌈
  return <Layout>{children}</Layout>;
}
