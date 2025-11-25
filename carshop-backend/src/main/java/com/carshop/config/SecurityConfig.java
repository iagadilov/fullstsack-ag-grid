package com.carshop.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        // SECURITY DISABLED FOR LAB 10
        // This configuration permits all requests without authentication
        // to facilitate initial frontend development

        // Original JWT security configuration (commented out):
        // http.csrf().disable()
        //     .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        //     .and()
        //     .authorizeHttpRequests()
        //     .requestMatchers("/api/login").permitAll()
        //     .anyRequest().authenticated()
        //     .and()
        //     .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        // Permit all requests without authentication
        http.csrf(csrf -> csrf.disable())
            .cors(cors -> cors.configure(http))
            .authorizeHttpRequests(auth -> auth
                .anyRequest().permitAll()
            );

        return http.build();
    }
}
