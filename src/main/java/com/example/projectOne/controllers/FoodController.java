package com.example.projectOne.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.projectOne.models.Food;
import com.example.projectOne.services.FoodService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/foods")
public class FoodController {
    
    private final FoodService foodService;

    public FoodController(FoodService foodService){
        this.foodService = foodService;
    }

    @PostMapping
    public ResponseEntity<Food>createFoodItems(@Validated @RequestBody Food food){
        Food fooditem = foodService.createFood(food);
        return new ResponseEntity<>(fooditem,HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<Food>>displayFoodItems(){
        return new ResponseEntity<>(foodService.getAllFoods(),HttpStatus.OK);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Food>displayCurrentFoodItem(@PathVariable Long id){
        Optional<Food> selectedFoodItem = foodService.getCurrentfood(id);
        if(selectedFoodItem.isPresent()){
            return  ResponseEntity.ok(selectedFoodItem.get());
        }
        return ResponseEntity.notFound().build();
    } 
}
