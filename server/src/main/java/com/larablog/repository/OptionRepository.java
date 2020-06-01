package com.larablog.repository;

import com.larablog.model.SysOption;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OptionRepository extends JpaRepository<SysOption, Integer> {

    SysOption findByOptionKey(String key);
}
