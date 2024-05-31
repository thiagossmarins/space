import planeta from '../../assets/ilustracao-img/planeta-terra.png'

const Inicio = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="m-auto text-transparent bg-clip-text bg-gradient-to-b from-white to-cinza text-52 font-black max-w-803 text-center uppercase mt-20 leading-63">
        Faça sua jornada <span className="bg-gradient-to-r from-degradeciano to-degraderoxo text-transparent bg-clip-text">épica</span> além dos limites da Terra.
      </h1>
      <img className='flex justify-center -mt-35' src={planeta} alt="" />
    </section>

  )
}

export default Inicio