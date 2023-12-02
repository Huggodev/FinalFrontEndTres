import Card from "../components/Card";
import Spinner from "../components/utils/Spinner";
import { useContextGlobal } from "../components/utils/global.context";

const Home = () => {
  const { dentistState } = useContextGlobal();

  return (
    <main className="main" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {
          dentistState.loadingUser
            ? <Spinner />
            : dentistState.user.map(user => <Card user={user} key={user.id} />)
        }
      </div>
    </main>
  )
}

export default Home