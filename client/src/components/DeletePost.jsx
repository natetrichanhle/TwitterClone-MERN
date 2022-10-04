import React from 'react'
import axios from 'axios'

import deleteImg from '../static/images/deleteImg.png'
import styles from '../static/css/PostList.module.css'

const DeletePost = (props) => {
    const {postId, successCallback } = props;

    const deletePost = e => {
        axios.delete('http://localhost:8000/api/post/' + postId)
            .then(res => {
                successCallback();
            })
    }

    return (
        <div>
            <img 
                src={deleteImg} 
                alt="delete" 
                onClick={deletePost}
                className={styles.deleteBtn}
                />
        </div>
    )
}

export default DeletePost