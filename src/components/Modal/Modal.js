import React from 'react'
import { Modal, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

export const AddModal = props => (
  <Modal show={props.showModal} onHide={props.handleModalClose}>
    <Modal.Header closeButton>

      {/* ADD MODAL TITLE WITH PROP HERE */}

    </Modal.Header>

    <Modal.Body>

      {/* ADD FORM COMPONENTS HERE */}
      
    </Modal.Body>
    <Modal.Footer>

      {/* ADD CANCEL BUTTON HERE */}

      {/* ADD SUBMIT BUTTON HERE */}

    </Modal.Footer>
  </Modal>
)