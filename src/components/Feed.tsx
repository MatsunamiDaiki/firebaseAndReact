import React, { useState, useEffect } from "react";
import styles from "./Feed.module.css";
import { db } from "../firebase";
import TweetInput from "./TweetInput";
// import Post from "./Post";

const Feed = () => {
  return (
    <div className={styles.feed}>
      <TweetInput/>
      <button></button>
    </div>
  )
}

export default Feed