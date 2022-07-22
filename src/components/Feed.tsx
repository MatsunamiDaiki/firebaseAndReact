import React, { useState, useEffect } from "react";
import { auth } from "../firebase"

const Feed = () => {
  return (
    <div>
      <button onClick={() => auth.signOut()}></button>
    </div>
  )
}

export default Feed