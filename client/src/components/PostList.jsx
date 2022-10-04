import React, { useState, useEffect } from 'react'
import axios from 'axios'

import styles from '../static/css/PostList.module.css'
import DeletePost from './DeletePost'

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/post')
            .then(res => setPosts(res.data))
            .catch(err => console.error(err))
    }, [])

    const removeFromDom = postId => {
        setPosts(posts.filter(post => post._id !== postId))
    }

    return (
        <div>
            {posts.map((post, index) => {
                return (
                    <div key={index} className={styles.postContainer}>
                        <p className={styles.postDesc}>{post.description}</p>
                        <DeletePost 
                            postId={post._id}
                            successCallback={() => removeFromDom(post._id)}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default PostList