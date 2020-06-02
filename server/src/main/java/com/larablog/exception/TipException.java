package com.larablog.exception;

import org.springframework.http.HttpStatus;

public class TipException extends CustomException {

    public TipException() {

    }

    public TipException(String message) {
        super(message, HttpStatus.BAD_REQUEST);
    }

    public TipException(Throwable cause) {
        super(cause);
    }
}
