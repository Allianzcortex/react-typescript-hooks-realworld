import React, { Dispatch, Fragment, SyntheticEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Comment as SemanticComment,
  Divider,
  Form,
  Icon,
  TextArea,
} from "semantic-ui-react";
import { useCommentService } from "../../hooks";
import { IComment } from "../../models/types";
import { AppState } from "../../redux/store";
import { updateCreppyDefaultImage } from "../../utils";
import { LoaderAction } from "../../redux/reducers/LoaderReducer";

import "./style.css";
import { clearLoading, setLoading } from "../../redux/actions";
import { loadDefs } from "nock/types";

interface IProps {
  slug: string;
}

export const Comment = ({ slug }: IProps) => {
  const commentService = useCommentService();
  const [comments, setComments] = useState<IComment[]>([]);
  const [singleComment, setSingleComment] = useState<string>("");
  const loaderDispatch = useDispatch<Dispatch<LoaderAction>>();
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
      loaderDispatch(setLoading("append comments"))

      await commentService.sendComment(slug, singleComment);
      await retrieveComments();

      loaderDispatch(clearLoading())
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
      <h4>Comments</h4>
      <Divider />
      <SemanticComment.Group>
        {comments.map((comment) => {
          return (
            <SemanticComment>
              <SemanticComment.Avatar
                src={updateCreppyDefaultImage(comment.author.image!)}
              />
              <SemanticComment.Content>
                <SemanticComment.Author as="a">
                  {comment.author.username}
                </SemanticComment.Author>
                <SemanticComment.Metadata>
                  <div>{comment.createdAt}</div>
                </SemanticComment.Metadata>
                <SemanticComment.Text>{comment.body}</SemanticComment.Text>
                <SemanticComment.Action>
                  {isAuthenticated && user === comment.author.username ? (
                    <Icon
                      size="tiny"
                      onClick={() => handleDeleteComment(comment.id)}
                      name="trash alternate"
                    />
                  ) : (
                    ""
                  )}
                </SemanticComment.Action>
                --------
              </SemanticComment.Content>
            </SemanticComment>
            
          );
        })}
      </SemanticComment.Group>

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
            style={{ marginTop: "10px", marginLeft: "auto" }}
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
