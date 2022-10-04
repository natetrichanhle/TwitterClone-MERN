import React, { useState, useEffect } from 'react'
import axios from 'axios';

import styles from '../static/css/Home.module.css'
import logo from '../static/images/twitterlogo.webp'
import home from '../static/images/home.png';
import explore from '../static/images/explore.png';
import notifications from '../static/images/notifications.png';
import messages from '../static/images/messages.png';
import bookmarks from '../static/images/bookmarks.png';
import lists from '../static/images/lists.png';
import profile from '../static/images/profile.png';
import more from '../static/images/more.png';

import Form from '../components/Form';
import PostList from '../components/PostList';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/post')
            .then(res => {
                setPosts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [setLoaded])

    const createPost = post => {
        axios.post('http://localhost:8000/api/post/new', post)
            .then(res => {
                setPosts([...posts, res.data])
            })
            .catch(err => console.error(err))
    }

    return (
        <div className={styles.container}>
            <div className={`${styles.outerColumn} ${styles.nav}`}>
                <a href="/home"><img src={logo} alt="logo" className={styles.logo}/></a>
                <ul className={styles.links}>
                    <a className={styles.link} href='/home'>
                        <img src={home} alt="home" className={styles.icons}/>
                        <h3>Home</h3>
                    </a>
                    <a className={styles.link} href='/explore'>
                        <img src={explore} alt="explore" className={styles.icons}/>
                        <h3>Explore</h3>
                    </a>
                    <a className={styles.link} href='/notifications'>
                        <img src={notifications} alt="notifications" className={styles.icons}/>
                        <h3>Notifications</h3>
                    </a>
                    <a className={styles.link} href='/messages'>
                        <img src={messages} alt="messages" className={styles.icons}/>
                        <h3>Messages</h3>
                    </a>
                    <a className={styles.link} href='/bookmarks'>
                        <img src={bookmarks} alt="bookmarks" className={styles.icons}/>
                        <h3>Bookmarks</h3>
                    </a>
                    <a className={styles.link} href='/lists'>
                        <img src={lists} alt="lists" className={styles.icons}/>
                        <h3>Lists</h3>
                    </a>
                    <a className={styles.link} href='/profile'>
                        <img src={profile} alt="profile" className={styles.icons}/>
                        <h3>Profile</h3>
                    </a>
                    <a className={styles.link} href='/more'>
                        <img src={more} alt="more" className={styles.icons}/>
                        <h3>More</h3>
                    </a>
                </ul>
                <button className={styles.btn}>Tweet</button>
            </div>
            <div className={styles.insideColumn}>
                <h3 className={styles.homeHeader}>Home</h3>
                <Form
                    onSubmitProp={createPost}
                    initialDescription=''
                />
                {loaded && <PostList posts={posts} />}
            </div>
            <div className={styles.outerColumn}>
                <input 
                    type="search" 
                    placeholder='Search Twitter'
                    className={styles.searchBar}
                />
            </div>
        </div>
    )
}

export default Home