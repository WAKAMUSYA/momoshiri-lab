import styles from "./page.module.css";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "大臀筋の基本構造 | 桃尻研究所",
  description: "お尻の筋肉の仕組みを知ることで、トレーニング効果は変わる可能性があります。大臀筋の役割と、ヒップアップのための解剖学の基礎を優しく解説します。",
};

export default function AnatomyArticle() {
  return (
    <>
      <header style={{ padding: '1.5rem 0', background: 'rgba(255, 255, 255, 0.9)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)', textDecoration: 'none' }}>
            🍑 桃尻研究所
          </Link>
        </div>
      </header>

      <main className={styles.articleContainer}>
        <nav className={styles.breadcrumb}>
          <Link href="/">ホーム</Link> {'>'} <Link href="/#about">解剖学</Link> {'>'} 大臀筋の基本構造
        </nav>

        <article>
          <header className={styles.articleHeader}>
            <span className={styles.categoryLabel}>🧬 解剖学</span>
            <h1 className={styles.title}>大臀筋の基本構造：お尻の仕組みを知って、遠回りを防ごう</h1>
            <div className={styles.meta}>
              <span>公開日: 2026.04.29</span>
              <span>更新日: 2026.05.02</span>
            </div>
          </header>

          <div className={styles.heroImage}>
            <Image 
              src="/images/articles/anatomy/anatomysamune.png" 
              alt="大臀筋の基本構造" 
              width={800} 
              height={450} 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </div>

          <div className={styles.content}>
            <p>
              「ヒップアップしたいけど、何から始めればいいかわからない…」<br />
              「動画の通りにやっているつもりなのに、なぜか太ももの前側ばかり疲れてしまう…」<br />
              <br />
              そんなふうに悩んだことはありませんか？
            </p>
            <p>
              安心してくださいね。それは決して、あなたの運動神経がないからではありません。
              ただ単に、<b>「お尻の筋肉がどういう作りになっていて、どう動けば使われるのか」</b>を知る機会がなかっただけかもしれません。
            </p>
            <p>
              実は、やみくもに回数をこなすよりも、筋肉の構造を少しだけ理解してあげる方が、ヒップアップへの近道になる可能性があります。今日は、専門用語もできるだけ噛み砕いてお伝えしていくので、一緒にゆっくり見ていきましょう。
            </p>

            <div className={styles.adPlaceholderInArticle}>
              [広告] 記事内広告 (インフィード)
            </div>

            <h2>お尻の主役は「大臀筋（だいでんきん）」</h2>
            <div style={{ margin: '2rem 0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <Image 
                src="/images/articles/anatomy/anatomy1.png" 
                alt="大臀筋の図解" 
                width={800} 
                height={450} 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </div>
            <p>
              一言で「お尻」と言っても、実はいくつかの筋肉が重なり合っています。その中でも、私たちが一番意識したいのが<b>「大臀筋（だいでんきん）」</b>という筋肉です。
            </p>
            <p>
              名前の通り、お尻の中で最も大きく、そして人間の体の中でもトップクラスに体積が大きい筋肉なんですよ。この大臀筋がしっかり働くことで、ヒップに高さと立体感が出るようになります。
            </p>

            <h3>なぜお尻は垂れてしまうのか？</h3>
            <p>
              「昔はもっとお尻が上がっていた気がするのに…」と感じることはありませんか？
              その大きな原因の一つが、<b>長時間の座り姿勢</b>にあると言われています。
            </p>
            <p>
              座っている時、私たちのお尻の筋肉は体重の下敷きになり、ずっと引き伸ばされた状態でお休みしています。これが毎日続くと、脳が「お尻の筋肉はあまり使わなくていいんだな」と勘違いしてしまい、いざ歩いたり階段を登ったりするときに、上手く力を発揮できなくなってしまうことがあるんです。
            </p>

            <h2>現場でよくある「もったいない」失敗例</h2>
            <p>
              ここで、私が普段お客様のトレーニングを見ていて、とても多い「もったいないケース」をご紹介しますね。それは、<b>「お尻を鍛えようとして、膝（ひざ）ばかりを動かしてしまうこと」</b>です。
            </p>
            <p>
              例えばスクワットをするとき、膝を前に曲げることばかり意識してしまうと、体重が太ももの前側に逃げてしまいます。「お尻を鍛えたいのに、前ももばかりパンパンになる」という方は、このパターンの可能性が高いです。
            </p>

            <div className={styles.adPlaceholderInArticle}>
              [広告] 記事内広告 (インフィード)
            </div>

            <h2>解決の鍵は「股関節（こかんせつ）」</h2>
            <div style={{ margin: '2rem 0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <Image 
                src="/images/articles/anatomy/anatomy2.png" 
                alt="股関節の使い方の図解" 
                width={800} 
                height={450} 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </div>
            <p>
              大臀筋をしっかり目覚めさせるためのポイント。それは、<b>「股関節」をしっかり曲げ伸ばしすること</b>です。
            </p>
            <p>
              股関節とは、足の付け根（コマネチのライン）のことですね。お尻の筋肉は、この股関節を伸ばす（折りたたんだ足の付け根をまっすぐにする）ときに一番強く働きます。
            </p>
            <p>
              <b>【今日からできる小さな改善】</b><br />
              まずはトレーニングの前に、足の付け根に手を当てて、そこからお辞儀をするように体をパタンと折りたたむ練習（ヒンジ動作といいます）をしてみてください。膝は軽く曲げる程度で大丈夫です。
            </p>
            <p>
              お尻やももの裏側が「ピーン」と張る感覚があれば大成功です。その感覚のまま立ち上がるだけで、大臀筋はしっかりと使われ始めます。
            </p>
            
            <p>
              難しく考えすぎず、まずは「足の付け根から動かす」ことだけ、頭の片隅に置いてみてくださいね。少しずつ、体は確実に応えてくれるはずです。
            </p>

          </div>
        </article>
      </main>

      <footer style={{ padding: '3rem 0', background: 'var(--color-surface)', textAlign: 'center', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} 桃尻研究所. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
