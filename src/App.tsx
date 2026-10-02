// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Footer from "./components/Footer";
import Spotlight from "./components/Spotlight";

export default function App() {
  return (
    <>
      <Spotlight />
      <div className="relative mx-auto max-w-screen-xl px-6 md:px-12 lg:flex lg:min-h-screen lg:items-center lg:justify-between lg:gap-4 lg:px-24">
        <Sidebar />
        <main className="flex flex-col gap-16 lg:w-1/2 lg:py-24">
          <About />
          <Footer />
        </main>
      </div>
    </>
  );
}
