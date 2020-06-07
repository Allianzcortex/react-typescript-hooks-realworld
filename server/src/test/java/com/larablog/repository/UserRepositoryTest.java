//package com.larablog.repository;
//
//import com.larablog.model.User;
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.test.context.ActiveProfiles;
//import org.springframework.test.context.ContextConfiguration;
//import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
//import org.springframework.test.context.web.WebAppConfiguration;
//import org.springframework.transaction.annotation.Transactional;
//
//import javax.persistence.EntityManager;
//import javax.persistence.PersistenceContext;
//
//import static org.junit.Assert.assertThat;
//import static org.hamcrest.CoreMatchers.is;
//
//
//@RunWith(SpringJUnit4ClassRunner.class)
//@ActiveProfiles({"mysql"})
//@WebAppConfiguration
//@ContextConfiguration(classes = {MySqlRepositoryConfigure.class})
//@Transactional
//public class UserRepositoryTest {
//
//
//    @PersistenceContext
//    private EntityManager entityManager;
//
//    @Autowired
//    private UserRepository userRepository;
//
//    private User user;
//
//    @Before
//    public void setup() {
//        user = User.builder()
//                .userName("123")
//                .email("ff@ff.com")
//                .passWord("123")
//                .build();
//    }
//
//    @Test
//    @Transactional
//    public void testSave() {
//        System.err.println("user repository is " + user.getId());
//
//        userRepository.save(user);
//
//
//        entityManager.flush();
//
//        User user1 = userRepository.findByUserName("123");
//
//        System.out.println("user1 是：" + user1);
//        System.err.println("得到的 UserId 是：" + user1.getId());
//
//        assertThat(user1.getUserName(), is("123"));
//
//    }
//
//}
