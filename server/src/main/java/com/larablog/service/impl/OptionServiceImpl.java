package com.larablog.service.impl;

import com.larablog.model.SysOption;
import com.larablog.repository.OptionRepository;
import com.larablog.service.OptionService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.Map;
import java.util.stream.Collectors;

@Service
//@RequiredArgsConstructor(onConstructor_ = @Autowired)

public class OptionServiceImpl implements OptionService {

    public static final String OPTION_CACHE_NAME = "options";

    @Autowired
    private OptionRepository optionRepository;


    @Override
    @Cacheable(value = OPTION_CACHE_NAME, key = "'options'")
    public Map<String, String> getAllOptionMap() {
        return optionRepository.findAll().stream().collect(
                Collectors.toMap(SysOption::getOptionKey, SysOption::getOptionValue));
    }

    @Override
    @Cacheable(value = OPTION_CACHE_NAME, key = "'option['+#key+':'+#defaultValue+']'")
    public <T> T get(String key, T defaultValue) {
        SysOption sysOption = optionRepository.findByOptionKey(key);
        return (T) (sysOption == null || StringUtils.isEmpty(sysOption.getOptionValue()) ?
                defaultValue :
                sysOption.getOptionValue());
    }

    @Override
    public String get(String key) {
        return this.get(key, "");
    }

    @Override
    public void save(String key, String value) {

    }

    @Override
    public void save(Map<String, String> options) {

    }

    @Override
    public Map<String, String> getFrontOptionMap() {
        return null;
    }
}
