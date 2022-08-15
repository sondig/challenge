import Layout from '../src/components/Layout/Layout.jsx'
import Media from '../src/components/Media.jsx'
import { DataProvider } from '../src/contexts/DataProvider.jsx'

const Home = () => {
  return (
    <DataProvider>
      <div className="homeMain">
        <Media></Media>
      </div>
    </DataProvider>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout pageTitle="Inicio">{page}</Layout>
}

export default Home
