package com.hashitout.dreamydelight.service.impl;

import com.hashitout.dreamydelight.model.Gift;
import com.hashitout.dreamydelight.repo.GiftRepo;
import com.hashitout.dreamydelight.service.GiftService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class GiftServiceImpl implements GiftService {

    private final GiftRepo giftRepo;

    @Autowired
    public GiftServiceImpl(GiftRepo giftRepo) {
        this.giftRepo = giftRepo;
    }

    @Override
    public List<Gift> getAllGifts() {
        List<Gift> gifts = new ArrayList<>();
        giftRepo.findAll().forEach(gifts::add);
        return gifts;
    }

    @Override
    public Gift getGiftById(Long id) {
        Optional<Gift> giftOptional = giftRepo.findById(id);
        if (!giftOptional.isPresent()) {
            throw new RuntimeException("Gift not found for id " + id);
        }
        return giftOptional.get();
    }

    @Override
    public Gift addGift(Gift gift) {
        return giftRepo.save(gift);
    }

    @Override
    public Gift updateGift(Gift gift) {
        if (gift.getId() != null && giftRepo.existsById(gift.getId())) {
            return giftRepo.save(gift);
        } else {
            throw new RuntimeException("Gift not found for id " + gift.getId());
        }
    }

    @Override
    public void deleteGift(Long id) {
        giftRepo.deleteById(id);
    }

    @Override
    public void deleteAllGifts() {
        giftRepo.deleteAll();
    }
}