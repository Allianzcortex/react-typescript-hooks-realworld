package com.larablog.controller;

import com.larablog.exception.TipException;
import com.larablog.model.dto.RestResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletRequest;

@Slf4j
@RestControllerAdvice
/**
 * used to handle exception globally
 */
public class GlobalExceptionHandler {

    @ExceptionHandler(value = TipException.class)
    public RestResponse tipExceptionErrorHandler(HttpServletRequest req, TipException e) {
        return RestResponse.fail(e.getMessage());
    }
}
