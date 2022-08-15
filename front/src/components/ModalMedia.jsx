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
  Input,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import axios from 'axios'

function ModalMedia() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialForm = {
    image: '',
    texto: '',
    likes: 0,
  }

  const [formData, setFormData] = useState(initialForm)

  const selectChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(`https://back-sondeosig.herokuapp.com/api/media`, formData)
      .then(function (response) {
        setFormData(initialForm)
        window.location.reload()
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <>
      <AddIcon
        onClick={onOpen}
        style={{
          cursor: 'pointer',
          border: '4px solid white',
          borderRadius: '20%',
          height: '30px',
          width: '30px',
        }}
      >
        Open Modal
      </AddIcon>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleSubmit}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Postear tu foto</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel htmlFor="texto">Texto</FormLabel>
                <Input
                  width="auto"
                  name="texto"
                  autoComplete="off"
                  value={formData.texto}
                  onChange={selectChange}
                  placeholder="Ingrese el titulo de la imagen"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="image">Foto URL</FormLabel>
                <Input
                  width="auto"
                  name="image"
                  autoComplete="off"
                  value={formData.image}
                  onChange={selectChange}
                  placeholder="Ingrese URL de una imagen"
                  minLength={10}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="author">Autor</FormLabel>
                <Input
                  width="auto"
                  name="author"
                  autoComplete="off"
                  value={formData.author}
                  onChange={selectChange}
                  placeholder="Ingrese su nombre"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Enviar
              </Button>
              <Button onClick={onClose}>Cancelar</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  )
}
export default ModalMedia
