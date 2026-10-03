// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export default function Footer({ className = "" }: { className?: string }) {
  return (
    <footer className={`text-sm text-slate ${className}`}>
      Design inspired by{" "}
      <a
        href="https://brittanychiang.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-lightest hover:text-accent"
      >
        Brittany Chiang
      </a>
      .
    </footer>
  );
}
