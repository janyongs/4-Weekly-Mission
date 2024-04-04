import Image from "next/image";
import Link from "next/link";
import logo from "@assets/image/logo.svg";
import style from "./signUp.module.scss";

const SignUpPage = () => {
  return (
    <div className={style.container}>
      <Image src={logo} alt="logo" width={210} height={38} />
      <div className={style.link}>
        이미 회원이신가요?
        <Link href="/signin"> 로그인하기</Link>
      </div>
    </div>
  );
};

export default SignUpPage;
