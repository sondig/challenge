import { Box, Img } from '@chakra-ui/react'
import { useContext } from 'react'
import { DataContext } from '../contexts/DataProvider'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import ModalDeleteMedia from './ModalDeleteMedia'
import axios from 'axios'
import UpdateTitle from './UpdateTitle'
import ResetLikes from './ResetLikes'

const Media = () => {
  const [data, , reference, setReference] = useContext(DataContext)
  const mediaMain = data.map((data, index) => {
    const updateLikes = () => {
      setReference((reference[index] = { ...data, likes: data.likes++ }))
      const idNumber = data._id
      axios
        .put(`https://back-sondeosig.herokuapp.com/api/media/${idNumber}`, {
          likes: data.likes,
        })
        .then(function (response) {
          setReference((reference[index] = { ...data, likes: data.likes }))
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    const Heart = () => {
      if (data.likes === 0) {
        return <AiOutlineHeart onClick={updateLikes} />
      }
      return <AiFillHeart onClick={updateLikes} />
    }

    return (
      <Box key={index} className="mediaMain">
        <Box className="mediaTitle">
          <h2>{data.texto}</h2>
          <UpdateTitle mediaTitle={data.texto} mediaId={data._id} />
        </Box>
        <Img src={data.image} alt={data.texto} />
        <Box className="mediaSubtitle">
          <Box>
            <Heart />
            <p>{data.author}</p>
          </Box>
          <ResetLikes mediaId={data._id}></ResetLikes>
        </Box>
        <Box className="mediaActions">
          <p>{'Me gusta ' + data.likes}</p>
          <ModalDeleteMedia mediaId={data._id} />
        </Box>
      </Box>
    )
  })
  return <>{mediaMain}</>
}

export default Media
