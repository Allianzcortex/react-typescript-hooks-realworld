package com.laraforum.exception;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.UNAUTHORIZED, reason="Unauthorized")
public class UnAuthorizedException extends RuntimeException {
    private String errorMessage;
    private String throwAble;
    public UnAuthorizedException(String errorMessage,Throwable ex){
        super(errorMessage,ex);
    }
    public UnAuthorizedException(String errorMessage){
        super(errorMessage);
    }
}
