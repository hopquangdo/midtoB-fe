package com.example.StudyWithMe.services.auth;
import com.example.StudyWithMe.components.JwtTokenUtils;
import com.example.StudyWithMe.dataTransferObjects.auth.LoginDTO;
import com.example.StudyWithMe.dataTransferObjects.auth.ChangePasswordRequest;
import com.example.StudyWithMe.dataTransferObjects.auth.RegisterDTO;
import com.example.StudyWithMe.dataTransferObjects.user.ProfileDTO;
import com.example.StudyWithMe.exceptions.AccessDeniedException;
import com.example.StudyWithMe.exceptions.DataNotFoundException;
import com.example.StudyWithMe.exceptions.InvalidParamException;
import com.example.StudyWithMe.models.user.auth.Role;
import com.example.StudyWithMe.models.user.auth.User;
import com.example.StudyWithMe.models.user.profile.Profile;
import com.example.StudyWithMe.repositories.auth.RoleRepository;
import com.example.StudyWithMe.repositories.auth.UserRepository;
import com.example.StudyWithMe.responses.auth.AuthResponse;
import com.example.StudyWithMe.responses.auth.TokenResponse;
import com.example.StudyWithMe.responses.user.ProfileDetailResponse;
import com.example.StudyWithMe.services.user.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
@Service
@RequiredArgsConstructor
public class AuthService implements IAuthService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenUtils jwtTokenUtils;
    private final ITokenService tokenService;
    private final IUserService userService;
    @Transactional
    @Override
    public AuthResponse register(RegisterDTO registerDTO, String userAgent) {
        if (userRepository.existByUserName(registerDTO.getEmail())){
            throw new InvalidParamException("Email already exists!");
        }
        List<Role> roles = new ArrayList<>();
        Role role = roleRepository.findByRoleName(Role.USER)
                .orElseThrow(()-> new DataNotFoundException("Cannot found role"));
        roles.add(role);
        User newUser = User.builder()
                .roles(roles)
                .email(registerDTO.getEmail())
                .password(passwordEncoder.encode(registerDTO.getPassword()))
                .build();
        newUser.setActive(true);
        userRepository.save(newUser);
        Profile newProfile = userService.createProfile(newUser, ProfileDTO.builder()
                        .firstName(registerDTO.getFirstName())
                        .lastName(registerDTO.getLastName())
                        .gender(registerDTO.getGender())
                        .dateOfBirth(registerDTO.getDateOfBirth())
                        .address(registerDTO.getAddress())
                        .avatar(registerDTO.getAvatar())
                        .banner(registerDTO.getBanner())
                .build());
        String newToken = jwtTokenUtils.generateToken(newUser);
        TokenResponse tokenResponse = tokenService.addToken(newUser,newToken,userAgent);
        return AuthResponse.builder()
                .userId(newUser.getUserId())
                .roles(newUser.getRoles().stream().map(Role::getName).collect(Collectors.toList()))
                .token(tokenResponse)
                .profile(ProfileDetailResponse.fromProfile(newProfile))
                .build();
    }
    @Override
    public AuthResponse login(LoginDTO login, String userAgent) {
        User existingUser = userRepository
                .findByUserName(login.getEmail())
                .orElseThrow(()
                        ->new DataNotFoundException("Invalid email / password"));
        Profile profileUser = userService.getProfile(existingUser.getUserId());
        if (!passwordEncoder.matches(login.getPassword(),existingUser.getPassword())){
            throw new BadCredentialsException("Wrong email or password");
        }
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                login.getEmail(), login.getPassword(),
                existingUser.getAuthorities()
        );
        authenticationManager.authenticate(authenticationToken);
        String newToken = jwtTokenUtils.generateToken(existingUser);
        TokenResponse tokenResponse = tokenService.addToken(existingUser,newToken,userAgent);
        return AuthResponse.builder()
                .userId(existingUser.getUserId())
                .roles(existingUser.getRoles().stream().map(Role::getName).collect(Collectors.toList()))
                .token(tokenResponse)
                .profile(ProfileDetailResponse.fromProfile(profileUser))
                .build();
    }
    @Override
    public void logout() {
        String userName = getUserDetail().getUsername();
        User existingUser = userRepository.findByUserName(userName)
                .orElseThrow(() -> new AccessDeniedException("User with username " + userName + " not found."));
        tokenService.deleteToken(existingUser);
    }
    @Override
    public AuthResponse changePassword(ChangePasswordRequest passwordRequest) {
        if (!passwordRequest.getCurrentPassword().equals(passwordRequest.getNewPassword())){
            throw new InvalidParamException("New password must be different from the current password!");
        }
        String userName = getUserDetail().getUsername();
        User existingUser = userRepository.findByUserName(userName)
                .orElseThrow(() -> new AccessDeniedException("User with username " + userName + " not found."));
        if (!passwordEncoder.matches(passwordRequest.getCurrentPassword(), existingUser.getPassword())){
            throw new BadCredentialsException("Current password is incorrect.");
        }
        existingUser.setPassword(passwordEncoder.encode(passwordRequest.getNewPassword()));
        userRepository.save(existingUser);
        tokenService.deleteToken(existingUser);
        String newToken = jwtTokenUtils.generateToken(existingUser);
        TokenResponse tokenResponse = tokenService.addToken(existingUser,newToken,null);
        return AuthResponse.builder()
                .userId(existingUser.getUserId())
                .roles(existingUser.getRoles().stream().map(Role::getName).collect(Collectors.toList()))
                .token(tokenResponse)
                .build();
    }
    @Override
    public void deleteUser(Long userId){
        User existingUser = userRepository.findById(userId)
                .orElseThrow(()-> new DataNotFoundException("Cannot found user with id " + userId));
        userRepository.delete(existingUser);
    }
    @Override
    public UserDetails authenticationToken(String token) {
        tokenService.validateToken(token);
        String userName = jwtTokenUtils.extractEmail(token);
        User existingUser = userRepository.findByUserName(userName)
                .orElseThrow(() -> new DataNotFoundException("Cannot found user with email " + userName));
        if (!existingUser.isActive()){
            throw new InvalidParamException("User is not active");
        }
        return User.builder()
                .email(existingUser.getEmail())
                .roles(existingUser.getRoles())
                .build();
    }
    @Override
    public AuthResponse refreshToken(String refreshToken) {
        String userName = getUserDetail().getUsername();
        User existingUser = userRepository.findByUserName(userName)
                .orElseThrow(() -> new DataNotFoundException(""));

        if (!existingUser.isActive()) {
            throw new InvalidParamException("User is not active");
        }
        TokenResponse tokenResponse = tokenService.refreshToken(existingUser,refreshToken);
        return AuthResponse.builder()
                .userId(existingUser.getUserId())
                .roles(existingUser.getRoles().stream().map(Role::getName).collect(Collectors.toList()))
                .token(tokenResponse)
                .build();
    }
    @Override
    public List<User> getAllUser(PageRequest pageRequest) {
        Page<User> userPage = userRepository.findAll(pageRequest);
        return userPage.getContent();
    }
    @Override
    public List<User> getAllUserForRole(String role,PageRequest pageRequest){
        Page<User> userPage = userRepository.findAllUserByRole(role,pageRequest);
        return userPage.getContent();
    }
    @Override
    public User getUser(Long userId){
        return userRepository.findById(userId)
                .orElseThrow(()->new DataNotFoundException(""));
    }
    @Override
    public User getUserDetail() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            // Handle case where user is not authenticated
            return null;
        }
        Object principal = authentication.getPrincipal();
        if (principal instanceof UserDetails) {
            UserDetails userDetail = (UserDetails) principal;
            return userRepository.findByUserName(userDetail.getUsername())
                    .orElseThrow(()->new DataNotFoundException(""));
        }
        return null;
    }
}
