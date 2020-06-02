package com.larablog.service;

import com.larablog.model.Log;
import com.larablog.model.enums.LogType;
import org.springframework.data.domain.Page;

public interface LogService {

    void save(String data, String message, LogType type);

    void save(String data,String message,LogType type,String ip);

    void save(String data,String message,LogType type,String ip,Integer userId);

    Page<Log> getLogs(Integer page,Integer limit);
}
