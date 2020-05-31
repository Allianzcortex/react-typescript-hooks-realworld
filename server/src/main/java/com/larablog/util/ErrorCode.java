package com.larablog.util;

/**
 * a wrapper for customized error code
 */
public enum ErrorCode {

    RUNTIME(1000,"RuntimeException"),

    NULL_POINTER(1001,"NullPointerException"),

    CLASS_CAST(1002,"ClassCastException"),

    IO_ERROR(1003,"IOException"),

    NO_SUCH_METHOD(1004,"NoSuchMethodException"),

    INDEX_OUT_OF_BOUND(1005,"IndexOutOfBoundsException"),

    // TODO should change it into 1006,status code should not be mixed
    // with restful status code
    BAD_REQUEST(400,"Bad Request"),

    NOT_FOUND(404,"Not Found"),

    METHOD_NOT_ALLOWED(405,"method not allowed"),

    NOT_ACCEPTABLE(406," Not Acceptable"),

    NOT_PROCESSABLE(442,"Not Processable Entity"),

    INTERNAL_SERVER_ERROR(500,"Internal Server Error"),

    NOT_LOGIN(1006,"User Not Login");



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
