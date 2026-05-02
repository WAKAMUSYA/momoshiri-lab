import styles from "../anatomy/page.module.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ヒップスラストの正しいやり方 | 桃尻研究所",
  description: "お尻のトレーニングの王様「ヒップスラスト」。腰が痛くなる、もも裏ばかり疲れるといったよくある悩みを解決し、大臀筋にしっかり効かせるフォームを優しく解説します。",
};

export default function HipThrustArticle() {
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
          <Link href="/">ホーム</Link> {'>'} <Link href="/#about">トレーニング</Link> {'>'} ヒップスラストのやり方
        </nav>

        <article>
          <header className={styles.articleHeader}>
            <span className={styles.categoryLabel}>🏋️‍♀️ トレーニング</span>
            <h1 className={styles.title}>ヒップスラストの正しいやり方：腰痛を防いでお尻に効かせるコツ</h1>
            <div className={styles.meta}>
              <span>公開日: 2026.05.02</span>
              <span>更新日: 2026.05.02</span>
            </div>
          </header>

          <div className={styles.heroImage}>
            [ 画像プレースホルダー: ベンチに背中を乗せ、正しいフォームでヒップスラストをしている女性の図解 ]
          </div>

          <div className={styles.content}>
            <p>
              「お尻に効くって聞いてヒップスラストをやってみたけど、腰が痛くなってしまった…」<br />
              「お尻よりも、ももの裏側（ハムストリングス）ばかりが疲れてしまう…」<br />
              <br />
              ジムでよく見かけるヒップスラストですが、実はお客様からこんなお悩みをよくいただきます。
            </p>
            <p>
              せっかく頑張っているのに、狙ったところに効かないと少しもどかしいですよね。
              でも大丈夫です。それはあなたの筋力が足りないのではなく、<b>「足の位置」や「骨盤の向き」</b>といった、ちょっとしたフォームの調整ができていないだけかもしれません。
            </p>
            <p>
              ヒップスラストは、大臀筋（お尻のメインの筋肉）をダイレクトに刺激できる素晴らしい種目です。今日は、怪我を防いでしっかりお尻に効かせるためのポイントを、構造的な視点からわかりやすくお伝えしますね。
            </p>

            <div className={styles.adPlaceholderInArticle}>
              [広告] 記事内広告 (インフィード)
            </div>

            <h2>現場でよくある２つの「もったいないフォーム」</h2>
            <p>
              正しいやり方を知る前に、まずは「なぜ腰が痛くなるのか」「なぜもも裏に効いてしまうのか」を知っておきましょう。原因がわかれば、修正するのはとても簡単です。
            </p>

            <h3>1. 腰を反って持ち上げている（腰痛の原因）</h3>
            <p>
              一番多いのが、お尻の力ではなく「腰を反る力」でバーベルや体重を持ち上げてしまうケースです。
              お尻を高く上げようと頑張るあまり、背中が反りかえってしまうんですね。これだと大臀筋が十分に縮まず、腰の筋肉（脊柱起立筋）に負担が集中してしまい、腰痛の原因になる可能性があります。
            </p>

            <h3>2. 足の位置が遠すぎる（もも裏が疲れる原因）</h3>
            <p>
              足をつく位置がお尻から遠すぎると、膝が伸びた状態に近くなります。この状態で持ち上げようとすると、お尻よりも「もも裏（ハムストリングス）」の筋肉が優位に働いてしまいます。
              逆に足が近すぎると、今度は「前もも」に効きやすくなってしまいます。
            </p>

            <div className={styles.adPlaceholderInArticle}>
              [広告] 記事内広告 (インフィード)
            </div>

            <h2>お尻にピンポイントで効かせる３つの手順</h2>
            <p>
              それでは、いよいよ正しいフォームを作っていきましょう。ポイントは「目線」と「足の位置」です。
            </p>

            <h3>ステップ1：正しい足の位置を見つける</h3>
            <p>
              ベンチに肩甲骨の下あたりを乗せ、足を床につきます。このとき、<b>「お尻を一番上まで持ち上げたときに、横から見てスネが床と垂直（90度）」</b>になる位置が正解です。
              まずは重りを持たずに、何度か上げ下げして「スネが90度になるポジション」を探してみてください。
            </p>

            <h3>ステップ2：アゴを引き、おへそを覗き込む</h3>
            <p>
              ここが最大のポイントです。頭をベンチに乗せて上を向くのではなく、<b>アゴを軽く引き、自分のおへそ（または膝）をずっと見つめたまま</b>動作を行ってください。
            </p>
            <p>
              アゴを引くことで、自然と骨盤が後傾（少し丸まるような動き）しやすくなります。この「骨盤の後傾」が、腰の反りを防ぎ、大臀筋を最大限にギュッと縮めるためのスイッチになるんです。
            </p>

            <h3>ステップ3：足の裏全体で床を押す</h3>
            <p>
              準備ができたら、足の裏全体（特にかかと）で床を力強く押して、お尻を持ち上げます。
              このとき、腰を高く上げることよりも、<b>「お尻の筋肉をギュッと中心に寄せる」</b>ことを意識してみてください。
            </p>

            <p>
              <b>【最後に】</b><br />
              最初はバーベルなどの重りを使わず、ご自身の体重（自重）だけで練習するのがおすすめです。自重でも、正しいフォームで行えばお尻が熱くなる感覚がしっかりと得られるはずですよ。
            </p>
            <p>
              焦らず、一つ一つの動きを確認しながら、あなただけの「効くポイント」を探してみてくださいね。応援しています！
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
