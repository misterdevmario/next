import Link from "next/link";
import Main from "../../components/layouts/Main";
export default function Contact() {
  return (
    <div className="container">
      <Main>
        <h1>Contact Page</h1>
        <h1 className="title">
          ir a <Link href="/">Home</Link>
        </h1>

        <p className="description">
          Get started by editing <code className="code">pages/contact.js</code>
        </p>
      </Main>
    </div>
  );
}
