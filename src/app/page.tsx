import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <div className={`${styles.headerContent} container`}>
          <div className={styles.logo}>
            🍑 桃尻研究所
          </div>
          <nav>
            <Link href="#about" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
              はじめる
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div className="container">
            <h1 className={styles.heroTitle}>
              理想の<span className="gradient-text">桃尻</span>を手に入れよう
            </h1>
            <p className={styles.heroSubtitle}>
              女性のためのヒップアップ特化メディア。解剖学から最新のトレーニング方法まで、
              丸みのある美しいお尻を作るための正しい知識をお届けします。
            </p>
            <button className="btn-primary">
              トレーニング記事を見る
            </button>
          </div>
        </section>

        <div className={`container ${styles.contentWrapper}`}>
          <div className={styles.mainContent}>
            <section className={styles.section} id="about">
              <h2 className={styles.sectionTitle}>新着記事</h2>
              <div className={styles.cardGrid}>
                <Link href="/articles/anatomy" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <article className={styles.card}>
                    <h3 className={styles.cardTitle}>大臀筋の基本構造</h3>
                    <p className={styles.cardDesc}>お尻の筋肉の仕組みを知ることで、トレーニング効果は劇的に変わります。</p>
                  </article>
                </Link>
                <Link href="/articles/hip-thrust" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <article className={styles.card}>
                    <h3 className={styles.cardTitle}>ヒップスラストの正しいやり方</h3>
                    <p className={styles.cardDesc}>最も効果的と言われるヒップスラストのフォームと注意点を徹底解説。</p>
                  </article>
                </Link>
                <Link href="/articles/nutrition" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <article className={styles.card}>
                    <h3 className={styles.cardTitle}>食事で変わるお尻の丸み</h3>
                    <p className={styles.cardDesc}>筋肉をつけるために必要なタンパク質とカロリーの計算方法。</p>
                  </article>
                </Link>
                <Link href="/articles/band-training" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <article className={styles.card}>
                    <h3 className={styles.cardTitle}>家でできるバンドトレーニング</h3>
                    <p className={styles.cardDesc}>ジムに行かなくてもできる、レジスタンスバンドを使った簡単メニュー。</p>
                  </article>
                </Link>
              </div>
            </section>

            {/* In-feed Ad Placeholder */}
            <div className={styles.section}>
              <div className={styles.adPlaceholder}>
                [広告] Google AdSense レスポンシブ広告枠
              </div>
            </div>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>カテゴリ</h2>
              <div className={styles.cardGrid}>
                <div className={`${styles.card} glass-panel`}>
                  <h3 className={styles.cardTitle}>🏋️‍♀️ トレーニング</h3>
                  <p className={styles.cardDesc}>種目別の解説やメニューの組み方</p>
                </div>
                <div className={`${styles.card} glass-panel`}>
                  <h3 className={styles.cardTitle}>🥗 栄養・食事</h3>
                  <p className={styles.cardDesc}>プロテインやサプリ、食事管理</p>
                </div>
                <div className={`${styles.card} glass-panel`}>
                  <h3 className={styles.cardTitle}>🧬 解剖学</h3>
                  <p className={styles.cardDesc}>お尻の筋肉の働きと仕組み</p>
                </div>
              </div>
            </section>
          </div>

          <aside className={styles.sidebar}>
            {/* Sidebar Ad Placeholder 1 */}
            <div className={styles.adPlaceholder}>
              [広告] サイドバー広告枠 (300x250)
            </div>
            
            <div className={`${styles.card} glass-panel`}>
              <h3 className={styles.cardTitle}>人気のキーワード</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                {['ヒップスラスト', 'ブルガリアンスクワット', 'プロテイン', '宅トレ', 'バンド'].map(tag => (
                  <span key={tag} style={{ 
                    background: 'var(--color-primary-light)', 
                    color: '#fff', 
                    padding: '4px 12px', 
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: 'bold'
                  }}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar Ad Placeholder 2 */}
            <div className={styles.adPlaceholder} style={{ minHeight: '600px' }}>
              [広告] スカイスクレイパー広告枠 (300x600)
            </div>
          </aside>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <p className={styles.footerText}>
            © {new Date().getFullYear()} 桃尻研究所. All rights reserved.
          </p>
          <p className={styles.footerText} style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
            当サイトはヒップアップに関する情報を提供するメディアです。
          </p>
        </div>
      </footer>
    </div>
  );
}
