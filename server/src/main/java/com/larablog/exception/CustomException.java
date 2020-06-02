package com.larablog.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.HttpStatus;

//@Data
//@AllArgsConstructor
public class CustomException extends RuntimeException {

    private String message;
    private HttpStatus httpStatus;

    public CustomException() {

    }

    public CustomException(String message, HttpStatus httpStatus) {
        this.message = message;
        this.httpStatus = httpStatus;
    }

    public CustomException(Throwable cause) {
        super(cause);
    }

}
