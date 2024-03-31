import styles from "./Header.module.scss";
import Image from "next/image";
import logo from "@assets/image/logo.svg";
import { useProfile } from "@/src/hooks/useProfile";
import { UserProfile } from "../profile/userProfile";
import Link from "next/link";

export const Header = () => {
  const { profile } = useProfile();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <Link href="/">
            <div className={styles.logo}>
              <Image src={logo} alt="mainLogo" />
            </div>
          </Link>
          {profile ? (
            <UserProfile
              imageSrc={profile.profileImageSource}
              email={profile.email}
            />
          ) : (
            <button className={styles.button}>로그인</button>
          )}
        </div>
      </div>
    </div>
  );
};
