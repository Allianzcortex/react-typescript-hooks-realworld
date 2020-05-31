package com.larablog.util;

import com.larablog.exception.TipException;
import com.vladsch.flexmark.ast.Node;
import com.vladsch.flexmark.util.options.MutableDataSet;

public class LaraUtils {

    /**
     * markdown resolver
     */

    private static final MutableDataSet MARKDOWN_OPTIONS=new MutableDataSet();

    private LaraUtils() {
        throw new TipException("Only singleton is allowed, no other exceptions");
    }

//    public static User getLoginUser() {
//
//    }



}
