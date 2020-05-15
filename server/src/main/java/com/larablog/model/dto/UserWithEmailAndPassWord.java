package com.larablog.model.dto;

import lombok.*;

import javax.validation.constraints.NotEmpty;

@AllArgsConstructor
// https://github.com/rzwitserloot/lombok/issues/1563
// lombok no Creators, like default construct, exist): cannot deserialize from Object
// like this issue I comment :https://github.com/spring-guides/tut-rest/issues/67
// why add no args_constructor will work ?
// TODO
@NoArgsConstructor
@Getter
@Setter
public class UserWithEmailAndPassWord {

    @NotEmpty
    private String email;

    @NotEmpty
    private String passWord;
}
