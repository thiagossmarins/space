import lua from '../../assets/ilustracao-img/lua.png'

const Destino = () => {
    return (
        <section id='destino' className='max-w-1100 flex justify-between items-center m-auto h-500'>
            <div>
                <h2 className="text-42 text-white font-black uppercase leading-51">Destino <br />
                    <span className="bg-gradient-to-r from-degradeciano to-degraderoxo text-transparent bg-clip-text">além</span> dos Limites
                </h2>
                <p className='max-w-467 text-20 font-normal text-paragrafoColor paragrafo-destino mt-3.5'>Na <strong className='text-white font-bold'>Space</strong>, não apenas sonhamos alto, como alcançamos as estrelas. Nosso destino não é apenas o espaço sideral, mas um ponto único onde a realidade se encontra com a imaginação: o buraco do polo norte.</p>
            </div>
            <img src={lua} alt="" />
        </section>
    )
}

export default Destino