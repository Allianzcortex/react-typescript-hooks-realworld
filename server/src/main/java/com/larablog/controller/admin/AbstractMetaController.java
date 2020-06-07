package com.larablog.controller.admin;

import com.larablog.model.Meta;
import com.larablog.model.dto.MetaInfo;
import com.larablog.model.dto.RestResponse;
import com.larablog.service.MetaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


public abstract class AbstractMetaController<META extends Meta> {

    private final MetaService<META> metaService;

    //    @Autowired
    public AbstractMetaController(MetaService<META> metaService) {
        this.metaService = metaService;
    }

    @GetMapping
    public RestResponse<List<MetaInfo>> getAllMetas() {
        return RestResponse.ok(metaService.getAdminMetaInfos());
    }

    @DeleteMapping
    public RestResponse delete(@RequestParam String name) {
        metaService.delete(name);
        return RestResponse.ok();
    }

    @PostMapping
    public RestResponse save(@RequestParam String name) {
        metaService.save(name);
        return RestResponse.ok();
    }

    @PostMapping("{id}")
    public RestResponse update(@PathVariable Integer id, @RequestParam String name) {
        metaService.update(id, name);
        return RestResponse.ok();
    }

}
