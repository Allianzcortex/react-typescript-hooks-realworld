package com.larablog;


import com.larablog.configuration.MySqlRepositoryConfigure;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.PlatformTransactionManager;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

import static org.junit.Assert.assertNotNull;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = MySqlRepositoryConfigure.class)
@ActiveProfiles("mysql")
public class UserEntityTest {

    @Autowired
    DataSource dataSource;

    @Autowired
    EntityManagerFactory entityManagerFactory;

    @Autowired
    PlatformTransactionManager transactionManager;

    @Test
    public void createsDataSource() {
        assertNotNull(dataSource);
    }

    @Test
    public void createsEntityManagerFactory() {
        assertNotNull(entityManagerFactory);
    }

    @Test
    public void createsTransactionManager() {
        assertNotNull(transactionManager);
    }
}
