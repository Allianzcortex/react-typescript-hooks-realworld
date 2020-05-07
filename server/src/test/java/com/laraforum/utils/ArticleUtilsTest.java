package com.laraforum.utils;

import static org.junit.Assert.assertEquals;


import com.laraforum.util.ArticleUtils;
import org.junit.Test;

public class ArticleUtilsTest {

    @Test
    public void convertTitleToSlugTest() {
        String title = "Foo Bar Test";
        assertEquals("Foo-Bar-Test", ArticleUtils.convertTitleToSlug(title));
    }

}
