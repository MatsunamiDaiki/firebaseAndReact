import React, { useState, useEffect } from "react";
import { auth } from "../firebase"
import TweetInput from "./TweetInput";

const Feed = () => {
  return (
    <div>
      <TweetInput/>
      <button onClick={() => auth.signOut()}></button>
    </div>
  )
}

export default Feed