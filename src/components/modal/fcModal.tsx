import React,{ lazy,Suspense } from 'react'
import { useUI } from '../../context/uiContext';
import Modal from './modal';
const AddTask = lazy(() => import("../addTask/addTask"))
const DeleteTask = lazy(() => import("../deleteTask/deleteTask"))
const EditTask = lazy(() => import("../editTask/editTask"))


const ManagedModal: React.FC = () => {
   
	const { displayModal, closeModal, modalView } = useUI();

    return (
		<>
            <Modal open={displayModal} onClose={closeModal}>
              <Suspense fallback={<></>}>
                {modalView === "Add" && <AddTask /> }
                {modalView === "Delete" && <DeleteTask /> }
                {modalView === "Edit" && <EditTask /> }
              </Suspense>
            </Modal>
        </>
	);
};

export default ManagedModal;
