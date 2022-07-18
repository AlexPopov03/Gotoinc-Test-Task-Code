import React, { useState } from 'react'
import style from './index.module.scss'
import AddParcel from '../components/Add/AddParcel';
import ParcelList from '../components/Add/ParcelList';

const App = () => {
  const [parcelsList, setParcelsList] = useState([]);

  const addParcelHandler = (pDep, pRec, pType, pDate, pDes) => {
    setParcelsList(prevParcelsList => {
      return [...prevParcelsList, 
        { departure: pDep, receiving: pRec, type: pType, date: pDate, description: pDes, id: Math.random().toString() }]
    });
  };

  const removeParcel = (parcel) => {
    setParcelsList(parcelsList.filter (p => p.id !== parcel.id))
  }

  return (
    <div className={style}>
      <AddParcel onAddParcel={addParcelHandler}/>
      <ParcelList remove={removeParcel} parcels={parcelsList}/>
    </div>
  );
};

export default App;