import { useState } from 'react';
import Modal from '../Modal/Modal';
import Thumb from '../Thumb/Thumb';

const Descubra = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <section id='descubra' className="flex flex-col justify-center items-center">
            <h2 className="m-auto text-transparent bg-clip-text bg-gradient-to-b from-white to-cinza text-42 font-black max-w-702 text-center uppercase mt-20 leading-51">
                Descubra o Lado <span className="bg-gradient-to-r from-degradeciano to-degraderoxo text-transparent bg-clip-text">Oculto</span>  da Terra: Sua Jornada Espacial Começa Aqui
            </h2>
            <Thumb />
            <button className='bg-white hover:bg-gray-200 transition duration-300 font-bold ease-in-out w-200 h-50 text-black rounded-50 -mt-25' onClick={() => { setOpenModal(true) }}>
                Assitir Video
            </button>
            <Modal isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)}>
                
            </Modal>
        </section>
    )
}

export default Descubra;