import Header from "../components/Header/Header"
import LatestLayout from "./LatestLayout"

const HomeLayout = () => {
  return (
    <div>
        <header>
        <Header/>
        <section className="w-[1140px] mx-auto">
            <LatestLayout/>
        </section>
        </header>
        <nav></nav>
        <main></main>
    </div>
  )
}

export default HomeLayout