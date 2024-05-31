
const Contato = () => {
    return (
        <section className="flex flex-col justify-center items-center m-auto max-w-1100 h-400">
            <div className="flex flex-col items-center">
                <h2 className="text-42 text-white uppercase font-black max-w-797 text-center leading-51"><span className="bg-gradient-to-r from-degradeciano to-degraderoxo text-transparent bg-clip-text">Conecte-se</span> Conosco e Deixe Sua Marca no Universo!</h2>
                <div>
                    <input type="text" placeholder="Digite seu email" className="w-350 h-50 outline-none text-emailvalue bg-planobg rounded-5 mt-30 pl-15 mr-10" />
                    <button type='submit' className="bg-planotitulo px-20 h-50 rounded-5 bg-gradient-to-r from-degradeciano to-degraderoxo shadow-md">
                        <a className="text-16 font-bold text-fundo uppercase">Enviar agora!</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Contato