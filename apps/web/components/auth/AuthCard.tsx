import React from "react";

export function AuthCard({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="w-full max-w-sm mx-auto p-6 border rounded-xl shadow-sm bg-white">
      <h2 className="text-2xl font-semibold text-center mb-6">{title}</h2>
      {children}
    </div>
  );
}
