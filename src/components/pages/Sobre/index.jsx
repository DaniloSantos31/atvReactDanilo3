import Header from '../../Header'
import Footer from '../../Footer'
import Styles from '../Sobre/Sobre.module.css'

function Sobre() {
    return (
        <>
            <Header />
            <section className='container'>
                <div className='apresentacao'>

                    <p>Olá, meu nome é
                        <br />
                        <span>Danilo Santana</span> <br />
                    Obrigado por visitar este site
                    <br />
                    Contato: dandan.santos3103@gmail.com
                    </p>
                </div>

            </section>
            <Footer />
        </>
    )
}
export default Sobre