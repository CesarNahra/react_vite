import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext/ModalContext";
import './ModalComponent.css';

export const ModalComponent = () => {

    const { data, setShow, setData } = useContext(ModalContext)

    const handleCloseModal = () => {
        setShow(false);
        setData({
            title: null,
            description: null,
        })
    }

    return(
        <>
            <h2>{data.title || 'título genérico'}</h2>
            <p>{data.description || 'lorem ipsum'}</p>
            <button type='button' className='btn-buy-wrapper-modal' onClick={handleCloseModal}>Fechar modal</button>
        </>
    );
}