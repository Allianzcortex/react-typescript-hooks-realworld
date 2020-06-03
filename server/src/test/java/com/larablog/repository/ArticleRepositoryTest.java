package com.larablog.repository;


import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;


import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ArticleRepositoryTest {

    @Autowired
    private ArticleRepository articleRepository;

    @Before
    public void setUp() throws Exception {

    }

    @After
    public void tearDown() throws Exception {
    }

    @Test
    public void findByIdAndStatus() {
    }

    @Test
    public void findAllByStatus() {
    }

    @Test
    public void findAllByStatusNot() {
    }

    @Test
    public void testFindAllByStatus() {
    }

    @Test
    public void countByStatusNot() {
    }
}
