// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import About from './components/About';
import Profile from './components/Profile';

export default function App() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center lg:gap-24">
      <Profile />
      <div className="lg:flex-1">
        <About />
      </div>
    </main>
  );
}
