package com.hashitout.dreamydelights.service;

import com.hashitout.dreamydelights.dto.request.LoginRequest;
import com.hashitout.dreamydelights.dto.request.RegisterRequest;
import com.hashitout.dreamydelights.dto.response.LoginResponse;

public interface AuthService {
    String register(RegisterRequest registerRequest);

    LoginResponse login(LoginRequest loginRequest);
}