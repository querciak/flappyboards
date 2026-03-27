"use client";

import DisplayPage from "./display/page";

export default function Home() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "var(--board-bg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background-color 300ms ease",
      }}
    >
      <DisplayPage />
    </div>
  );
}
