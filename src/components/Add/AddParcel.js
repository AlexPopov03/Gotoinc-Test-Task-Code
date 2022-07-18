import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from '../Add/AddParcel.module.css';
import ErrorWindow from '../UI/ErrorWindow';

const AddParcel = props => {
  const [enteredDepartureCity, setEnteredDepartureCity] = useState('')
  const [enteredReceivingCity, setEnteredReceivingCity] = useState('')
  const [enteredParcelType, setEnteredParcelType] = useState('')
  const [enteredDateOfDispatch, setEnteredDateOfDispatch] = useState('')
  const [enteredParcelDescription, setEnteredParcelDescription] = useState('')

  const [error, setError] = useState();
    
  function addParcelHandler(event) {
    event.preventDefault();
    if (enteredDepartureCity.trim().length === 0 || enteredReceivingCity.trim().length === 0 || enteredDateOfDispatch.trim().length === 0){
      setError({
        title: 'Invalid input',
        message: 'Please fill all important fields (*)'
    });
      return;
    }
    props.onAddParcel(enteredDepartureCity, enteredReceivingCity, enteredParcelType, enteredDateOfDispatch, enteredParcelDescription);
    setEnteredDepartureCity('');
    setEnteredReceivingCity('');
    setEnteredParcelType('');
    setEnteredDateOfDispatch('');
    setEnteredParcelDescription('');
  }

  const departureCityChangeHandler = (event) => {
    setEnteredDepartureCity(event.target.value);
  }

  const receivingCityChangeHandler = (event) => {
    setEnteredReceivingCity(event.target.value);
  }

  const parcelTypeChangeHandler = (event) => {
    setEnteredParcelType(event.target.value);
  }

  const dateOfDispatchChangeHandler = (event) => {
    setEnteredDateOfDispatch(event.target.value);
  }

  const parcelDescriptionChangeHandler = (event) => {
    setEnteredParcelDescription(event.target.value);
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
        {error && <ErrorWindow 
          title={error.title} 
          message={error.message} 
          onConfirm={errorHandler}
        />}
        <Card className={styles.input}>
          <form onSubmit={addParcelHandler}>
              <label htmlFor='departur-city'>*Departure city:</label>
              <input 
                placeholder='Odesa'
                id='departur-city' 
                type='text' 
                value={enteredDepartureCity} 
                onChange={departureCityChangeHandler}
              />
              <label htmlFor='receiving-city'>*City of receiving:</label>
              <input 
                placeholder='Kharkiv'
                id='receiving-city' 
                type='text' 
                value={enteredReceivingCity} 
                onChange={receivingCityChangeHandler}
              />
              <label htmlFor='parcel-type'>Type of parcel:</label>
              <input 
                placeholder='Furniture'
                id='parcel-type' 
                type='text' 
                value={enteredParcelType} 
                onChange={parcelTypeChangeHandler}
              />
              <label htmlFor='dispatch-date'>*Date of dispatch:</label>
              <input 
                placeholder='дд.мм.гггг'
                id='dispatch-date' 
                type='text' 
                value={enteredDateOfDispatch} 
                onChange={dateOfDispatchChangeHandler}
              />
              <label htmlFor='parcel-discription'>Parcel discription:</label>
              <input 
                placeholder='Be careful'
                id='parcel-discription' 
                type='text' 
                value={enteredParcelDescription} 
                onChange={parcelDescriptionChangeHandler}
                />
              <Button type="submit">Add Parcel</Button>
          </form>
        </Card>
    </div>
  );
}

export default AddParcel;