package com.larablog.controller.admin;

import com.larablog.model.Category;
import com.larablog.model.Meta;
import com.larablog.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/category")
public class CategoryController extends AbstractMetaController<Category> {

    @Autowired
    public CategoryController(CategoryService categoryService) {
        super(categoryService);
    }
}
