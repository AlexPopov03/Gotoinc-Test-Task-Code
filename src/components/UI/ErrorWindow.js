import React from 'react';
import Button from './Button';
import Card from './Card';
import styles from '../UI/ErrorWindow.module.css'

const ErrorWindow = (props) => {
  return (
    <div>
        <div className={styles.backdrop} onClick={props.onConfirm}/>
        <Card className={styles.window}>
            <header className={styles.header}>
                <h2>Oops.. {props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.action}>
                <Button onClick={props.onConfirm}>Continue</Button>
            </footer>
        </Card>
    </div>
  )
}

export default ErrorWindow