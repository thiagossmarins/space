import terra from '../../assets/ilustracao-img/planeta-terra-footer.png'

const Footer = () => {
    return (
        <footer className="h-450">
            <div className="className='w-full max-w-tela-desk justify-center items-center mx-auto my-0">
                <img className='m-auto mb-20 mt-30' src={terra} alt="" />
                <div className="flex m-auto flex-col items-center justify-end ">
                    <a href="/" className='text-white text-22 font-titulo'><span className='bg-gradient-to-r from-degradeciano to-degraderoxo text-transparent bg-clip-text'>&lt;/</span>Thiago<span className='bg-gradient-to-r from-degradeciano to-degraderoxo text-transparent bg-clip-text'>&gt;</span></a>
                    <p className="text-white text-16 mb-20 text-center">© Copyright 2024 - Desenvolvido por <a className="font-semibold" href="https://github.com/thiagossmarins" target="_blank">@thiagossmarins</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer