import React, { useEffect, useState } from 'react'
import axios from 'axios'

const url = 'https://back-sondeosig.herokuapp.com/api/media/'

const DataContext = React.createContext()

const DataProvider = (props) => {
  const [data, setData] = useState([
    {
      image: 'Loading...',
      texto: 'Loading...',
      likes: 0,
      _id: 'Loading...',
    },
  ])
  const [reference, setReference] = useState([])
  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data)
      setReference(res.data)
    })
  }, [])

  const states = [data, setData, reference, setReference]

  return <DataContext.Provider value={states} {...props} />
}

export { DataProvider, DataContext }
