import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  badge?: string;
  price?: string;
  href: string;
  buttonText?: string;
}

export default function ProductCard({
  title,
  description,
  imageSrc,
  badge,
  price,
  href,
  buttonText = "詳細を見る"
}: ProductCardProps) {
  return (
    <div className="image-card">
      <Link href={href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
        <div style={{ position: 'relative', height: '200px' }}>
          <Image 
            src={imageSrc} 
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {badge && (
            <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
              <span className="badge badge-accent">{badge}</span>
            </div>
          )}
        </div>
        <div className="image-card-content">
          <h3 className="image-card-title">{title}</h3>
          <p className="image-card-desc">{description}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {price && <span className="price-tag">{price}</span>}
            <span style={{ 
              color: 'var(--color-primary)', 
              fontWeight: 'bold', 
              fontSize: '0.9rem',
              marginLeft: price ? '0' : 'auto'
            }}>
              {buttonText} &rarr;
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
