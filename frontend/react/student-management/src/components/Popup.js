import React from "react"
import { Button, Modal } from 'react-bootstrap'

class Popup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showPopup: false
        };
    }

    render() {
        console.log('render popup')

        return (
            <Modal show={this.state.showPopup} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.headerProp}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.children}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.handleConfirm}>
                        OK
                    </Button>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate')
        if (nextProps.syncDataOfComponents.requestRerender != this.props.syncDataOfComponents.requestRerender) {
            this.state.showPopup = nextProps.syncDataOfComponents.showPopup
        }
    }

    handleClose = () => {
        this.setState({showPopup: false})
    }

    handleConfirm = () => {
        this.props.handleConfirm()
        this.handleClose()
    }

}

export default Popup
