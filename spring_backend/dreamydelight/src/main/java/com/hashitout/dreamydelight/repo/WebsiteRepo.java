package com.hashitout.dreamydelight.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hashitout.dreamydelight.model.Website;

public interface WebsiteRepo extends JpaRepository<Website, Long>{
   
}
