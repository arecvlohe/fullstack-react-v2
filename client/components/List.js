import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function List({ items = [], handleDelete, className }) {
  return (
    <div className={className}>
      {items.map((item, idx) => {
        return (
          <div key={item._id + idx} className="item">
            <Link to={`/${item._id}`} className="item-title">
              {item.title}
            </Link>{" "}
            <span
              onClick={() => handleDelete(item._id)}
              className="item-delete"
            >
              X
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default styled(List)`
  padding: 20px 0px;
  .item {
    color: #222;
    padding: 10px 10px;
    margin-top: 10px;
    border: 1px solid #222;
    display: flex;
    justify-content: space-between;
    &:last-child {
      border-bottom: 1px solid #222;
    }
    &-title {
      text-decoration: none;
      color: #222;
      text-transform: uppercase;
      &:visited, &:focus, &:active {
        color: #222
      }
    }
    &-delete {
      &:hover {
        cursor: pointer
      }
    }
  }

`;
