package com.example.projectOne.services;

import java.util.List;
import java.util.Optional;

import com.example.projectOne.models.Food;

public interface FoodService {
    public Food createFood(Food food);
    public List<Food> getAllFoods();
    public Optional<Food>getCurrentfood(Long id);
}
