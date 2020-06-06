package com.larablog.model.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.List;

@Data
public class MetaInfo {

    private Integer id;
    private String name;

    @JsonInclude
    private List<ArticleInfo> articleInfos;
}
