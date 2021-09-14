import React from "react";
import { Link } from "react-router-dom";
const Users = (prors) => (
  <div className="data-container">
    {prors.users.map((user) => {
      return (
        <div className="data-box" key={user.id}>
          <p>
            ID:<span> {user.id}</span>
          </p>
          <p>
            TITLE:
            <span>
              {" "}
              {user.title.length < 24
                ? `${user.title}`
                : `${user.title.substring(0, 24)}...`}
            </span>
          </p>
          <button className="post-button">
            <Link
              to={{
                pathname: `/post/${user.id}`,
                state: { title: user.title },
              }}
            >
              {" "}
              Show Post
            </Link>
          </button>
        </div>
      );
    })}
  </div>
);

export default Users;
