"use client";

import Link from "next/link";
import { useState } from "react";
import MegaMenu from "./MegaMenu";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <Link href="/" className="header-logo">
            🛠 CrawlerTool
          </Link>

          <nav className="header-nav">
            {user ? (
              <>
                <button
                  className="nav-tools-btn"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  ⬡ Tools
                </button>
                <Link href="/">Trang chủ</Link>
                <Link href="/dashboard">📊 Dashboard</Link>
                <Link href="/settings/accounts">Cài đặt</Link>

                {/* User info */}
                <div style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "4px 12px", borderRadius: 8,
                  background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)",
                }}>
                  <span style={{ fontSize: 13, color: "#A5B4FC", fontWeight: 600 }}>
                    👤 {user.name}
                  </span>
                  <button
                    onClick={logout}
                    style={{
                      background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)",
                      color: "#f87171", padding: "3px 10px", borderRadius: 6, fontSize: 12,
                      fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
                    }}
                  >
                    Đăng xuất
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link href="/">Trang chủ</Link>
                <Link href="/login" style={{
                  padding: "6px 16px", borderRadius: 8, fontWeight: 600, fontSize: 13,
                  background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                  color: "#fff",
                }}>
                  Đăng nhập
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>

      {menuOpen && <MegaMenu onClose={() => setMenuOpen(false)} />}
    </>
  );
}
