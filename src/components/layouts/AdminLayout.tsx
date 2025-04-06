"use client";

import { ReactNode } from "react";

import { useMount } from "@/hooks/useMount";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const mount = useMount();

  if (!mount) return;

  return <main>{children}</main>;
};

export default AdminLayout;
