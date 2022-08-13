import React, { useState, useEffect, useMemo } from "react";
import styles from "./Feed.module.css";
import { db } from "../firebase";
import TweetInput from "./TweetInput";
import Post from "./Post";
import _orderBy from 'lodash/orderBy'

type OrderType = 'asc' | 'desc'
type Key = 'text'

interface currentSort {
  order: OrderType
  key: Key
}

const Feed: React.FC = () => {
  const [posts, setPosts] = useState([
    {
      id: "",
      avatar: "",
      image: "",
      text: "",
      timestamp: null,
      username: "",
    },
  ]);
  const [currentSort, setCurrentSort] = useState<currentSort>({
    order: 'asc',
    key: 'text'
  })

  const requestSort = (sortKey: Key) => {
    const selectedOrder = currentSort.order === 'asc' ? 'desc' : 'asc'
    setCurrentSort({order: selectedOrder, key: sortKey})
  }

  const sortedPosts = useMemo(() => {
    const targetPosts = [...posts]
    return _orderBy(targetPosts, currentSort.key, currentSort.order)
  },[currentSort])

  useEffect(() => {
    const unSub = db
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            avatar: doc.data().avatar,
            image: doc.data().image,
            text: doc.data().text,
            timestamp: doc.data().timestamp,
            username: doc.data().username,
          }))
        )
      );
    return () => {
      unSub();
    };
  }, []);

  return (
    <div className={styles.feed}>
      <TweetInput/>
      <button onClick={() => requestSort('text')}>並び替え</button>
      {posts.length && (
        <>
          {sortedPosts.map((post) => (
            <Post
              key={post.id}
              postId={post.id}
              avatar={post.avatar}
              image={post.image}
              text={post.text}
              timestamp={post.timestamp}
              username={post.username}
            />
          ))}
        </>
      )}
    </div>
  )
}

export default Feed
