package com.larablog.service.impl;

import com.larablog.model.enums.LogType;
import com.larablog.repository.LogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class LogServiceImpl {

    private LogRepository logRepository;

    public LogServiceImpl(LogRepository logRepository) {
        this.logRepository = logRepository;
    }

    @Override
    @Transactional(rollbackFor = Throwable.class)
    // TODO since Java doesn't support default parameters like Python
    // it may be refactored into builder pattern later,check https://stackoverflow.com/a/997883 for more details
    public void save(String data, String message, LogType type) {
        this.save(data,message,type,null,null);
    }



}
