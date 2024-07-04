package com.mycompany.myapp.security;

import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

public class ApiKeyConfigurer extends SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> {

    private final String apiKey;

    public ApiKeyConfigurer(String apiKey) {
        this.apiKey = apiKey;
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {
        ApiKeyFilter apiKeyFilter = new ApiKeyFilter(apiKey);
        http.addFilterBefore(apiKeyFilter, UsernamePasswordAuthenticationFilter.class);
    }
}
