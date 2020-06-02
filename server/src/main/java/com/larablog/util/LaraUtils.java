package com.larablog.util;

import com.larablog.exception.TipException;
import com.vladsch.flexmark.ast.Node;
import com.vladsch.flexmark.util.options.MutableDataSet;
import org.springframework.util.DigestUtils;

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

    public static String getMd5(String str) {
        String base = str + Constants.MD5_SALT;
        return DigestUtils.md5DigestAsHex(base.getBytes());
    }

}
