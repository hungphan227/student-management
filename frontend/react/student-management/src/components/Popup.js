import React from "react"
import { Button, Modal } from 'react-bootstrap'

class Popup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: true
        };
    }

    render() {
        const handleClose = () => this.setState({ showModal: false })

        return (
            <Modal show={this.state.showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.headerProp}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.children}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        OK
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

}

export default Popup
