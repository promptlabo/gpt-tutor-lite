import React from "react";

export const Card = ({ children, ...props }) => (
  <div className="bg-white p-4 rounded shadow" {...props}>
    {children}
  </div>
);

export const CardContent = ({ children }) => (
  <div className="mt-2">{children}</div>
);
