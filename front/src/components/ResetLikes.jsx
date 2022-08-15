import { Button } from '@chakra-ui/react'
import axios from 'axios'
function ResetLikes({ mediaId }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .put(`https://back-sondeosig.herokuapp.com/api/media/${mediaId}`, {
        likes: 0,
      })
      .then(function (response) {
        window.location.reload()
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <Button size={'sm'} type={'submit'} onClick={handleSubmit}>
      ResetLikes
    </Button>
  )
}

export default ResetLikes
