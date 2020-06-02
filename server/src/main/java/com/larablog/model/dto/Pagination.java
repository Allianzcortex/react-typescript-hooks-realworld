package com.larablog.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.domain.Page;

import java.util.List;

@Data
@AllArgsConstructor
// convert Spring Jpa Page to Pagination element
public class Pagination<T> {

    private Integer pageNumber;
    private Integer pageSize;
    private Long total;
    private Integer pages;
    private String orderBy;
    private List<T> list;

    @SuppressWarnings("unchecked")
    public static <S> Pagination<S> of(Page<S> page) {
        return new Pagination(
                page.getNumber(),
                page.getSize(),
                page.getTotalElements(),
                page.getTotalPages(),
                page.getSort().toString(),
                page.getContent()
        );
    }

}
