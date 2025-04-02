import React, { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return <main>{children}</main>;
};

export default AdminLayout;
