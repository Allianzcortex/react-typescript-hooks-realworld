import React, { Fragment, useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import { useProfileService } from "../../hooks";
import { IProfile } from "../../models/types";

interface IProps {
  profile: IProfile;
}

export const FollowButton = ({ profile }: IProps) => {
  const profileService = useProfileService();
  const {username } = profile;
  const [following,setFollowing] = useState<Boolean>(profile.following)
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

  return (
    <Fragment>
      <Button size="tiny" icon onClick={handleFollowUser}>
        <Icon name="plus" />
        {following ? "Unfolloww" : "Follow"}&nbsp; {username}
      </Button>
    </Fragment>
  );
};
