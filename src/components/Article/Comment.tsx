import React, { Fragment, SyntheticEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Form, Icon, TextArea } from "semantic-ui-react";
import { useCommentService } from "../../hooks";
import { IComment } from "../../models/types";
import { AppState } from "../../redux/store";
import "./style.css";

interface IProps {
  slug: string;
}

export const Comment = ({ slug }: IProps) => {
  const commentService = useCommentService();
  const [comments, setComments] = useState<IComment[]>([]);
  const [singleComment, setSingleComment] = useState<string>("");
  const { isAuthenticated, user } = useSelector(
    (state: AppState) => state.auth
  );

  const handleCommentChange = (event: SyntheticEvent, data: object) => {
    setSingleComment((data as any).value.trim());
  };

  const retrieveComments = async () => {
    const res = await commentService.getComments(slug);
    // console.log(res);
    setComments(res.data.comments);
  };

  const handleSubmitComment = async () => {
    try {
      await commentService.sendComment(slug, singleComment);
      await retrieveComments();
    } catch (error) {
      // TODO handle error
    }
  };

  const handleDeleteComment = async (id: number) => {
    try {
      await commentService.deleteComment(slug, id);
      retrieveComments();
    } catch (error) {
      // TODO handler
    }
  };

  useEffect(() => {
    // TODO : check whether we need async/await here
    retrieveComments();
  }, []);

  return (
    <Fragment>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            {comment.body}
            {isAuthenticated && user === comment.author.username ? (
              //    <Button size='tiny' icon>
              <Icon
                size="tiny"
                onClick={() => handleDeleteComment(comment.id)}
                name="trash alternate"
              />
            ) : (
              ""
            )}
          </div>
        );
      })}

      <Form className="comment-container">
        <TextArea
          placeholder="leave your comment here"
          onChange={handleCommentChange}
        />
        {isAuthenticated ? (
          <Button
            size="tiny"
            attached="right"
            color="green"
            onClick={handleSubmitComment}
          >
            Post Comment
          </Button>
        ) : (
          <div>
            {" "}
            Please <Link to="/login">Login</Link> to add the comment
          </div>
        )}
      </Form>
    </Fragment>
  );
};
