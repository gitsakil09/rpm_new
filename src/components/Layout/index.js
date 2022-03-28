import Header from "../Header";
import Nav from "../Nav";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Nav />
      <main className="main-wrapper">
        <div>{children}</div>
      </main>
    </>
  );
}
