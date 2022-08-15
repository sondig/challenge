import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
function ModalDeleteMedia({ mediaId }) {
  const Overlay = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = useState(<Overlay />)
  const deleteAction = () => {
    axios
      .delete('https://back-sondeosig.herokuapp.com/api/media/' + mediaId)
      .then((res) => {
        window.location.reload()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <>
      <Button
        ml="4"
        marginRight={'2px'}
        size={'sm'}
        colorScheme="red"
        variant="outline"
        onClick={() => {
          setOverlay(<Overlay />)
          onOpen()
        }}
      >
        Borrar
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Borrar</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Esta seguro de que quiere eliminar este archivo?</p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" onClick={deleteAction}>
              Confirmar
            </Button>
            <Button onClick={onClose}>Cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalDeleteMedia
