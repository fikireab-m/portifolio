import About from "../components/About";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title='Fikireab-M' />
      <Layout>
        <Hero />
        <About />
        <Services />
      </Layout>
    </>
  );
}
