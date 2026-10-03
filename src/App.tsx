// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Profile from "./components/Profile";
import About from "./components/About";
import Footer from "./components/Footer";
import Spotlight from "./components/Spotlight";

export default function App() {
  return (
    <>
      <Spotlight />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:min-h-screen lg:flex-row lg:items-center lg:gap-24">
        <Profile />
        <main className="lg:flex-1">
          <About />
          <Footer className="mt-12 lg:hidden" />
        </main>
      </div>
    </>
  );
}
