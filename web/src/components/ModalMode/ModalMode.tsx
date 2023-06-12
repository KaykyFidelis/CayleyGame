import { Button, Modal } from 'react-bootstrap'

const ModalMode = ({ showModal, handleCloseModal }) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Título do Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Conteúdo do Modal...</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Fechar
        </Button>
        <Button variant="primary">Salvar</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalMode
