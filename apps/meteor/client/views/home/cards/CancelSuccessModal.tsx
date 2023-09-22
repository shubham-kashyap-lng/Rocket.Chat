import React from "react";
import { Modal } from '@rocket.chat/fuselage';


type CancelPaymentModalProps = {
    onClose: () => void;
};

const CancelSuccessModal = ({ onClose }: CancelPaymentModalProps) => {
    return (
        <Modal>
            <Modal.Header>
                <Modal.HeaderText>
                    {/* <Modal.Title>Modal Header</Modal.Title> */}
                </Modal.HeaderText>
                <Modal.Close justifyContent="end" title={'Close'} onClick={onClose} />
            </Modal.Header>
            <Modal.Content>
                <Modal.Title textAlign="center" fontSize='h3' pbs={20} pbe={80}>
                    Your Subscription has been cancelled
                </Modal.Title>
            </Modal.Content>
        </Modal>
    )
}


export default CancelSuccessModal;