package com.larablog.model.dto;

import lombok.*;

import javax.validation.constraints.NotEmpty;
import java.util.List;

@RequiredArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ArticleWhenCreated {

    @NotEmpty
    @NonNull
    private String title;

    @NotEmpty
    @NonNull
    private String description;

    @NotEmpty
    @NonNull
    private String body;

    @NonNull
    private List<String> tagList;
}
