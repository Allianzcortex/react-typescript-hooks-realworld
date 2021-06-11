import React, {
  ChangeEvent,
  Dispatch,
  Fragment,
  useEffect,
  useState,
} from "react";
import { Button, Form, TextArea } from "semantic-ui-react";
import { useAuthService } from "../../hooks";
import { IProfile, ISettingUser, IUser } from "../../models/types";
import _ from "lodash";
import produce from "immer";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoaderAction } from "../../redux/reducers/LoaderReducer";
import { clearLoading, setLoading } from "../../redux/actions";

export const SettingEditor = () => {
  const [user, setUser] = useState<ISettingUser>({
    email: "",
    username: "",
    bio: "",
    password: "",
    image: "",
  });

  const authService = useAuthService();
  const history = useHistory();
  const loaderDiapatch = useDispatch<Dispatch<LoaderAction>>();

  const retrieveCurrentUser = async () => {
    const res = await authService.getCurrrentUser();
    // // not with strict type ,should find one way to improve it
    // Object.entries(res.data.user).forEach(([key, value]) => {
    //   if (Object.keys(user).includes(key)) {
    //     _.set(settingUser, key, value);
    //   }
    // });
    let settingUser = _.pick(res.data.user, Object.keys(user));
    _.set(settingUser, "password", "");
    setUser(settingUser as ISettingUser);
  };

  useEffect(() => {
    retrieveCurrentUser();
  }, []);

  const handleUpdateField = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    switch (name) {
      default:
        setUser(
          produce(user, (draft) => {
            _.set(draft, name, value);
          })
        );
        break;
    }
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleCreateArticle = async () => {
    loaderDiapatch(setLoading("update user"));

    let payload: object = _.clone(user);
    if (user.password === "") {
      payload = _.omit(payload, "password");
    }
    const res = await authService.updateUser(payload);
    console.log("update value");
    console.log(res);
    //TODO add successful information
    await retrieveCurrentUser();

    loaderDiapatch(clearLoading());
    history.go(0);
  };

  return (
    <Fragment>
      Your Settings
      <Form>
        <Form.Field width={6}>
          <label>Profile</label>
          <input
            name="profile"
            placeholder="URL of profile picture"
            onChange={handleUpdateField}
            value={user.image}
          />
        </Form.Field>

        <Form.Field>
          <label>Username</label>
          <input
            name="username"
            onChange={handleUpdateField}
            value={user.username}
          />
        </Form.Field>
        <Form.Field>
          <label>Short bio about you</label>
          <TextArea
            name="bio"
            onChange={handleUpdateField}
            style={{ minHeight: 100 }}
            value={user.bio}
          />
        </Form.Field>

        <Form.Field>
          <label>Email</label>
          <input name="email" onChange={handleUpdateField} value={user.email} />
        </Form.Field>

        <Form.Field>
          <label>New Password</label>
          <input
            name="password"
            onChange={handleUpdateField}
            value={user.password}
          />
        </Form.Field>

        <Button attached="right" color="green" onClick={handleCreateArticle}>
          Create Article
        </Button>
      </Form>
    </Fragment>
  );
};
