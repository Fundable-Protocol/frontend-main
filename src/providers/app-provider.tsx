"use client";

import React, { ReactNode } from "react";

import { StarknetProvider } from "./starknet-provider";

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <StarknetProvider>{children}</StarknetProvider>
    </>
  );
};

export default AppProvider;
