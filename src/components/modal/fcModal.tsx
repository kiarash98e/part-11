import React,{ lazy,Suspense } from 'react'
import { useUI } from '../../context/uiContext';
import Modal from './modal';


const ManagedModal: React.FC = () => {
   
	const { displayModal, closeModal, modalView } = useUI();

    return (
		<>
            <Modal open={displayModal} onClose={closeModal}>
            </Modal>
        </>
	);
};

export default ManagedModal;
