package com.laraforum.service.impl;

import com.laraforum.model.Article;
import com.laraforum.service.SearchService;
import org.apache.lucene.search.Query;
import org.hibernate.search.jpa.FullTextEntityManager;
import org.hibernate.search.jpa.Search;
import org.hibernate.search.query.dsl.QueryBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.metamodel.Metamodel;


import java.util.List;
import java.util.Map;

/**
 * This class will only be used when usres choose to
 * enbale hibernate-search as the full-text search tool.
 * Otherwise the mysql full-text search will be used by default.
 */

@Service
public class SearchServiceImpl implements SearchService {

    @Autowired
    private final EntityManager centityManager;
//
//
//    @Autowired
//    public SearchServiceImpl(EntityManager entityManager) {
//        super();
//        this.centityManager = entityManager;
//    }

    @Autowired
    public SearchServiceImpl(final EntityManagerFactory entityManagerFactory) {
        this.centityManager = entityManagerFactory.createEntityManager();
    }


    @Transactional
    public void initializeSearchService() {
        try {
            FullTextEntityManager fullTextEntityManager = Search.getFullTextEntityManager(centityManager);
            fullTextEntityManager.createIndexer().startAndWait();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }


    @Transactional
    public List<Article> fuzzySearch(String searchTerm) {

        FullTextEntityManager fullTextEntityManager = Search.getFullTextEntityManager(centityManager);
        QueryBuilder qb = fullTextEntityManager.getSearchFactory().buildQueryBuilder().forEntity(Article.class).get();
        Query luceneQuery = qb.keyword().fuzzy().
                // blow line can be edited
//                withEditDistanceUpTo(1).withPrefixLength(1).
        onFields("body").matching(searchTerm).createQuery();

        javax.persistence.Query jpaQuery = fullTextEntityManager.createFullTextQuery(luceneQuery, Article.class);

        // execute search

        List<Article> articleList = null;
        try {
            articleList = jpaQuery.getResultList();
        } catch (NoResultException nre) {
            ;// do nothing

        }

        return articleList;


    }
}
