package com.mycompany.myapp.security;

import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
// import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class ApiKeyAuthProvider implements AuthenticationProvider {

    private final String apiKey;
    private final UserDetailsService userDetailsService;

    public ApiKeyAuthProvider(String apiKey, UserDetailsService userDetailsService) {
        this.apiKey = apiKey;
        this.userDetailsService = userDetailsService;
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String requestApiKey = (String) authentication.getPrincipal();
        if (apiKey.equals(requestApiKey)) {
            UserDetails userDetails = userDetailsService.loadUserByUsername("api-user");
            return new ApiKeyAuthenticationToken(userDetails, userDetails.getAuthorities());
        } else {
            throw new UsernameNotFoundException("Invalid API Key");
        }
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return ApiKeyAuthenticationToken.class.isAssignableFrom(authentication);
    }
}
