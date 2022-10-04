import React, { useState } from 'react'
import { useEffect } from 'react'

import styles from '../static/css/Home.module.css'

const Form = (props) => {
    const {initialDescription, onSubmitProp} = props
    const [description, setDescription] = useState(initialDescription)

    const onSubmitHandler = e => {
        e.preventDefault()
        onSubmitProp({description});
        window.location.reload()
    }

    return (
        <div>
            <form className={styles.form} onSubmit={onSubmitHandler}>
                    <textarea 
                        placeholder="What's happening?"
                        className={styles.formInput}
                        value={description}
                        name='description'
                        onChange={(e) => {setDescription(e.target.value)}}
                    />
                    <input type="submit" value='Tweet'className={styles.tweetBtn}/>
                </form>
        </div>
    )
}

export default Form