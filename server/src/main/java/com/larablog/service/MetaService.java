package com.larablog.service;

public interface MetaService<META> {
    /**
     * name can be either category name or tag name
     * @param name
     * @return
     */
    Integer delete(String name);

    META save(String name);

    META update(Integer id,String name);

    boolean saveOrRemoveMetas(String name,Integer articleId);


}
