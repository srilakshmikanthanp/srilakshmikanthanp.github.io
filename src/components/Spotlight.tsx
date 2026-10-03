// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";

export default function Spotlight() {
  const [position, setPosition] = React.useState({ x: "50%", y: "50%" });

  React.useEffect(() => {
    const onMove = (evt: MouseEvent) => setPosition({ x: `${evt.clientX}px`, y: `${evt.clientY}px` });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const style = { "--x": position.x, "--y": position.y } as React.CSSProperties;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0" style={style}>
      <div className="spotlight-dots absolute inset-0" />
      <div className="spotlight-glow absolute inset-0 hidden lg:block" />
    </div>
  );
}
