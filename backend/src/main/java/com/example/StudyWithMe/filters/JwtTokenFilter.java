package com.example.StudyWithMe.filters;
import com.example.StudyWithMe.services.auth.IAuthService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.util.Pair;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;
import java.nio.file.AccessDeniedException;
import java.util.Arrays;
import java.util.List;
@Component
public class JwtTokenFilter extends OncePerRequestFilter {
    @Value("${api.prefix}")
    private String apiPrefix;
    private final IAuthService authService;
    public JwtTokenFilter(IAuthService authService){
        this.authService = authService;
    }
    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request,
                                    @NonNull HttpServletResponse response,
                                    @NonNull FilterChain filterChain)
            throws ServletException, IOException {
        if (isBypassToken(request)){
            filterChain.doFilter(request,response);
            return;
        }
        String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);
            UserDetails userDetails = authService.authenticationToken(token);
            Authentication authentication =
                    new UsernamePasswordAuthenticationToken(userDetails,
                            null,
                            userDetails.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authentication);
            filterChain.doFilter(request, response);
        } else {
            throw new AccessDeniedException("Cannot ");
        }
    }
    private boolean isBypassToken(@NonNull ServletRequest servletRequest) {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        String requestPath = request.getServletPath();
        String requestMethod = request.getMethod();
        final List<Pair<String, String>> bypassRoutes  = Arrays.asList(
                Pair.of(String.format("/%s/file",apiPrefix), "GET"),
                Pair.of(String.format("/%s/task/test",apiPrefix),"POST"),
                Pair.of(String.format("/%s/task", apiPrefix), "GET"),

                Pair.of(String.format("/%s/user/profile/",apiPrefix),"GET"),

                Pair.of(String.format("/%s/auth/login",apiPrefix),"POST"),
                Pair.of(String.format("/%s/auth/register",apiPrefix),"POST")
        );
        for(Pair<String,String> bypassToken:bypassRoutes){
            if (requestPath.contains(bypassToken.getFirst())
                    && requestMethod.equals(bypassToken.getSecond())){
                return true;
            }
        }
        return false;
    }
}
