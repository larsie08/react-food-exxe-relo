import React from "react";

import { Link } from "react-router-dom";

const Links = () => {
  return (
    <ul>
      <li>
        <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <img alt="yt-icon" src="./img/yt-icons.webp" />
        </Link>
      </li>
      <li>
        <Link to="https://vk.com" target="_blank">
          <img alt="vk-icon" src="./img/vk-icons.webp" />
        </Link>
      </li>
      <li>
        <Link to="https://telegram.org" target="_blank">
          <img alt="tg-icon" src="./img/tg-icons.webp" />
        </Link>
      </li>
    </ul>
  );
};

export default Links;
