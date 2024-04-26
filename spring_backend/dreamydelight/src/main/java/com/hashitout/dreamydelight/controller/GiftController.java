package com.hashitout.dreamydelight.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hashitout.dreamydelight.model.Gift;
import com.hashitout.dreamydelight.service.GiftService;

@RestController
@RequestMapping("/api/gifts")

public class GiftController {
    

    @Autowired
    GiftService giftService;

    @GetMapping("getall")
    public List<Gift> getAllGifts() {
        return giftService.getAllGifts();
    }

     @GetMapping("/{id}")
    public Gift getGiftById(@PathVariable("id") Long id) {
        return giftService.getGiftById(id);
    }

    @PostMapping("/post")
    public Gift addGift(@RequestBody Gift gift) {
        return giftService.addGift(gift);
    }

    @PutMapping("/{id}")
    public Gift updateGift(@PathVariable("id") Long id, @RequestBody Gift gift) {
        gift.setId(id); // Assuming your Gift model has a setId method to update the gift's id
        return giftService.updateGift(gift);
    }

    @DeleteMapping("/{id}")
    public void deleteGift(@PathVariable("id") Long id) {
        giftService.deleteGift(id);
    }

    @DeleteMapping("/deleteall")
    public void deleteAllGifts() {
        giftService.deleteAllGifts();
    }
    
}