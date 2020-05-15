package com.larablog.utils;

import static org.junit.Assert.assertEquals;


import com.larablog.util.ArticleUtils;
import org.junit.Test;

public class ArticleUtilsTest {

    @Test
    public void convertTitleToSlugTest() {
        String title = "Foo Bar Test";
        assertEquals("Foo-Bar-Test", ArticleUtils.convertTitleToSlug(title));
    }

}
