# LaraForum [![Build Status](https://travis-ci.com/Allianzcortex/LaraForum.svg?token=eY1dQPtFsNYcmsgAHTB5&branch=master)](https://travis-ci.com/Allianzcortex/LaraForum)


`LaraForum` is a full-stack forum with Spring Boot as skeleton and Spring Data JPA as ORM to provide restful api in controller.

If you just want to a MVP(Minimal Valuable Product) to learn Angular , I will recommend you to my [class-project](https://github.com/Allianzcortex/code_collection/tree/master/Spring-Boot-Based-Database-TeamProject) which is simplier and implemented all CRUD functions.

---

This application includes :

- `user registration/login/Change Account Info/logout` function

- Users can `add/delete  posts/comments`,the action above will trigger `notifications` that can be read

- `topic creation/deletion`

- article classification by `tag`

- page search  based on `MySQL Full-text Search` or `Fuzzy matching` keyword with `Lucene`.

---

Some APIs will be like:

- get single article by slug

```
get /api/articles/get/single/{slug}

return:
{
    'id':{id},
    'name':{name},
    'tag':[1,2,3]
}
```

- get batch articles by multiple conditions ：
```
get /api/articles/get/batch?tag=xx&author=yy
```

- push notifications to certain user
```
post /api/read/notice/{userId}
```

- add permissions for user
```
/api/permission/add/{user}/2
```

- set roles for user

```
/api/role/add/{user}/2
```

- search by keyword
```
/api/search/{keyWord}
```
... etc

---

Except using `@ControllerAdvice` to handle global exception and `@ResponseEntity` to return the header and data both.There are also some other features:


1. LightWeight:

这里轻量级指的是除了 Springboot+Spring JPA+Spring MVC 外其它的
组件都没有涉及到，两个比较重要的功能①`认证(authentication)`和
`鉴权(authorization)`没有用到 spring-security 或者 shrio，是单独
实现的。

① 对认证 authentication，默认采用的是 JWT，每次验证是由 `filter` 提供，参见 [代码](https://github.com/Allianzcortex/LaraForum/blob/master/src/main/java/com/laraforum/authentication/GetJwtTokenFilter.java)，每次判断则是由 `interceptor` 提供，参见 [代码](https://github.com/Allianzcortex/LaraForum/blob/master/src/main/java/com/laraforum/authentication/ParseJwtTokenInterceptor.java)。得到的值会用 request.setAttribute 写入后由后端应用读取，避免
重复验证。关于 jwt 实现过期 logout 在纯后端应用里相对难实现(前端直接删除 jwtToken 即可，现在
采用的方法是存储到数据库里，不符合 stateless 无状态思想，因为原话是会 requires a DB lookup each time)。比较理想
的做法是在 SO 上看到的这个 [评论](https://stackoverflow.com/questions/21978658/invalidating-json-web-tokens#comment45057142_23089839)，在写入 Token 的值里进行操作，后续会实现这一点。

② 对权限管理 `authorization`,采用的是`注解@`+ 用 AspectJ 实现 AOP 去做。实现的两个注解分别是 `@RequirePermissiona`([代码](https://github.com/Allianzcortex/LaraForum/blob/master/src/main/java/com/laraforum/authorization/RequirePermissions.java)) 和 `@RequireRoles`([代码](https://github.com/Allianzcortex/LaraForum/blob/master/src/main/java/com/laraforum/authorization/RequireRoles.java)),之后统一 [管理]([代码](https://github.com/Allianzcortex/LaraForum/blob/master/src/main/java/com/laraforum/authorization/RolesAndPermissionsChecker.java))，分别判断用户是否可以去执行对应行为。使用时只需要在方法前加入
@RequirePermission("youPermission") ，就会自动判断，对业务逻辑代码没有影响，类似于 Python 的装饰器。比如对于这段 [代码](https://github.com/Allianzcortex/LaraForum/blob/104b16fcd8847aa84bb9f5947d57f8c848fb3e5a/src/main/java/com/laraforum/controller/OtherController.java#L86)，用户必须有 `create_post` 的权限，才能发表帖子。

```
@RequirePermissions("create_post")
@Transactional
@PostMapping("permission/add/{userName}/{pNumber}")
public void addUserPermission(@PathVariable String userName, @PathVariable Integer pNumber) {
   // logic
}

```

---

2. UnitTest 与 IntegrationTest 

这一点主要是因为看到的很多 sprint boot 代码里都缺少相应的测试，所以希望能补充完整。看到的文章里也有关于这两个测试的争论，比如有 SO 的回答说因为 spring 应用与现实交互所以 IntegrationTest
能更好反映程序的运行，也有文章说要以 UnitTest 为主测试单个函数的正确性，所以就都做了....
主要用的框架是 `Junit` 与 `Mockito`，在 Repository 层面进行了 IntegrationTest，判断是否能真的写入
数据库里([代码](https://github.com/Allianzcortex/LaraForum/blob/master/src/test/java/com/laraforum/repository/UserRepositoryTest.java))，在 Service 层面进行了 UnitTest，判断是否会调用对应 Repository 的行为([代码](https://github.com/Allianzcortex/LaraForum/blob/master/src/test/java/com/laraforum/service/UserServiceMockitoTest.java)).

```
@Test
public void whenUserSave_thenCheckSuccess(){
     userServiceMock.save(user);
     verify(userRepositoryMock).save(user);
}
```

在 Controller 层面则同时进行两种测试，判断得到的对应结果是否符合期望，同时判断是否会调用对应 Service 的行为([代码](https://github.com/Allianzcortex/LaraForum/blob/master/src/test/java/com/laraforum/controller/UserControllerMockitoTest.java))。暂时测试了 `User/UserRepositor/UserService/UserController` ，后续会进一步补充。



![](http://ww1.sinaimg.cn/large/a5215df1ly1g12m2nalbkj20jh02nmx3.jpg)

因为是纯后端应用所以暂时没有界面，就发一张
Postman 的截图吧(：

![](http://ww1.sinaimg.cn/large/a5215df1ly1g12m3gjb4lj20cw08j0sv.jpg)

整体来说还有很多要优化的点，后续也会一直开发这个项目并写前端进行匹配，多谢大家的支持quq

---

#### Project Structure 

```
├── main
│   ├── java
│   │   └── com
│   │       └── laraforum
│   │           ├── authentication
│   │           │   ├── GetJwtTokenFilter.java
│   │           │   ├── JwtProvider.java
│   │           │   ├── ParseJwtTokenFilter.java
│   │           │   └── ParseJwtTokenInterceptor.java
│   │           ├── authorization
│   │           │   ├── RequirePermissions.java
│   │           │   ├── RequireRoles.java
│   │           │   └── RolesAndPermissionsChecker.java
│   │           ├── configuration
│   │           │   ├── FilterConfigure.java
│   │           │   ├── InterceptorConfigure.java
│   │           │   ├── MySqlRepositoryConfigure.java
│   │           │   ├── RepositoryConfig.java
│   │           │   └── SearchConfiguration.java
│   │           ├── controller
│   │           │   ├── ArticleController.java
│   │           │   ├── CommentController.java
│   │           │   ├── OtherController.java
│   │           │   └── UserContoller.java
│   │           ├── exception
│   │           │   ├── CustomException.java
│   │           │   ├── Handle
│   │           │   │   └── ResponseEntityException.java
│   │           │   └── UnAuthorizedException.java
│   │           ├── LaraApplication.java
│   │           ├── model
│   │           │   ├── ArticleComment.java
│   │           │   ├── Article.java
│   │           │   ├── Comment.java
│   │           │   ├── dto
│   │           │   │   ├── ArticleView.java
│   │           │   │   ├── ArticleWhenCreated.java
│   │           │   │   └── UserWithEmailAndPassWord.java
│   │           │   ├── enums
│   │           │   │   ├── Permission.java
│   │           │   │   └── Role.java
│   │           │   ├── Favorite.java
│   │           │   ├── Notification.java
│   │           │   ├── Tag.java
│   │           │   ├── Token.java
│   │           │   └── User.java
│   │           ├── repository
│   │           │   ├── ArticleCommentRepository.java
│   │           │   ├── ArticleRepository.java
│   │           │   ├── CommentRepository.java
│   │           │   ├── FavoriteRepository.java
│   │           │   ├── NotificationRepository.java
│   │           │   ├── PermissionRepository.java
│   │           │   ├── RoleRepository.java
│   │           │   ├── TagRepocitory.java
│   │           │   ├── TokenRepository.java
│   │           │   └── UserRepository.java
│   │           ├── service
│   │           │   ├── ArticleCommentService.java
│   │           │   ├── ArticleService.java
│   │           │   ├── CommentService.java
│   │           │   ├── FavoriteService.java
│   │           │   ├── impl
│   │           │   │   ├── ArticleCommentServiceImpl.java
│   │           │   │   ├── ArticleServiceImpl.java
│   │           │   │   ├── CommentServiceImpl.java
│   │           │   │   ├── FavoriteServiceImpl.java
│   │           │   │   ├── NotificationServiceImpl.java
│   │           │   │   ├── PermissionServiceImpl.java
│   │           │   │   ├── RoleServiceImpl.java
│   │           │   │   ├── SearchServiceImpl.java
│   │           │   │   ├── TokenServiceImpl.java
│   │           │   │   └── UserServiceImpl.java
│   │           │   ├── NotificationService.java
│   │           │   ├── PermissionService.java
│   │           │   ├── RoleService.java
│   │           │   ├── SearchService.java
│   │           │   ├── TokenService.java
│   │           │   └── UserService.java
│   │           └── util
│   │               ├── ArticleUtils.java
│   │               └── TestUtils.java
│   └── resources
│       ├── application.properties
│       ├── db-schema.sql
│       └── static
│           └── images
│               └── register.png
└── test
    └── java
        └── com
            └── laraforum
                ├── authentication
                │   └── JwtTokenTest.java
                ├── configuration
                │   └── ServiceTestConfiguration.java
                ├── controller
                │   └── UserControllerMockitoTest.java
                ├── LaraApplicationTests.java
                ├── repository
                │   └── UserRepositoryTest.java
                ├── service
                │   └── UserServiceMockitoTest.java
                ├── UserEntityTest.java
                └── utils
                    └── ArticleUtilsTest.java
```


