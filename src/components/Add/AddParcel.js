import React, { useState, useContext, useEffect } from 'react'
import Card from '../UI/Card'
import styles from './AddParcel.module.css'
import ErrorWindow from '../UI/ErrorWindow'

import {Parcel, ParcelsList} from '../../App/context'


const AddParcel = (props) => {
  const { type } = props
  const [parcelsList, setParcelsList] = useContext(ParcelsList)
  const [parcel, setParcel] = useContext(Parcel)
  const defaultData = {
    originCity: '',
    destinationCity: '',
    type: '',
    date: '',
    desc: '',
    id: ''
  }

  useEffect(() => {
    if(parcel.id && type && type === 'edit') setFormData(parcel)
  }, [parcel]);

  const [formData, setFormData] = useState(defaultData)
  const [error, setError] = useState()

  function resetData() {
    setFormData(defaultData)
    setParcel({})
  }

  function addParcelHandler(event) {
    event.preventDefault()
    if (
      formData.originCity.trim().length === 0 ||
      formData.destinationCity.trim().length === 0 ||
      formData.date.trim().length === 0
    ) {
      setError({
        title: 'Invalid input',
        message: 'Please fill in  all required fields (*)'
      })
      return
    }
    setParcelsList((list) => {
      if(list.filter(i => i.id != '' && i.id === formData.id).length) {
        return list.map((i) => {
          if(i.id === formData.id) {
            i = formData
          }
          return i
        })
      } else {
        return [...list, { ...formData, id: Math.random().toString() }]
      }
    })
    resetData()
  }

  function handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name
    setFormData({ ...formData, ...{ [name]: value } })
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <div>
      {error && <ErrorWindow title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={styles.input}>
        <form onSubmit={addParcelHandler}>
          <div className="input-group mb-3">
            <label htmlFor="departur-city">Departure city:</label>
            <input
              className="needs-validation"
              placeholder="Odesa"
              id="departur-city"
              type="text"
              name="originCity"
              value={formData.originCity}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group mb-3">
            <label htmlFor="receiving-city">*City of receiving:</label>
            <input
              className="needs-validation"
              placeholder="Kharkiv"
              id="receiving-city"
              type="text"
              name="destinationCity"
              value={formData.destinationCity}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group mb-3">
            <label htmlFor="parcel-type">Type of parcel:</label>
            <input
              placeholder="Furniture"
              id="parcel-type"
              type="text"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group mb-3">
            <label htmlFor="dispatch-date">*Date of dispatch:</label>
            <input
              className="needs-validation"
              placeholder="dd.mm.yyy"
              id="dispatch-date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group mb-3">
            <label htmlFor="parcel-discription">Parcel discription:</label>
            <input
              placeholder="Be careful"
              id="parcel-discription"
              type="text"
              name="desc"
              value={formData.desc}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save Parcel
          </button>
        </form>
      </Card>
    </div>
  )
}

export default AddParcel
