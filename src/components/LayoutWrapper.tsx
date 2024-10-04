"use client";
import React from "react";
import auth from "../../hoc/auth";

const LayoutWrapper = ({ children }: any) => {
  return <>{children}</>;
};

export default auth(LayoutWrapper);
