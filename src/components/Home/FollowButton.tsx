import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Icon } from "semantic-ui-react";
import { useProfileService } from "../../hooks";
import { IProfile } from "../../models/types";
import { AppState } from "../../redux/store";

interface IProps {
  profile: IProfile;
}

export const FollowButton = ({ profile }: IProps) => {
  const profileService = useProfileService();
  const { username } = profile;
  const [following, setFollowing] = useState<Boolean>(profile.following);
  const { isAuthenticated, user } = useSelector(
    (state: AppState) => state.auth
  );
  const handleFollowUser = async () => {
    let res;
    try {
      if (following) {
        res = await profileService.unfollowUser(username);
      } else {
        res = await profileService.followUser(username);
      }
      const profile = res.data.profile as IProfile;
      setFollowing(profile.following);
    } catch (error) {
      // TODO add error dispatcher to handle error
    }
  };

  if (isAuthenticated && user !== username) {
    return (
      <Fragment>
        {}
        <Button size="tiny" icon onClick={handleFollowUser}>
          <Icon name="plus" />
          {following ? "Unfolloww" : "Follow"}&nbsp; {username}
        </Button>
      </Fragment>
    );
  }

  return <Fragment></Fragment>;
};
