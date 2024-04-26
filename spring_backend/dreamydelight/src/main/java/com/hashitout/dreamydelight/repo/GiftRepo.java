package com.hashitout.dreamydelight.repo;



import com.hashitout.dreamydelight.model.Gift;
import org.springframework.data.repository.CrudRepository;


public interface GiftRepo extends CrudRepository<Gift, Long>{
}