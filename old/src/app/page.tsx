import Navbar from '../components/navbar'
import Content from '../components/content'
import styles from '../scss/home.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <Content>
        <input placeholder='BUSCA' type='text'/>
        <h1>Dashboard</h1>
        <div>
          <section/>
          <div>
            <section/>
            <section/>
          </div>
        </div>
        <h2>AVISO/LEMBRETES</h2>
        
      </Content>
    </main>
  )
}
