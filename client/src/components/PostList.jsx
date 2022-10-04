import React, { useState, useEffect } from 'react'
import axios from 'axios'

import styles from '../static/css/PostList.module.css'

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/post')
            .then(res => setPosts(res.data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            {posts.map((post, index) => {
                return (
                    <div key={index}>
                        <p className={styles.postDesc}>{post.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default PostList