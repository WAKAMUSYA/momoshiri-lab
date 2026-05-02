import styles from "./page.module.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "運営者情報 | 桃尻研究所",
  description: "桃尻研究所の運営者プロフィールと、当サイトが目指すビジョンについて。",
};

export default function AboutPage() {
  return (
    <>
      

      <main className={styles.aboutContainer}>
        <div className={styles.profileCard}>
          <div className={styles.avatarWrapper}>
            <div className={styles.avatar}>🧑‍🏫</div>
          </div>
          
          <h1 className={styles.name}>桃尻研究所 所長</h1>
          <p className={styles.role}>女性向けフィットネス専門トレーナー</p>

          <div className={styles.philosophy}>
            <h2>「知る」ことで、身体はもっと美しく変わる</h2>
            <p>
              トレーニングを頑張っているのに結果が出ない。それは決してあなたの努力が足りないからではありません。「正しい体の仕組み」を知る機会がなかっただけです。
              桃尻研究所は、解剖学や栄養学に基づいた「正しい知識」を、どこよりも優しく、わかりやすくお届けすることを目的に設立されました。
            </p>
          </div>

          <div className={styles.message}>
            <p>
              はじめまして。女性専門のパーソナルトレーナーとして活動している「所長」です。
            </p>
            <p>
              これまで多くのお客様のボディメイクをサポートさせていただく中で、<strong>「お尻を鍛えたいのに前ももばかり太くなる」「動画の真似をしているのに腰が痛い」</strong>といったお悩みを数え切れないほど聞いてきました。
            </p>
            <p>
              情報が溢れる現代では、「とりあえずこれだけやればOK！」といった極端なメソッドや、見栄えの良さだけを追求した発信が多く見受けられます。しかし、人の体は一人ひとり違いますし、魔法のような近道はありません。
            </p>
            <p>
              だからこそ、この研究所では<strong>「なぜそうなるのか」「体の構造上、どう動かすのが自然なのか」</strong>という根本的な部分にこだわってお話ししています。
            </p>
            <p>
              専門用語も、できるだけ噛み砕いてお伝えします。読者の皆様が「これならできそう」と感じて、安全に、そして楽しく理想のヒップラインを手に入れられるよう、全力でサポートさせていただきます。
            </p>
            <p>
              一緒に、あなただけの美しい「桃尻」を育てていきましょうね。
            </p>
          </div>
        </div>
      </main>

      
    </>
  );
}
