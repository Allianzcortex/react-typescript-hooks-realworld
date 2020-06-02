package com.larablog.exception;

import lombok.Getter;

@Getter
public class NotFoundException extends TipException {

    private Class<?> clz;


    public NotFoundException(Class<?> clz) {
        this.clz = clz;
    }
}
