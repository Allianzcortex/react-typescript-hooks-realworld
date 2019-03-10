package com.laraforum.service;

import com.laraforum.model.Article;

import java.util.List;

public interface SearchService {
    void initializeSearchService();

    List<Article> fuzzySearch(String searchTerm);
}
