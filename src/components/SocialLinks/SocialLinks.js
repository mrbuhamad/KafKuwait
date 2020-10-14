import React from "react";
import { NavLink } from "react-router-dom";

import FontAwesome from "../UiStyle/FontAwesome";

const SocialLinks = () => {
  return (
    <ul className="socialLinks">
      {/* <li>
        <NavLink to="www.facebook.com">
          <FontAwesome name="facebook" />
        </NavLink>
      </li> */}
      <li>
        <NavLink to="www.twitter.com">
          <FontAwesome name="twitter" />
        </NavLink>
      </li>
      <li>
        <NavLink to="https://www.instagram.com/kaf_kuwait/?hl=en">
          <FontAwesome name="instagram" />
        </NavLink>
      </li>
      <li>
        <NavLink to="www.linkedin.com">
          <FontAwesome name="linkedin" />
        </NavLink>
      </li>
    </ul>
  );
};

export default SocialLinks;
