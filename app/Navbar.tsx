'use client';

import React from 'react';

export default function Page() {
  return (
    <>
      <header className="nav" style={{ height: 70 }}>
        <div className="brandRow">
          <img
            src="/images/skill-logo.png"
            className="brand"
            alt="Skill logo"
          />
          <span className="brandName">Skill Hub Nepal</span>
        </div>

        <nav className="menu">
          <a href="#">Home</a>
          <a href="/about">About</a>
        </nav>
      </header>

      <style jsx>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          width: 100%;
          padding: 0 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(15, 15, 20, 0.85);
          border-bottom: 1px solid #6d28d9; /* violet border */
          backdrop-filter: saturate(140%) blur(10px);
        }

        .brandRow {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .brand {
          height: 100px;
          width: auto;
        }

        .brandName {
          color: #fff;
          font-weight: 700;
          font-size: 22px;
        }

        .menu {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .menu a {
          color: #c4b5fd; /* light violet */
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          padding: 8px 10px;
          border-radius: 6px;
          transition: color 0.2s ease, background 0.2s ease;
        }

        .menu a:hover {
          color: #fff;
          background: rgba(109, 40, 217, 0.14);
        }
      `}</style>
    </>
  );
}