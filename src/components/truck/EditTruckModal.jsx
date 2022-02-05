import {Modal} from "react-bootstrap";
import EditTruckInput from "./EditTruckInput";

function EditTruckModal({onHide, show, editVehicle,card}) {

    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header onClick={onHide} closeButton>
                <Modal.Title>
                    Пожарен автомобил:
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EditTruckInput onHide={onHide}
                                editVehicle={editVehicle}
                                card={card}
                />
            </Modal.Body>
        </Modal>
    );
}

export default EditTruckModal;