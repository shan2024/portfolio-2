import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className = "navbar-container">
      <div className = "navbar">
        <li id = "home-link"><Link href = "/">Seulchan Han</Link></li>
        <li><Link href = "/about">About</Link></li>
        <li><Link href = "/studio">Studio</Link></li>
      </div>
      <hr className = "hor-line"></hr>
    </div>
  );
}