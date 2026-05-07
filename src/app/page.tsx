import styles from "./page.module.css";
import Link from "next/link";
import HeroSection from "../components/HeroSection";
import AnimatedSection from "../components/AnimatedSection";
import ProductCard from "../components/ProductCard";
import { Dumbbell, Salad, HeartPulse, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <div className={styles.main}>
      <main>
        <HeroSection />

        <div className={`container ${styles.contentWrapper}`}>
          <div className={styles.mainContent}>
            
            {/* New Articles Section */}
            <AnimatedSection id="articles" className={styles.section} delay={0.1}>
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
                <Link href="/articles/bulgarian-squat" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <article className={styles.card}>
                    <h3 className={styles.cardTitle}>ブルガリアンスクワットのコツ</h3>
                    <p className={styles.cardDesc}>前ももばかり太くなる原因と、お尻に効かせる魔法のフォーム調整。</p>
                  </article>
                </Link>
                <Link href="/articles/protein-timing" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <article className={styles.card}>
                    <h3 className={styles.cardTitle}>プロテインを飲むタイミング</h3>
                    <p className={styles.cardDesc}>トレーニング後や間食など、お尻を育てる最高のタイミングを解説。</p>
                  </article>
                </Link>
              </div>
            </AnimatedSection>

            {/* In-feed Ad Placeholder */}
            <div className={styles.section}>
              <div className={styles.adPlaceholder}>
                [広告] Google AdSense レスポンシブ広告枠
              </div>
            </div>

            {/* Affiliate: Recommended Gear */}
            <AnimatedSection className={styles.section} delay={0.2}>
              <h2 className={styles.sectionTitle}>
                <Dumbbell className="text-primary" size={24} style={{ color: 'var(--color-primary)', marginRight: '8px' }} />
                おすすめトレーニンググッズ
              </h2>
              <div className={styles.cardGrid}>
                <ProductCard 
                  title="プレミアム レジスタンスバンド"
                  description="ずれない、丸まらない。高品質なファブリック素材でしっかりお尻に効かせます。"
                  imageSrc="/images/gear.png"
                  badge="人気No.1"
                  price="¥2,480"
                  href="#"
                  buttonText="Amazonで見る"
                />
                <ProductCard 
                  title="極厚ヨガマット 10mm"
                  description="膝や腰が痛くならない。ヒップスラストやストレッチに最適なモチモチマット。"
                  imageSrc="/images/gear.png"
                  price="¥3,200"
                  href="#"
                  buttonText="楽天で見る"
                />
              </div>
            </AnimatedSection>

            {/* Affiliate: Supplements */}
            <AnimatedSection className={styles.section} delay={0.2}>
              <h2 className={styles.sectionTitle}>
                <Salad className="text-primary" size={24} style={{ color: 'var(--color-primary)', marginRight: '8px' }} />
                美尻を作るプロテイン＆サプリ
              </h2>
              <div className={styles.cardGrid}>
                <ProductCard 
                  title="桃尻プロテイン ベリー風味"
                  description="美味しくて溶けやすい。女性に嬉しいビタミン・ミネラルも配合したホエイプロテイン。"
                  imageSrc="/images/supplement.png"
                  badge="スタッフ愛用"
                  price="¥4,500"
                  href="#"
                  buttonText="公式サイトへ"
                />
              </div>
            </AnimatedSection>

            {/* Affiliate: Online Gyms / Personal Training */}
            <AnimatedSection className={styles.section} delay={0.2}>
              <h2 className={styles.sectionTitle}>
                <HeartPulse className="text-primary" size={24} style={{ color: 'var(--color-primary)', marginRight: '8px' }} />
                本気で変えるならプロにお任せ
              </h2>
              <div className={styles.cardGrid}>
                <ProductCard 
                  title="オンラインフィットネス A"
                  description="自宅で本格指導！月額定額で受け放題のオンラインヨガ・フィットネス。"
                  imageSrc="/images/gym.png"
                  badge="初回無料"
                  href="#"
                  buttonText="詳細を見る"
                />
                <ProductCard 
                  title="女性専用パーソナルジム B"
                  description="美尻・くびれに特化。完全個室で人目を気にせずトレーニングに集中できます。"
                  imageSrc="/images/gym.png"
                  href="#"
                  buttonText="無料カウンセリング"
                />
              </div>
            </AnimatedSection>

            {/* Categories */}
            <AnimatedSection className={styles.section} delay={0.2}>
              <h2 className={styles.sectionTitle}>
                <GraduationCap className="text-primary" size={24} style={{ color: 'var(--color-primary)', marginRight: '8px' }} />
                カテゴリ
              </h2>
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
            </AnimatedSection>

          </div>

          <aside className={styles.sidebar}>
            {/* Sidebar Ad Placeholder 1 */}
            <div className={styles.adPlaceholder}>
              [広告] サイドバー広告枠 (300x250)
            </div>
            
            <AnimatedSection className={`${styles.card} glass-panel`} delay={0.3}>
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
            </AnimatedSection>

            {/* Sidebar Ad Placeholder 2 */}
            <div className={styles.adPlaceholder} style={{ minHeight: '600px', position: 'sticky', top: '100px' }}>
              [広告] スカイスクレイパー広告枠 (300x600)
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
