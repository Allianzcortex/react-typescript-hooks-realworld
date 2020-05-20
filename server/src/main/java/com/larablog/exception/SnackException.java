package com.larablog.exception;

import org.springframework.http.HttpStatus;

public class SnackException extends CustomException {

    public SnackException(String message){
        super(message, HttpStatus.BAD_REQUEST);
    }

    public SnackException(Throwable cause) {
        super(cause);
    }
}
