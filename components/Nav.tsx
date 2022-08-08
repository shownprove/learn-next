import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "user_here" : ""}>Home</a>
      </Link>
      <Link href="/login">
        <a className={router.pathname === "/login" ? "user_here" : ""}>Login</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: teal;
          padding: 20px 10px;
        }
        a {
          text-decoration: none;
          margin: 10px;
          font-weight: bolder;
          font-size: 20px;
        }
        .user_here {
          color: blue;
        }
      `}</style>
    </nav>
  );
}
