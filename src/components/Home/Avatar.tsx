import React, { Dispatch, useEffect } from "react";
import { Image } from "semantic-ui-react";

interface IProps {
  image: string;
  username: string;
}

export const Avatar = ({ image, username }: IProps) => {

  const updateCreppyDefaultImage = (image: string) => {

    // Am I the only one that thinks default avatar is creppy ? 
    if (image === "https://static.productionready.io/images/smiley-cyrus.jpg") {
      return 'https://react.semantic-ui.com/images/wireframe/square-image.png';
    }
    return image;
  };

  return (
    <div>
      <Image src={updateCreppyDefaultImage(image)} avatar />
      <span>{username}</span>
    </div>
  );
};
