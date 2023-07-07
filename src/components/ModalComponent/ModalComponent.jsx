import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext/ModalContext";

export const ModalComponent = () => {

    const { data, setShow, setData } = useContext(ModalContext)

    const handleCloseModal = () => {
        setShow(false);
        setData({
            name: null,
            description: null,
            price: null,
        })
    }

    return(
        <>
            <h2>{data.name || 'genérico'}</h2>
            <p>{data.price}</p>
            <button type='button' className='btn-buy-wrapper-modal' onClick={handleCloseModal}>Fechar modal</button>
        </>
    );
}