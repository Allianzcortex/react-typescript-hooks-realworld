package com.laraforum.exception.Handle;

import com.laraforum.exception.UnAuthorizedException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@EnableWebMvc
public class ResponseEntityException extends ResponseEntityExceptionHandler {
    @ExceptionHandler(value = UnAuthorizedException.class)
    public ResponseEntity<Object> handleAuthorized(
            RuntimeException ex, WebRequest request) {
        return handleExceptionInternal(ex, "Unauthorized Exception",
                new HttpHeaders(), HttpStatus.CONFLICT, request);
    }

}
