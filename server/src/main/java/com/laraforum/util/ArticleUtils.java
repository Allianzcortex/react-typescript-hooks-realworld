package com.laraforum.util;

import java.util.regex.Pattern;

public class ArticleUtils {


    public static String convertTitleToSlug(String title) {
        String pattern = "[^a-zA-Z0-9]+";
        return title.replaceAll(pattern, "-");

    }

}
