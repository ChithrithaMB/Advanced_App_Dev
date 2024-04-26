package com.hashitout.dreamydelight.service;

import com.hashitout.dreamydelight.dto.request.LoginRequest;
import com.hashitout.dreamydelight.dto.request.RegisterRequest;
import com.hashitout.dreamydelight.dto.response.LoginResponse;

public interface AuthService {
    String register(RegisterRequest registerRequest);

    LoginResponse login(LoginRequest loginRequest);
}
