import { useState } from 'react';

import Modal from './Modal';
import BackDrop from "./BackDrop";

function ToDo(props) {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
        <div className='card'>
            <h2>{props.title}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>

            {modalIsOpen && <Modal onCalcel={closeModalHandler} onConfirm={closeModalHandler}/>}
            {modalIsOpen && <BackDrop onClick={closeModalHandler} />}
        </div>
    );
}

export default ToDo;