"use client";

import RouterLink from "next/link";

import styles from "./NavBar.module.css";
import { Link } from "reshaped";
import Image from "next/image";

import Icon from "./icon-navbar.svg";
import { useEffect, useState } from "react";

interface NavLinkProps {
  href: string;
  title: string;
}

export function NavLink({ href, title }: NavLinkProps) {
  return (
    <RouterLink href={href} style={{ textDecoration: "none", color: "none" }}>
      <Link variant="plain" className={styles.link}>
        {title}
      </Link>
    </RouterLink>
  );
}

export function NavBar() {
  const [showLinks, setShowLinks] = useState(true);

  const handleScroll = () => {
    setShowLinks(window.pageYOffset < 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav className={styles.nav}>
      <RouterLink href="/">
        <Image src={Icon} alt="Aekpi Logo" height={20} />
      </RouterLink>
      {showLinks && (
        <div className={styles.links}>
          <NavLink href="/" title="Home" />
          <NavLink href="/the-index" title="The Index" />
          <NavLink href="/about" title="About" />
          <NavLink href="/contact" title="Contact" />
        </div>
      )}
    </nav>
  );
}
