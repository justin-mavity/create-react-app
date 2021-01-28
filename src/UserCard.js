import React from "react";

export default function UserCard(props) {
  return (
    <div className="cardContainer">
      <div className="title">
        <h2>{props.userInfo.name}</h2>
      </div>
      <div className="imageContainer">
        <img src={props.userInfo.avatar_url} alt={props.userInfo.avatar_url} />
        <h4>{props.userInfo.name}</h4>
      </div>
      <div className="card-texts">
        <p>{props.userInfo.profile}</p>
        <p>{props.userInfo.location}</p>
        <p>
          <a href={props.userInfo.html_url}>{props.userInfo.html_url}</a>
        </p>
        <p>{props.userInfo.followers}</p>
        <p>{props.userInfo.following}</p>
        <p>{props.userInfo.bio}</p>

        <h3>Followers:</h3>

        {props.followers.map((elem) => (
          <div>
            <h4>{elem.login}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}