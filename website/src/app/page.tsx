import Content from '../components/content'
import Navbar from '../components/navbar'

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-5 pt-2">
      <Navbar />
      <Content>
        <h1>foi</h1>
      </Content>
    </main>
  )
}

export default Home