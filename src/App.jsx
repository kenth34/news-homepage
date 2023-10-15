import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import News from "./sections/News";

export default function App() {
  return (
    <main>
      <section className="padding-x">
        <Nav />
      </section>
      <section className="xl:padding-l wide:padding-r">
        <Hero />
      </section>
      <section className="padding-x" >
        <News />
      </section>
    </main>
  )
}