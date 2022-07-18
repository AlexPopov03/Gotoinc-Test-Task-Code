import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from '../Add/ParcelList.module.css'

const ParcelList = (props) => {

  return (
    
    <Card className={styles.parcel}>
        <ul>
            {props.parcels.map((parcel, index) => 
              <li key={parcel.id}>
              <ol>Parcel number: {index + 1}</ol>       
              <ol>Departure city: {parcel.departure}</ol>          
              <ol>Receiving city: {parcel.receiving}</ol>                
              <ol>Parcel type: {parcel.type}</ol>                     
              <ol>Date: ({parcel.date})</ol>
              <ol>Description: {parcel.description}</ol>
              <Button onClick={() => props.remove(parcel)}>Delete</Button>                  
            </li>
            )}
        </ul>
    </Card>
  )
}

export default ParcelList;