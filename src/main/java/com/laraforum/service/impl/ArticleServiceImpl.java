package com.laraforum.service.impl;

import com.laraforum.model.Article;
import com.laraforum.model.Tag;
import com.laraforum.model.User;
import com.laraforum.model.dao.ArticleWhenCreated;
import com.laraforum.repository.ArticleRepository;
import com.laraforum.util.ArticleUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ArticleServiceImpl {

    @Autowired
    private ArticleRepository articleRepository;

    /**
     * org.hibernate.TransientObjectException: object references an unsaved transient instance - save the transient instance before flushing: com.laraforum.model.Tag
	at org.hibernate.engine.internal.ForeignKeys.getEntityIdentifierIfNotUnsaved(ForeignKeys.java:279) ~[hibernate-core-5.3.7.Final.jar:5.3.7.Final]
	at org.hibernate.type.EntityType.getIdentifier(EntityType.java:495) ~[hibernate-core-5.3.7.Final.jar:5.3.7.Final]
	at org.hibernate.type.EntityType.nullSafeSet(EntityType.java:280) ~[hibernate-core-5.3.7.Final.jar:5.3.7.Final]
	at org.hibernate.persister.collection.AbstractCollectionPersister.writeElement(AbstractCollectionPersister.java:911) ~[hibernate-core-5.3.7.Final.jar:5.3.7.Final]
	at org.hibernate.persister.collection.AbstractCollectionPersister.recreate(AbstractCollectionPersister.java:1334) ~[hibernate-core-5.3.7.Final.jar:5.3.7.Final]
	at org.hibernate.action.internal.CollectionRecreateAction.execute(CollectionRecreateAction.java:50) ~[hibernate-core-5.3.7.Final.jar:5.3.7.Final]
	at org.hibernate.engine.spi.ActionQueue.executeActions(ActionQueue.java:604) ~[hibernate-core-5.3.7.Final.jar:5.3.7.Final]
	at org.hibernate.engine.spi.ActionQueue.executeActions(ActionQueue.java:478) ~[hibernate-core-5.3.7.Final.jar:5.3.7.Final]
	at org.hibernate.event.internal.AbstractFlushingEventListener.performExecutions(AbstractFlushingEventListener.java:356) ~[hibernate-core-5.3.7.Final.jar:5.3.7.Final]
	at org.hibernate.event.internal.DefaultFlushEventListener.onFlush(DefaultFlushEventListener.java:39) ~[hibernate-core-5.3.7.Final.jar:5.3.7.Final]
	at org.hibernate.internal.SessionImpl.doFlush(SessionImpl.java:1454) ~[hibernate-core-5.3.7.Final.jar:5.3.7.Final]
	at org.hibernate.internal.SessionImpl.managedFlush(SessionImpl.java:511) ~[hibernate-core-5.3.7.Final.jar:5.3.7.Final]
	at org.hibernate.internal.SessionImpl.flushBeforeTransactionCompletion(SessionImpl.java:3283) ~[hibernate-core-5.3.7.Final.jar:5.3.7.Final]
	at org.hibernate.internal.SessionImpl.beforeTransactionCompletion(SessionImpl.java:2479) ~[hibernate-core-5.3.7.Final.jar:5.3.7.Final]
	at org.hibernate.engine.jdbc.internal.JdbcCoordinatorImpl.beforeTransactionCompletion(JdbcCoordinatorImpl.java:473) ~[hibernate-core-5.3.7.Final.jar:5.3.7.Final]
	at org.hibernate.resource.transaction.backend.jdbc.internal.JdbcResourceLocalTransactionCoordinatorImpl.beforeCompletionCallback(JdbcResourceLocalTransactionCoordinatorImpl.java:178) ~[hibernate-core-5.3.7.Final.jar:5.3.7.Final]
	at org.hibernate.resource.transaction.backend.jdbc.internal.JdbcResourceLocalTransactionCoordinatorImpl.access$300(JdbcResourceLocalTransactionCoordinatorImpl.java:39) ~[hibernate-core-5.3.7.Final.jar:5.3.7.Final]
	at org.hibernate.resource.transaction.backend.jdbc.internal.JdbcResourceLocalTransactionCoordinatorImpl$TransactionDriverControlImpl.commit(JdbcResourceLocalTransactionCoordinatorImpl.java:271) ~[hibernate-core-5.3.7.Final.jar:5.3.7.Final]
	at org.hibernate.engine.transaction.internal.TransactionImpl.commit(TransactionImpl.java:98) ~[hibernate-core-5.3.7.Final.jar:5.3.7.Final]

     * @param user
     * @param article
     * @return
     */
    @Transactional
    public Article createArticle(User user, ArticleWhenCreated article) {

        Date now = new Date();

        List<String> originalTagList = article.getTagList();
        ArrayList<Tag> outputTagList = new ArrayList<Tag>();
        System.out.println("original is " + originalTagList);

//        for (String or : originalTagList) {
//            outputTagList.add(new Tag(or));
//        }
        outputTagList.add(new Tag("gg"));

        Article article1 = Article.builder()
                .slug(ArticleUtils.convertTitleToSlug(article.getTitle()))
                .title(article.getTitle())
                .description(article.getDescription())
                .body(article.getBody())
                .createdAt(now)
                .updatedAt(now)
                .userId(user.getId())
                .tagList(outputTagList)
                .build();
        articleRepository.save(article1);
        return article1;
    }


}
