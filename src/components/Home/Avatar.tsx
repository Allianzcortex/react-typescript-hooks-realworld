import React, { Dispatch, useEffect } from "react";
import { Image } from "semantic-ui-react";
import { updateCreppyDefaultImage } from "../../utils";

interface IProps {
  image: string;
  username: string;
}

export const Avatar = ({ image, username }: IProps) => {

  return (
    <div>
      <Image src={updateCreppyDefaultImage(image)} avatar />
      <span>{username}</span>
    </div>
  );
};
