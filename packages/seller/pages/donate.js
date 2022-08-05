import Styles from "../styles/Donate.module.css";
import Link from "next/link";
import React from "react";
import { userState, loadingState } from "../states/AuthGuardState/userState";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { openSUState } from "../states/SignInSignUp";
const Donate = () => {
  // const [user, setUser] = useRecoilState(userState);
  // const [loading, setLoading] = useRecoilState(loadingState);
  // const [openSU,setOpenSU]=useRecoilState(openSUState)
  // const router = useRouter()
  //   React.useEffect(() => {
  //    setLoading(false);
  //   if (!user && !loading) {
  //     router.push("/");
  //     setOpenSU(true)
  //   }
  // },[]);
  return (
    <div style={{ marginTop: "15%" }}>
      <h1 className={Styles.title}>Donate Books with US</h1>
      <p className={Styles.text1}>
        {" "}
        You would contact us directly by our phone number and Email. <br />
        We thank you so much for being so genuinely kind, compassionate and so
        incredibly conscientious
        <br />
        as our donator.All Books from you are really important and usefull to
        students who have low income.
      </p>
      <h1 className={Styles.text2}>Please Contact Us Below:</h1>
      <p className={Styles.text3}>
        Email:{" "}
        <Link href="mailto:FrugalityBook@gmail.com">
          <a>FrugalityBook@gmail.com</a>
        </Link>
      </p>
      <p className={Styles.text3}>
        Tel:{" "}
        <Link href="tel:1-010-373-233">
          <a>010-373-233</a>
        </Link>
      </p>
      {/* <Container/> */}
    </div>
  );
};

export default Donate;
