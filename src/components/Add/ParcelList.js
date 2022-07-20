import React, {useContext, useState} from 'react'
import Card from '../UI/Card'
import styles from './ParcelList.module.css'
import { ParcelsList, Parcel } from '../../App/context'

const ParcelList = () => {
  const [parcelsList, setParcelsList] = useContext(ParcelsList)
    const [parcel, setParcel] = useContext(Parcel)

  function ListItems(props) {
    const { parcel } = props
    const labelMap = {
      id: 'Id',
      originCity: 'Departure city',
      destinationCity: 'Receiving city',
      type: 'Parcel type',
      date: 'Date of dispatch',
      desc: 'Description'
    }

    return Object.entries(parcel).map(([k, value], index) => (
      <li className="list-group-item" key={index.toString()}>
        <label style={{ fontWeight: 'bold' }}>{labelMap[k]}:</label> {value}
      </li>
    ))
  }

  function ButtonGroup(props) {
    const { parcel } = props
    return (
        <div className="btn-group" role="group" aria-label="action buttons">
          <button
              className="btn btn-danger m-2"
              onClick={() => {
                setParcelsList(parcelsList.filter((p) => parcel.id !== p.id))
              }}
          >
            Delete
          </button>
            <button
                className="btn btn-primary m-2"
                onClick={() => setParcel(parcel)}
            >
                Edit
            </button>
        </div>
    )
  }

  function List() {
      return <ul className="list-group">
          {parcelsList.map((parcel) => {
              return (
                  <>
                      <ListItems parcel={parcel}></ListItems>
                      <ButtonGroup parcel={parcel}></ButtonGroup>
                  </>
              )
          })}
      </ul>
  }

  return (
    <Card className={styles.parcel}>
        <List />
    </Card>
  )
}
export default ParcelList
