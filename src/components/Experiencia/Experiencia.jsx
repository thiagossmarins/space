import foguete from '../../assets/ilustracao-img/Default_onibus_espacial_0 1.png'

const Experiencia = () => {
    return (
        <section className='max-w-1100 flex justify-between items-center m-auto h-550'>
            <div>
                <h2 className="max-w-332 text-42 font-black text-white uppercase leading-51">A <span className="bg-gradient-to-r from-degradeciano to-degraderoxo text-transparent bg-clip-text">Experiência</span> de Uma Vida</h2>
                <p className="max-w-460 text-20 text-paragrafoColor mt-3.5 leading-30">Esta não é apenas uma viagem espacial comum; é uma jornada que desafia o convencional e redefine o que é possível. Desde o momento em que você embarca até o momento em que pisa novamente em solo terrestre, cada momento será uma aventura inesquecível.</p>
            </div>
            <img className='h-400 w-450' src={foguete} alt="" />
        </section>
    )
}

export default Experiencia