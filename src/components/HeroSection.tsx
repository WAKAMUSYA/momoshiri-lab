"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../app/page.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero} style={{ position: "relative", padding: "0" }}>
      {/* Background Image Setup */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
        <Image 
          src="/images/hero.png" 
          alt="Beautiful fitness model doing hip thrust on a yoga mat"
          fill
          priority
          style={{ objectFit: "cover", opacity: 0.2 }}
        />
        <div style={{ 
          position: "absolute", 
          top: 0, left: 0, right: 0, bottom: 0, 
          background: "linear-gradient(to bottom, rgba(255,250,250,0.4) 0%, rgba(255,250,250,1) 100%)" 
        }} />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1, padding: "6rem 24px 8rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="badge badge-accent" style={{ marginBottom: "1rem" }}>
            女性のためのヒップアップ特化メディア
          </span>
        </motion.div>

        <motion.h1 
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          理想の<span className="gradient-text">桃尻</span>を手に入れよう
        </motion.h1>
        
        <motion.p 
          className={styles.heroSubtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          解剖学から最新のトレーニング方法、おすすめのアイテムまで。<br/>
          丸みのある美しいお尻を作るための正しい知識をお届けします。
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <button className="btn-primary" onClick={() => {
            document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            トレーニングを始める
          </button>
        </motion.div>
      </div>
    </section>
  );
}
