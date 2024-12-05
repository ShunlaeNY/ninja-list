import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    // console.log("UseEffect Runs");
    setTimeout(() => {
      router.push("/"); //redirect to home page
    }, 3000); //3s timeout
  }, []);
  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <p>The page you are looking for doesn't exist.</p>
      <Link href="/" className="Link">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
