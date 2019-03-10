package com.laraforum.configuration;

import com.laraforum.service.SearchService;
import com.laraforum.service.impl.SearchServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;


import javax.persistence.EntityManagerFactory;



@EnableTransactionManagement
@Configuration
public class SearchConfiguration {

    @Autowired
    private EntityManagerFactory bentityManager;

    @Bean
    @Transactional
    SearchServiceImpl searchService() {

        SearchServiceImpl searchService = new SearchServiceImpl(bentityManager);
        searchService.initializeSearchService();
        return searchService;
    }
}
