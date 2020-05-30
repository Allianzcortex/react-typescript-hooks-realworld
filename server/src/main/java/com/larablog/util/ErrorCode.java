package com.larablog.util;

/**
 * a wrapper for customized error code
 */
public enum ErrorCode {

    RUNTIME(1000,"RuntimeException"),

    NULL_POINTER(1001,"NullPointerException"),

    CLASS_CAST(1002,"ClassCastException");



    private final int code;
    private final String message;

    ErrorCode(int code,String message) {
        this.code=code;
        this.message=message;
    }

    public int getCode() {
        return this.code;
    }

    public String getMessage() {
        return this.message;
    }
}
