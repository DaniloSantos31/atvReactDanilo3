function Home(){
    return (
        <>
      <Header />
      <section className='container'>
      <div className='apresentacao'>

        <p>
          Olá, sou <br/>
          <span>Danilo Santana</span> <br/>
          Estudante de Sin
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