package com.example.Captone2.config;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;



@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
@RequiredArgsConstructor
@org.springframework.beans.factory.annotation.Qualifier("authenticationManager")
public class WebSecurityConfig  {
    @Autowired
    private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;

    @Autowired
    private UserDetailsService jwtUserDetailsService;

    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    public void authenticationManager(AuthenticationManagerBuilder auth) throws Exception {

        auth.inMemoryAuthentication().withUser("abc").password("abc123").roles("USER");
        auth.inMemoryAuthentication().withUser("tak269").password("anhkiet123").roles("ADMIN");
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();

        authProvider.setUserDetailsService(jwtUserDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());

        return authProvider;
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        // We don't need CSRF for this example
        http.csrf().disable()
                // dont authenticate this particular request
                // không xác thực yêu cầu cụ thể này
                .authorizeRequests()
                .antMatchers("/authenticate", "/register").permitAll()
                .antMatchers("/locations/**").hasAnyRole("ADMIN")

                // all other requests need to be authenticated
                //tất cả các yêu cầu khác cần phải được xác thực
                .anyRequest().authenticated().and().
               // .anyRequest().fullyAuthenticated().and().httpBasic();

                // make sure we use stateless session; session won't be used to
                // store user's state.
                // đảm bảo rằng chúng tôi sử dụng phiên không trạng thái; phiên sẽ không được sử dụng để
                // lưu trữ trạng thái của người dùng.
                        exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint).and().sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        //http.authenticationProvider(authenticationProvider());
//        http.authorizeRequests().antMatchers("/locations/**").hasAnyRole("ADMIN")
//                .anyRequest().fullyAuthenticated().and().httpBasic();


        // Add a filter to validate the tokens with every request
        //Thêm bộ lọc để xác thực mã thông báo với mọi yêu cầu
        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}