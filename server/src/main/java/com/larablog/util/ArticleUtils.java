package com.larablog.util;

public class ArticleUtils {


    public static String convertTitleToSlug(String title) {
        String pattern = "[^a-zA-Z0-9]+";
        return title.replaceAll(pattern, "-");

    }

}
