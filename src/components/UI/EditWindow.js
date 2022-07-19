import React, { useState } from 'react';
import Button from './Button';
import Card from '../UI/Card';
import styles from '../UI/ErrorWindow.module.css';

const EditWindow = ({parcel, id, closeModal, editParcel}) => {
    const [editedParcel, setEditParcel] = useState(parcel);

    const changeParsel = (event) => {
        setEditParcel(event.target.value)
    }

    const onSave = () => {
        editParcel({id, item: editedParcel})
        closeModal();
    }

  return (
    <div>   
        <div className={styles.backdrop}/>
        <Card className={styles.window}>
            <header className={styles.header}>
                <h2>Edit mode</h2>
            </header>
                <textarea parcel={parcel} onChange={changeParsel}></textarea>
            <footer className={styles.action}>
                <Button onClick={onSave}>Save</Button>
            </footer>
        </Card>
    </div>
  )
}