import React, {
  Dispatch,
  Fragment,
  SetStateAction,
  SyntheticEvent,
} from "react";
import { useDispatch } from "react-redux";
import { Label, SemanticCOLORS } from "semantic-ui-react";
import { NotificationAction } from "../../redux/reducers/NotifyReducer";
import { setWarning } from "../../redux/actions";
import "./style.css";

interface IProps {
  tags: string[];
  tab: string;
  currentTag: string | undefined;
  setCurrentTag: Dispatch<SetStateAction<string | undefined>>;
}

export const TagList = ({ tags, tab, currentTag, setCurrentTag }: IProps) => {
  const colors = [
    "red",
    "orange",
    "yellow",
    "olive",
    "green",
    "blue",
    "purplepink",
    "brown",
    "grey",
  ];

  const notifyDispatch = useDispatch<Dispatch<NotificationAction>>();

  const handleTagClick = (event: SyntheticEvent, data: object) => {
    const newTag = (data as any).children;
    if (tab === "feed") {
      // not support yet
      notifyDispatch(
        setWarning("tag select only works for global feed currently.")
      );
      return;
    }
    if (newTag === currentTag) {
      // disable current tag ansd set it to undefined
      setCurrentTag(undefined);
    } else {
      setCurrentTag(newTag);
    }
  };

  return (
    <Fragment>
      {tags.map((tag) => {
        return (
          <Label
            key={tag}
            as="a"
            color={tag === currentTag ? "black" : "grey"}
            horizontal
            onClick={handleTagClick}
          >
            {tag}
          </Label>
        );
      })}
    </Fragment>
  );
};
