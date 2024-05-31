
const Passagem = () => {
    return (
        <section id='passagem' className="max-w-1100 m-auto max-h-700 mb-60">
            <h2 className="text-42 text-white uppercase font-black text-center mt-20">Reserve Sua Passagem <span className="bg-gradient-to-r from-degradeciano to-degraderoxo text-transparent bg-clip-text">Agora</span></h2>
            <div className="flex items-center justify-center my-auto gap-planos mt-40 ">

                <div className="w-250 bg-planobg rounded-5">
                    <h3 className="font-black uppercase text-planotitulo text-center text-20 mt-22">Plano explorer</h3>
                    <ul className="max-w-210 text-15 text-paragrafoColor ml-30 mt-18 mb-22 m-auto checklist">
                        <li>Viagem de ida e volta ao espaço</li>
                        <br />
                        <li>Visão privilegiada do buraco do polo norte</li>
                        <br />
                        <li>Tour guiado pela espaçonave</li>
                        <br />
                        <li>Certificado de participação</li>
                    </ul>
                    <div className="text-center">
                        <button className="bg-planotitulo px-25 py-10 mb-22 rounded-5">
                            <a className="text-16 font-bold text-planobg uppercase">Assine Já</a>
                        </button>
                    </div>
                </div>

                <div className="w-270 bg-planobg rounded-5">
                    <h3 className="font-black uppercase max-w-238 text-planotitulo mt-22 bg-gradient-to-r from-degradeciano to-degraderoxo text-transparent bg-clip-text text-20 text-center m-auto">Plano Explorador do Cosmos</h3>
                    <ul className="max-w-215 text-15 text-paragrafoColor ml-30 mt-18 mb-22 m-auto checklist">
                        <li>Viagem de ida e volta ao espaço</li>
                        <br />
                        <li>Visão privilegiada do buraco do polo norte</li>
                        <br />
                        <li>Tour guiado pela espaçonave.</li>
                        <br />
                        <li>Observação de estrelas e constelações a partir da órbita terrestre.</li>
                        <br />
                        <li>Palestra exclusiva com astronautas experientes.</li>
                    </ul>
                    <div className="text-center">
                        <button className="bg-planotitulo px-25 py-10 mb-22 rounded-5 bg-gradient-to-r from-degradeciano to-degraderoxo shadow-md">
                            <a className="text-16 font-bold text-planobg uppercase">Assine Já</a>
                        </button>
                    </div>
                </div>

                <div className="w-250 bg-planobg rounded-5">
                    <h3 className="font-black text-20 uppercase text-planotitulo text-center mt-22 max-w-200">Plano aventura Espacial</h3>
                    <ul className="max-w-210 text-15 text-paragrafoColor ml-30 mt-18 mb-22 m-auto checklist">
                        <li>Viagem de ida e volta ao espaço</li>
                        <br />
                        <li>Visão privilegiada do buraco do polo norte</li>
                        <br />
                        <li>Tour guiado pela espaçonave</li>
                        <br />
                        <li>Atividade de gravidade zero dentro da espaçonave</li>
                    </ul>
                    <div className="text-center">
                        <button className="bg-planotitulo px-25 py-10 mb-22 rounded-5">
                            <a className="text-16 font-bold text-planobg uppercase">Assine Já</a>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Passagem