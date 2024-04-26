package com.hashitout.dreamydelight.repo;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.hashitout.dreamydelight.model.User;

public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}