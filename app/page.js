// import Landing from "./landing";
import Landing from "./landing/page";
import Layout from "./layout";

export default function Home() {
  return (
    // <Layout>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50">
        <Landing />
      </div>
    // </Layout>
  );
}
