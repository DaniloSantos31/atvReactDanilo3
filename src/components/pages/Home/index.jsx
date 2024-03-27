import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

function Home() {
  return (
    <>
      <Header />
      <section className='container'>
        <div className='apresentacao'>

          <p>
            Olá, esta é <br />
            <span>Minha página</span> <br />
            Danilo Santana
          </p>
        </div>

        <figure>
          <img className='img-home' src="undraw_programming_re_kg9v.svg" alt="Imagem de Home" />
        </figure>

      </section>
      <Footer />
    </>
  )
}
export default Home