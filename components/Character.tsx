import Link from 'next/link';
import Image from 'next/image';

export default function Character() {
  return (
    <section className="index-Character">
      <h2 className="sw-Ttl js-Animation ttl-Slide">
        <span>M</span>
        <span>E</span>
        <span>M</span>
        <span>B</span>
        <span>E</span>
        <span>R</span>
      </h2>
      <ul className="character-Group-List js-Animation">
        <li>
          <Link href="/character/#art">
            <Image
              src="/assets/images/common/index/img_art.png"
              alt="ART"
              width={400}
              height={300}
              loading="lazy"
              style={{ borderRadius: '10%' }}
            />
          </Link>
        </li>
        <li>
          <Link href="/character/#build">
            <Image
              src="/assets/images/common/index/img_build.png"
              alt="BUILD"
              width={400}
              height={300}
              loading="lazy"
              style={{ borderRadius: '10%' }}
            />
          </Link>
        </li>
        <li>
          <Link href="/character/#cad">
            <Image
              src="/assets/images/common/index/img_cad.png"
              alt="CAD"
              width={400}
              height={300}
              loading="lazy"
              style={{ borderRadius: '10%' }}
            />
          </Link>
        </li>
        <li>
          <Link href="/character/#program">
            <Image
              src="/assets/images/common/index/img_code.png"
              alt="PROGRAM"
              width={400}
              height={300}
              loading="lazy"
              style={{ borderRadius: '10%' }}
            />
          </Link>
        </li>
      </ul>
      <Link className="sw-All-Btn" href="/character/">
        <span>ALL MEMBER</span>
      </Link>
    </section>
  );
}
