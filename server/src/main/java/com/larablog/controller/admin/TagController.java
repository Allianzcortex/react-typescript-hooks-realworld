package com.larablog.controller.admin;

import com.larablog.model.Tag;
import com.larablog.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/tag")
public class TagController extends AbstractMetaController<Tag> {

    @Autowired
    public TagController(TagService tagService) {
        super(tagService);
    }

}
