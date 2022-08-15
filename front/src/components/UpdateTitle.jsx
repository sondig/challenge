import { EditIcon } from '@chakra-ui/icons'
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
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import axios from 'axios'
import { useState, useRef } from 'react'
function UpdateTitle({ mediaTitle, mediaId }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const [formData, setFormData] = useState({
    title: mediaTitle,
  })
  const selectChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    axios
      .put(
        `https://back-sondeosig.herokuapp.com/api/media/${mediaId}`,
        formData
      )
      .then(function (response) {
        window.location.reload()
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <>
      <EditIcon onClick={onOpen} />

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <ModalHeader>Editar Titulo</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Titulo Anterior</FormLabel>
                <Input ref={initialRef} defaultValue={mediaTitle} isReadOnly />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Titulo Nuevo</FormLabel>
                <Input
                  placeholder="Ingrese el titulo nuevo"
                  isRequired
                  name="texto"
                  value={formData.texto}
                  onChange={selectChange}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} type={'submit'}>
                Guardar
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}

export default UpdateTitle
