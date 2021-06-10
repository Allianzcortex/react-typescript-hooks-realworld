import React, { Fragment } from "react";
import { Button, Icon } from "semantic-ui-react";
import { useProfileService } from "../../hooks";

interface IProps {
  following: boolean;
  setFollowing: any;
  username: string;
  handleFollowing?: () => {};
}

export const FollowButton = ({ following, setFollowing, username }: IProps) => {
  const profileService = useProfileService();

  const handleFollowUser = async () => {
    let res;
    try {
      if (following) {
        res = await profileService.unfollowUser(username);
      } else {
        res = await profileService.followUser(username);
      }
      setFollowing(res.data.profile.following);
    } catch (error) {
        // TODO add error dispatcher to handle error
    }
  };

  return (
    <Fragment>
      <Button size="tiny" icon onClick={handleFollowUser}>
        <Icon name="plus" />
        {following ? "Unfolloww" : "Follow"}&nbsp; {username}
      </Button>
    </Fragment>
  );
};