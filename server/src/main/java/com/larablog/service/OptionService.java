package com.larablog.service;

import java.util.Map;

public interface OptionService {

    Map<String, String> getAllOptionMap();

    <T> T get(String key, T defaultValue);

    String get(String key);

    void save(String key, String value);

    void save(Map<String, String> options);

    Map<String, String> getFrontOptionMap();
}
