package com.example.projectOne.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.projectOne.models.Food;
import com.example.projectOne.models.FoodRepository;

@Service
public class FoodServiceImple implements FoodService{
 @Autowired   
FoodRepository foodRepository;

    @Override
    public Food createFood(Food food){
        return foodRepository.save(food);
    }

    @Override
    public List<Food> getAllFoods(){
        return foodRepository.findAll();
    }

    @Override
    public Optional<Food> getCurrentfood(Long id){
        return foodRepository.findById(id);
    }

}
