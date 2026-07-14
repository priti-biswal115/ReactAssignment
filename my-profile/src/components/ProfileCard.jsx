import { useState } from "react";
import "./ProfileCard.css";

export default function ProfileCard({ name, bio }) {
  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes((prev) => prev + 1);
  }

  return (
    <div className="profile-card">
      <h1>{name}</h1>

      <p>{bio}</p>

      <button className="like-btn" onClick={handleLike}>
        ❤️ Like
      </button>

      <p>{likes} Likes</p>
    </div>
  );
}