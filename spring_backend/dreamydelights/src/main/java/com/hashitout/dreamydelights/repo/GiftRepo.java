package com.hashitout.dreamydelights.repo;



import com.hashitout.dreamydelights.model.Gift;
import org.springframework.data.repository.CrudRepository;


public interface GiftRepo extends CrudRepository<Gift, Long>{
}