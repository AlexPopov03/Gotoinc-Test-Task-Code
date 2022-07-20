import React, { useState } from 'react'
import AddParcel from '../components/Add/AddParcel'
import ParcelList from '../components/Add/ParcelList'
import EditParcel from '../components/Edit/EditParcel'

import { ParcelsList, Parcel } from './context'

const App = () => {
  const [parcelsList, setParcelsList] = useState([])
  const [parcel, setParcel] = useState({})

  return (
    <div className="container">
      <ParcelsList.Provider value={[parcelsList, setParcelsList]}>
          <Parcel.Provider value={[parcel, setParcel]}>
            <AddParcel />
              <ParcelList />
              <EditParcel />
          </Parcel.Provider>
      </ParcelsList.Provider>
    </div>
  )
}

export default App
