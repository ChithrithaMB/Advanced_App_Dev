package com.hashitout.dreamydelights.service;



import com.hashitout.dreamydelights.model.Gift;
import java.util.List;

public interface GiftService {
    List<Gift> getAllGifts();
    Gift getGiftById(Long id);
    Gift addGift(Gift gift);
    Gift updateGift(Gift gift);
    void deleteGift(Long id);
    void deleteAllGifts();
}