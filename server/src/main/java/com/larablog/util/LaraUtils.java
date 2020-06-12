package com.larablog.util;

import com.larablog.exception.TipException;
import com.larablog.exception.UserNotLoginException;
import com.larablog.model.User;
import com.vladsch.flexmark.ast.Node;
import com.vladsch.flexmark.html.HtmlRenderer;
import com.vladsch.flexmark.parser.Parser;
import com.vladsch.flexmark.util.options.MutableDataSet;
import org.springframework.util.DigestUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Objects;
import java.util.Optional;

public class LaraUtils {

    /**
     * markdown resolver
     */

    private static final MutableDataSet MARKDOWN_OPTIONS = new MutableDataSet();

    private LaraUtils() {
        throw new TipException("Only singleton is allowed, no other exceptions");
    }

//    public static User getLoginUser() {
//
//    }

    // Markdown Resolver & Html render
    private static final Parser PARSER = Parser.builder(MARKDOWN_OPTIONS).build();
    private static final HtmlRenderer HTML_RENDER = HtmlRenderer.builder(MARKDOWN_OPTIONS).build();


    public static String getMd5(String str) {
        String base = str + Constants.MD5_SALT;
        return DigestUtils.md5DigestAsHex(base.getBytes());
    }

    public static HttpServletRequest getRequest() {
        ServletRequestAttributes attrs = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        return Objects.requireNonNull(attrs).getRequest();
    }

    public static HttpSession getSession() {
        return getRequest().getSession();
    }

    public static User getLoginUser() {
        HttpSession session = getSession();
        return (User) Optional.ofNullable(session.getAttribute(Constants.USER_SESSION_KEY))
                .orElseThrow(UserNotLoginException::new);
    }

    public static String convertMD2HTML(String mdContent) {
        if (mdContent == null || StringUtils.isEmpty(mdContent))
            return "";
        Node document = PARSER.parse(mdContent);
        return HTML_RENDER.render(document);
    }

}
