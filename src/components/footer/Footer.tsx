import FaceBookLogo from "@assets/image/facebook.svg";
import InstarGramLogo from "@assets/image/instagram.svg";
import TwitterLogo from "@assets/image/twitter.svg";
import YoutubeLogo from "@assets/image/youtube.svg";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.scss";

export const Footer = () => {
  const logoList = [
    {
      logo: FaceBookLogo,
      link: "https://www.facebook.com/",
      id: "FaceBookLogo",
    },
    {
      logo: InstarGramLogo,
      link: "https://www.instagram.com/",
      id: "InstarGramLogo",
    },
    { logo: TwitterLogo, link: "https://twitter.com/", id: "TwitterLogo" },
    { logo: YoutubeLogo, link: "https://www.youtube.com/", id: "YoutubeLogo" },
  ];
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerItem}>©codeit - 2023</div>
      <div className={styles.footerItem}>
        <Link href="">Privacy Policy</Link>
        <Link href="">FAQ</Link>
      </div>
      <div className={styles.footerItem}>
        {logoList.map((v) => (
          <div key={v.id}>
            <Link href={v.link} key={v.id} target="_blank">
              <Image src={v.logo} alt={v.id} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
