'use client';

import React, { useMemo, useState } from 'react';

type Row = {
  name: string;
  price: number;
  commissionRs: number;
  commissionPct: number;
  bonus: number;
  wallet: number;
};

const BASE_ROWS: Row[] = [
  { name: 'Explore Package', price: 700, commissionRs: 0, commissionPct: 0, bonus: 0, wallet: 0 },
  { name: 'Learn Package', price: 1700, commissionRs: 0, commissionPct: 0, bonus: 0, wallet: 0 },
  { name: 'Apply Package', price: 2700, commissionRs: 0, commissionPct: 0, bonus: 0, wallet: 0 },
  { name: 'Achieve Package', price: 5200, commissionRs: 0, commissionPct: 0, bonus: 0, wallet: 0 },
];

export default function Page() {
  const [rows, setRows] = useState<Row[]>(BASE_ROWS);
  const [query, setQuery] = useState('');

  const filteredRows = useMemo(
    () => rows.filter(r => r.name.toLowerCase().includes(query.toLowerCase())),
    [rows, query]
  );

  const computeDerived = (price: number, commissionRs: number, commissionPct?: number) => {
    const pct = typeof commissionPct === 'number' ? commissionPct : price ? (commissionRs / price) * 100 : 0;
    const rs = typeof commissionPct === 'number' ? (price * commissionPct) / 100 : commissionRs;
    const bonus = price * 0.02; // 2% Skill Hub Nepal bonus
    const wallet = rs + bonus;
    return {
      commissionRs: clamp2(rs),
      commissionPct: clamp2(pct),
      bonus: clamp2(bonus),
      wallet: clamp2(wallet),
    };
  };

  const onChangeRs = (index: number, value: string) => {
    const n = toNum(value);
    setRows(prev => {
      const next = [...prev];
      const r = next[index];
      const derived = computeDerived(r.price, n);
      next[index] = { ...r, ...derived };
      return next;
    });
  };

  const onChangePct = (index: number, value: string) => {
    const n = toNum(value);
    setRows(prev => {
      const next = [...prev];
      const r = next[index];
      const derived = computeDerived(r.price, r.commissionRs, n);
      next[index] = { ...r, ...derived };
      return next;
    });
  };

  const exportCSV = () => {
    const header = [
      'Package',
      'Price (Rs.)',
      'Commission (Rs.)',
      'Commission (%)',
      'Skill Hub Nepal Bonus (Rs.)',
      'Wallet (Rs.)',
    ];
    const lines = [header.join(',')];
    rows.forEach(r => {
      lines.push(
        [
          r.name,
          formatRs(r.price),
          formatRs(r.commissionRs),
          clamp2(r.commissionPct).toFixed(2),
          formatRs(r.bonus),
          formatRs(r.wallet),
        ].join(',')
      );
    });
    const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'commission-structure.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="wrap">
      <a className="skip" href="#content">Skip to content</a>
      <button className="menuBtn" aria-label="Open menu">Menu</button>

      <h1 className="title">Day 3: Affiliate Marketing & Earnings</h1>

      {/* Learn While Earning */}
      <section className="card" id="content" aria-labelledby="learnTitle">
        <h3 className="cardTitle" id="learnTitle">Learn While Earning</h3>
        <p className="muted">
          Blend education with income generation through Skill Hub Nepal affiliate program, earning commissions by
          promoting courses while honing your skills.
        </p>
        <div className="imgBox">
          <img
            className="img"
            src="/images/affiliate-marketing.jpg"
            alt="Affiliate marketing graphic"
          />
        </div>
      </section>

      {/* What is Affiliate Marketing */}
      <section className="card" aria-labelledby="whatTitle">
        <h3 className="cardTitle" id="whatTitle">What is Affiliate Marketing?</h3>
        <p className="muted">
          Earn commissions by promoting Skill Hub Nepal courses using a unique referral link. Share via social media, blogs,
          or websites to drive enrollments and boost your income.
        </p>
        <div className="imgBox">
          <img
            className="img"
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop"
            alt="Affiliate marketer working on laptop"
          />
        </div>
      </section>

      {/* Commission Structure */}
      <section className="card" aria-labelledby="commissionTitle">
        <h3 className="cardTitle" id="commissionTitle">Commission Structure</h3>
        <p className="muted">
          Understand our tiered commission structure to maximize earnings. Enter commission values to calculate
          percentages and track potential income. Use coupon code <b className="hl">skill Hub Nepal 30</b> for a 30% discount
          on all packages (prices below reflect discount).
        </p>

        <div className="toolbar">
          <label className="sr" htmlFor="search">Search packages</label>
          <input
            id="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search packages..."
            aria-label="Search packages"
            className="search"
          />
        </div>

        <div className="tableWrap" role="region" aria-label="Commission table" tabIndex={0}>
          <table className="table">
            <thead>
              <tr>
                <th className="th left">Package</th>
                <th className="th">Price (Rs.)</th>
                <th className="th">Commission (Rs.)</th>
                <th className="th">Commission (%)</th>
                <th className="th">Skill Hub Nepal Bonus (Rs.)</th>
                <th className="th right">Wallet (Rs.)</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map(r => {
                const index = rows.findIndex(x => x.name === r.name);
                return (
                  <tr key={r.name}>
                    <td className="td left">{r.name}</td>
                    <td className="td mono">{formatRs(r.price)}</td>
                    <td className="td">
                      <input
                        inputMode="decimal"
                        className="cellInput"
                        value={safeNumInput(r.commissionRs)}
                        onChange={e => onChangeRs(index, e.target.value)}
                        placeholder="0.00"
                        aria-label={`Commission in rupees for ${r.name}`}
                      />
                    </td>
                    <td className="td">
                      <div className="pctBox">
                        <input
                          inputMode="decimal"
                          className="cellInput"
                          value={safeNumInput(r.commissionPct)}
                          onChange={e => onChangePct(index, e.target.value)}
                          placeholder="0"
                          aria-label={`Commission percent for ${r.name}`}
                        />
                        <span className="pct">%</span>
                      </div>
                    </td>
                    <td className="td mono">{formatRs(r.bonus)}</td>
                    <td className="td mono right">{formatRs(r.wallet)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="actions">
          <button className="btn" onClick={exportCSV}>
            Export to CSV
          </button>
        </div>

        <div className="imgBox below">
          <img
            className="img"
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop"
            alt="Analytics and reports"
          />
        </div>
      </section>

      {/* Refund Policy */}
      <section className="card" aria-labelledby="refundTitle">
        <h3 className="cardTitle" id="refundTitle">Refund Policy</h3>
        <p className="muted">
          All purchases are non-refundable to ensure commitment. Our support team addresses technical issues on a
          case-by-case basis to ensure satisfaction.
        </p>
        <div className="imgBox">
          <img
            className="img"
            src="/images/no-refunt.jpg"
            alt="No refund seal"
          />
        </div>
      </section>

      {/* Program Rules */}
      <section className="card" aria-labelledby="rulesTitle">
        <h3 className="cardTitle" id="rulesTitle">Program Rules</h3>
        <p className="muted">
          Promote ethically, avoid spamming, and adhere to Skill Hub Nepal’s guidelines and legal regulations to ensure
          transparency and authenticity.
        </p>
        <div className="imgBox">
          <img
            className="img"
            src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1200&auto=format&fit=crop"
            alt="Team meeting"
          />
        </div>
      </section>

      <div className="footerCta">
        <a href="/day4">
          <button className="btn btnPrimary">Continue to Day 4</button>
        </a>
      </div>

      {/* Global theme matching day1 and day2 */}
      <style jsx global>{`
        :root {
          /* Colors */
          --bg: #000000;
          --panel: #23263a;
          --panel-2: #181a2a;
          --border: rgba(255, 255, 255, 0.06);
          --text: #ffffff;
          --muted: #a1a1aa;

          --accent: #a855f7;
          --accent-2: #c084fc;
          --focus: rgba(168, 85, 247, 0.35);

          /* Reuse existing semantic names in markup */
          --amber: var(--accent);
          --amber-2: var(--accent-2);

          /* Type scale (fluid) */
          --fs-xs: clamp(12px, 0.6vw + 10px, 14px);
          --fs-sm: clamp(14px, 0.7vw + 11px, 16px);
          --fs-md: clamp(16px, 0.8vw + 12px, 18px);
          --fs-lg: clamp(20px, 1.2vw + 14px, 26px);
          --fs-xl: clamp(32px, 2.5vw + 18px, 48px);

          /* Layout */
          --radius: 12px;
          --radius-lg: 14px;
          --content-w: clamp(320px, 92vw, 1000px);
          --gap: 22px;
        }

        html, body {
          margin: 0;
          padding: 0;
          background: var(--bg);
          color: var(--text);
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji;
          font-size: var(--fs-md);
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
          scroll-behavior: smooth;
        }

        * { box-sizing: border-box; }
        ::selection { background: var(--accent); color: #0b0b0f; }
        :focus-visible { outline: 3px solid var(--focus); outline-offset: 2px; }

        /* Scrollbar (WebKit) for nicer overflow areas */
        ::-webkit-scrollbar { height: 10px; width: 10px; }
        ::-webkit-scrollbar-track { background: var(--panel-2); }
        ::-webkit-scrollbar-thumb { background: rgba(168, 85, 247, 0.3); border-radius: 999px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(168, 85, 247, 0.5); }

        /* Motion safety */
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; }
        }
      `}</style>

      {/* Component styles */}
      <style jsx>{`
        .wrap {
          width: 100%;
          min-height: 100svh;
          padding: 24px 16px 70px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--gap);
        }

        .skip {
          position: absolute;
          left: -9999px;
          top: auto;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }
        .skip:focus {
          position: fixed;
          left: 16px;
          top: 12px;
          width: auto;
          height: auto;
          padding: 8px 12px;
          background: var(--panel);
          color: var(--text);
          border-radius: 8px;
          z-index: 1000;
        }

        .menuBtn {
          position: fixed;
          top: 16px;
          left: 16px;
          background: transparent;
          color: var(--amber-2);
          border: 1px solid var(--border);
          padding: 10px 14px;
          font-size: var(--fs-sm);
          border-radius: 10px;
          cursor: pointer;
          min-height: 44px;
        }

        .title {
          width: var(--content-w);
          margin: 64px 0 6px;
          font-size: var(--fs-xl);
          font-weight: 800;
          letter-spacing: 0.2px;
          line-height: 1.2;
        }

        .card {
          width: var(--content-w);
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 22px;
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.04), 0 14px 30px rgba(0, 0, 0, 0.45);
        }
        .card + .card { margin-top: 4px; }

        .cardTitle {
          margin: 0 0 10px;
          font-size: var(--fs-lg);
          font-weight: 800;
          color: var(--amber-2);
        }
        .muted {
          color: var(--muted);
          font-size: var(--fs-md);
          line-height: 1.8;
          margin: 0 0 14px;
        }
        .hl { color: var(--amber); letter-spacing: 0.2px; }

        .imgBox {
          width: 100%;
          padding: 8px 0 0;
          display: grid;
          place-items: center;
        }
        .imgBox.below { margin-top: 12px; }

        .img {
          width: min(540px, 100%);
          height: auto;
          border-radius: var(--radius);
          border: 1px solid rgba(168, 85, 247, 0.2);
          background: var(--panel-2);
          object-fit: cover;
        }

        .toolbar {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 14px 0 14px;
          flex-wrap: wrap;
        }
        .sr { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }

        .search {
          width: min(480px, 100%);
          background: var(--panel-2);
          border: 1px solid var(--border);
          color: var(--text);
          padding: 12px 14px;
          border-radius: 10px;
          font-size: var(--fs-md);
          outline: none;
          min-height: 46px;
        }
        .search::placeholder { color: #a7a8bb; }
        .search:focus { box-shadow: 0 0 0 4px var(--focus); }

        .tableWrap {
          overflow-x: auto;
          border-radius: 10px;
          border: 1px solid var(--border);
          -webkit-overflow-scrolling: touch;
          background: var(--panel-2);
        }
        .table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          min-width: 760px;
          font-size: var(--fs-md);
        }
        .th, .td {
          border-top: 1px solid var(--border);
          padding: 14px 14px;
          vertical-align: middle;
        }
        thead .th {
          position: sticky;
          top: 0;
          z-index: 1;
          border-top: 0;
          color: var(--amber-2);
          text-align: left;
          background: var(--panel);
          font-weight: 700;
          font-size: calc(var(--fs-md) + 1px);
        }
        tbody tr:hover td { background: rgba(168, 85, 247, 0.07); }

        .left { text-align: left; }
        .right { text-align: right; }

        .mono {
          font-variant-numeric: tabular-nums;
          font-feature-settings: 'tnum';
        }
        tbody tr:nth-child(even) td {
          background: rgba(168, 85, 247, 0.05);
        }

        .cellInput {
          width: 160px;
          background: var(--panel-2);
          color: var(--text);
          border: 1px solid rgba(168, 85, 247, 0.4);
          border-radius: 10px;
          padding: 10px 12px;
          font-size: var(--fs-md);
          min-height: 44px;
          outline: none;
        }
        .cellInput::placeholder { color: #a7a8bb; }
        .cellInput:focus { box-shadow: 0 0 0 4px var(--focus); }

        .pctBox {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .pct {
          color: var(--muted);
          font-size: var(--fs-md);
        }

        .actions {
          margin: 16px 0 4px;
        }
        .btn {
          background: var(--panel);
          color: var(--amber-2);
          border: 1px solid var(--border);
          padding: 12px 16px;
          font-size: var(--fs-md);
          border-radius: 12px;
          cursor: pointer;
          transition: transform 0.05s ease, box-shadow 0.2s ease, background 0.2s ease;
          min-height: 46px;
        }
        .btn:hover { box-shadow: 0 0 0 4px var(--focus); background: rgba(168, 85, 247, 0.1); }
        .btn:active { transform: translateY(1px); }
        .btnPrimary {
          background: linear-gradient(90deg, #3b82f6, #2563eb);
          color: white;
          border: 0;
          box-shadow: 0 10px 26px rgba(37, 99, 235, 0.4);
          font-weight: 800;
          border-radius: 999px;
        }
        .btnPrimary:hover { background: linear-gradient(90deg, #60a5fa, #3b82f6); box-shadow: 0 10px 30px rgba(37, 99, 235, 0.5); }

        .footerCta {
          width: var(--content-w);
          display: grid;
          place-items: center;
          margin: 6px 0 14px;
        }

        @media (min-width: 920px) {
          .img { width: 560px; }
        }
      `}</style>
    </main>
  );
}

/* -------- Utils -------- */
function toNum(v: string) {
  if (!v) return 0;
  const n = Number(String(v).replace(/[^\d.-]/g, ''));
  return Number.isFinite(n) ? n : 0;
}
function clamp2(n: number) {
  return Math.round((n + Number.EPSILON) * 100) / 100;
}
function formatRs(n: number) {
  return `${clamp2(n).toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}
function safeNumInput(n: number) {
  if (Number.isNaN(n) || n === 0) return '';
  return String(clamp2(n));
}