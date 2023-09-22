import React from "react";
import { Modal, Button } from '@rocket.chat/fuselage';
import { useSetModal } from '@rocket.chat/ui-contexts';
import CancelSuccessModal from "./CancelSuccessModal";

type CancelPaymentModalProps = {
    onClose: () => void;
};

const CancelPaymentModal = ({ onClose }: CancelPaymentModalProps) => {
    const setModal = useSetModal();
	const openCancelSuccessModal = (): void => setModal(<CancelSuccessModal onClose={(): void => setModal(null)} />);

    return (
        <Modal>
            <Modal.Header>
                <Modal.HeaderText>
                    <Modal.Title textAlign="center" fontSize='h3'>Are you sure you want to cancel the subscription?</Modal.Title>
                </Modal.HeaderText>
                {/* <Modal.Close title={'Close'} onClick={onClose} /> */}
            </Modal.Header>
            {/* <Modal.Content>Modal Body</Modal.Content> */}
            <Modal.Footer justifyContent='space-around'>
                <Modal.FooterControllers>
                    <Button mie={32} onClick={onClose}>No</Button>
                    <Button mis={32} danger onClick={openCancelSuccessModal}>Yes</Button>
                </Modal.FooterControllers>
            </Modal.Footer>
        </Modal>
    )
}


export default CancelPaymentModal;