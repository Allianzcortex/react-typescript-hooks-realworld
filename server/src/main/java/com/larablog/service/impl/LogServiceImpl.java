package com.larablog.service.impl;

import com.larablog.model.Log;
import com.larablog.model.enums.LogType;
import com.larablog.repository.LogRepository;
import com.larablog.service.LogService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class LogServiceImpl implements LogService {

    private LogRepository logRepository;

    public LogServiceImpl(LogRepository logRepository) {
        this.logRepository = logRepository;
    }

    @Override
    @Transactional(rollbackFor = Throwable.class)
    // TODO since Java doesn't support default parameters like Python
    // it may be refactored into builder pattern later,check https://stackoverflow.com/a/997883 for more details
    public void save(String data, String message, LogType type) {
        this.save(data, message, type, null, null);
    }

    @Override
    @Transactional(rollbackFor = Throwable.class)
    public void save(String data, String message, LogType type, String ip) {
        this.save(data, message, type, ip, null);
    }

    @Override
    @Transactional(rollbackFor = Throwable.class)
    public void save(String data, String message, LogType type, String ip, Integer userId) {
        Log log = Log.builder()
                .data(data)
                .message(message)
                .type(type)
                .ip(ip)
                .userId(userId)
                .build();
        logRepository.save(log);
    }

    @Override
    public Page<Log> getLogs(Integer page, Integer limit) {
        return logRepository.findAll(PageRequest.of(page, limit));
    }

}
