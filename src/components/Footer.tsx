import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ padding: '3rem 0', background: 'var(--color-surface)', textAlign: 'center', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
          <Link href="/about" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold' }}>
            運営者情報（プロフィール）
          </Link>
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} 桃尻研究所. All rights reserved.
        </p>
        <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem', fontSize: '0.8rem' }}>
          当サイトはヒップアップに関する情報を提供するメディアです。
        </p>
      </div>
    </footer>
  );
}
