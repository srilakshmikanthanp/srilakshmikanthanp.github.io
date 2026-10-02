// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";

export default function Spotlight() {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const onMove = (evt: MouseEvent) => setPosition({ x: evt.clientX, y: evt.clientY });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 hidden lg:block"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(100, 255, 218, 0.06), transparent 80%)`,
      }}
    />
  );
}
