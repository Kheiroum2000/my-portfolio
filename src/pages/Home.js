import Cards from '../components/Cards'
import Hero from '../components/Hero'
import Users from '../components/Users'

function Home({darkMode}) {
    return (
        <div>
            <Hero />
            <Cards />
            <Users />
        </div>
    )
}

export default Home