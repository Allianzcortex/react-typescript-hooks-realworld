package com.larablog.model.dto;

import com.larablog.model.Article;
import com.larablog.model.Comment;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
// We just need to add aditional attributs with comment
public class CommentDto extends Comment {

    private Article article;

    private Comment parentComment;
}
