package com.larablog.model.dto;

import lombok.Data;

import java.util.List;

@Data
public class Archive {

    private String year;
    private List<ArticleInfo> articleInfos;
}
