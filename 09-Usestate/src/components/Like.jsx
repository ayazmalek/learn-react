import React, { useState } from 'react'

const Like = () => {

  const [likes, setLikes] = useState(0)
  const [liked, setLiked] = useState(false)

  function handleLike() {

    if (liked === false) {
      setLikes(likes + 1)
      setLiked(true)
    } else {
      setLikes(likes - 1)
      setLiked(false)
    }

  }

  return (
    <div>

      <h2> {likes} Likes</h2>

      <button onClick={handleLike}>
        {liked ? "Unlike" : "Like"}
      </button>

    </div>
  )
}

export default Like