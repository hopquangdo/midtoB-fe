package com.example.StudyWithMe.services.auth;
import com.example.StudyWithMe.components.JwtTokenUtils;
import com.example.StudyWithMe.exceptions.DataNotFoundException;
import com.example.StudyWithMe.exceptions.TokenExpiredException;
import com.example.StudyWithMe.models.auth.Token;
import com.example.StudyWithMe.models.auth.User;
import com.example.StudyWithMe.repositories.auth.TokenRepository;
import com.example.StudyWithMe.responses.auth.TokenResponse;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import org.springframework.transaction.annotation.Transactional;
@Service
public class TokenService implements ITokenService {
    @Value("${jwt.expiration}")
    private Long expiration;
    @Value("${jwt.expiration-refresh-token}")
    private Long expirationRefreshToken;
    private final int MAX_TOKENS = 3;
    private final TokenRepository tokenRepository;
    private final JwtTokenUtils jwtTokenUtils;
    public TokenService(TokenRepository tokenRepository,JwtTokenUtils jwtTokenUtils){
        this.tokenRepository = tokenRepository;
        this.jwtTokenUtils = jwtTokenUtils;
    }
    @Transactional
    @Override
    public TokenResponse addToken(User user, String token, String userAgent){
        List<Token> userTokens = tokenRepository.findByUserId(user.getUserId())
                .orElseThrow(()->new DataNotFoundException("Cannot found token"));
        int tokenCount = userTokens.size();
        if (tokenCount >= MAX_TOKENS){
            userTokens.sort(Comparator.comparing(Token::getCreatedAt));
            Token oldestToken = userTokens.get(0);
            tokenRepository.delete(oldestToken);
        }
        for (Token userToken : userTokens) {
            if (!userToken.getUserAgent().equals(userAgent) || userToken.isExpired()) {
                tokenRepository.delete(userToken);
            }
        }
        Date expirationDate = jwtTokenUtils.extractClaim(token, Claims::getExpiration);
        boolean expired = expirationDate != null && expirationDate.before(new Date());
        Token newToken = Token.builder()
                .user(user)
                .userAgent(userAgent)
                .tokenType("Bearer")
                .token(token)
                .expiration(expirationDate)
                .expired(expired)
                .revoked(false)
                .build();
        newToken.setRefreshToken(UUID.randomUUID().toString());
        newToken.setRefreshTokenDate(new Date(System.currentTimeMillis()+expirationRefreshToken*1000000L));
        tokenRepository.save(newToken);
        return TokenResponse.builder()
                .tokenType(newToken.getTokenType())
                .accessToken(newToken.getToken())
                .refreshToken(newToken.getRefreshToken())
                .build();
    }
    @Override
    public void validateToken(String token) {
        Token existingToken = tokenRepository.findByToken(token).orElseThrow(()-> new DataNotFoundException("Token not found"));
        if (existingToken.isExpired() || jwtTokenUtils.isExpired(token)) {
            throw new TokenExpiredException("Token has expired");
        }
    }
    @Transactional
    @Override
    public TokenResponse refreshToken(User user, String refreshToken){
        Token existingToken = tokenRepository.findByRefreshToken(refreshToken)
                .orElseThrow(()->new DataNotFoundException("Cannot found token"));
        if (existingToken.getRefreshTokenDate().after(new Date())){
            throw new TokenExpiredException("Refresh token has expired");
        }
        String newAccessToken = jwtTokenUtils.generateToken(user);
        String newRefreshToken = UUID.randomUUID().toString();
        existingToken.setToken(newAccessToken);
        existingToken.setRefreshToken(newRefreshToken);
        tokenRepository.save(existingToken);
        return TokenResponse.builder()
                .tokenType(existingToken.getTokenType())
                .accessToken(existingToken.getToken())
                .refreshToken(existingToken.getRefreshToken())
                .build();
    }
    @Transactional
    @Override
    public void deleteToken(User user) {
        List<Token> tokens = tokenRepository.findByUserId(user.getUserId())
                .orElseThrow(()->new DataNotFoundException(""));
        tokenRepository.deleteAll(tokens);
    }
}
