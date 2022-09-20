// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { getFeather } from "../utilities/functions";
import me from "../assets/images/logo.png";
import styled from 'styled-components';
import React from "react";

const Navigation = styled.div`
  background-color: rgb(var(--pri-bg-color), 0.4);
  color: rgb(var(--pri-fg-color));
  padding: 20px;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
`;

const Logo = styled.img`
  border-radius: 20px;
  height: 30px;
  width: 30px;
  margin-right: auto;
  cursor: pointer;
`;

const Menu = styled.img`
  background-color: rgb(var(--pri-bg-color));
  color: rgb(var(--pri-fg-color));

  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 768px) {
    margin-left: auto;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

const NavLinks = styled.div<{
  isOpenOnMobile: boolean
}>`
  @media (max-width: 768px) {
    transform: translate(${(props) =>
    props.isOpenOnMobile ? '0px' : '250px'
  });
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 250px;
    display: flex;
    right: 0%;
    top: 0%;
    gap: 20px;
    align-items: center;
    position: fixed;
    transition: all 0.5s ease-in-out;
    box-shadow: 0 0 10px rgba(var(--shadow-color))
  }

  @media (min-width: 768px) {
    flex-direction: row;
    display: flex;
    gap: 30px;
    margin-left: auto;
  }
`;

const CloseIcon = styled.img`
  background-color: rgb(var(--pri-bg-color));
  color: rgb(var(--pri-fg-color));

  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 768px) {
    position: absolute;
    height: 30px;
    width: 30px;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
`;

const NavLink = styled.a`
  color: rgb(var(--pri-fg-color));
  position: relative;
  text-decoration: none;

  &::after {
    background: rgb(var(--sec-fg-color));
    transition: width 0.3s ease-out;
    content: "";
    position: absolute;
    height: 4px;
    right: 0;
    width: 0;
    bottom: -10px;
    border-radius: 10px;
  }

  &:hover::after {
    width: 100%;
    left: 0%;
  }

  &:hover {
    color: rgb(var(--sec-fg-color));
  }
`;

export default function Header() {
  // is Side bar Visible
  const [isOpenOnMobile, setIsOpenOnMobile] = React.useState(false);

  // Nav links ref
  const navRef = React.useRef<HTMLDivElement | null>(null);

  // Click out side
  const clickOutside = (evt: MouseEvent) => {
    if (!(evt?.target instanceof HTMLElement) || !navRef.current) {
      return;
    }

    if (!navRef.current.contains(evt.target)) {
      setIsOpenOnMobile(false);
    }
  }

  // Effect Handler
  const effectHandler = () => {
    // Removes the Click Listener
    const remover = () => {
      document.removeEventListener('click', clickOutside);
    }

    // Add the Click Listener
    const adder = () => {
      document.addEventListener('click', clickOutside);
    }

    // Add the Listener
    adder();

    // Return the Remover
    return remover;
  }

  // MenuClickHandler
  const menuClickHandler = () => {
    setIsOpenOnMobile(!isOpenOnMobile);
  }

  // Use Effect
  React.useEffect(effectHandler, [navRef]);

  // Render the NavBar
  return (
    <Navigation ref={navRef}>
      <Logo src={me} alt="Sri Lakshmi Kanthan P" />
      <Menu
        onClick={menuClickHandler}
        alt="Menu"
        src={getFeather('menu')}
      />
      <NavLinks isOpenOnMobile={isOpenOnMobile}>
        <CloseIcon
          onClick={menuClickHandler}
          alt="Close"
          src={getFeather('x')}
        />
        <NavLink href="#intro">
          Intro
        </NavLink>
        <NavLink href="#about">
          About
        </NavLink>
        <NavLink href="#tools">
          Tools
        </NavLink>
        <NavLink href="#projects">
          Projects
        </NavLink>
        <NavLink href="#contact">
          Contact
        </NavLink>
      </NavLinks>
    </Navigation>
  );
}
