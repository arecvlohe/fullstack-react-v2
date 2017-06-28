import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import colors from "../colors";

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
    color: lightgray;
    padding: 10px 10px;
    border-top: 1px solid gainsboro;
    display: flex;
    justify-content: space-between;
    &-title {
      text-decoration: none;
      color: lightgray;
      text-transform: uppercase;
      transition: color .3s ease-in-out 0s;
      &:visited, &:focus, &:active {
        color: lightgray;
      }
      &:hover {
        color: ${() => colors.coral};
      }
    }
    &:last-child {
      border-bottom: 1px solid lightgray;
    }
    &-delete {
      transition: color .3s ease-in-out 0s;
      &:hover {
        cursor: pointer;
        color: ${() => colors.black};
      }
    }
  }

`;
