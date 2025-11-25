package com.carshop.config;

import com.carshop.model.Car;
import com.carshop.repository.CarRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDatabase(CarRepository repository) {
        return args -> {
            // Add sample cars to the database
            repository.save(new Car("Ford", "Mustang", "Red", 2021, 45000));
            repository.save(new Car("Nissan", "Leaf", "White", 2020, 29000));
            repository.save(new Car("Toyota", "Camry", "Silver", 2022, 35000));
            repository.save(new Car("BMW", "X5", "Black", 2023, 75000));
            repository.save(new Car("Mercedes", "C-Class", "Blue", 2021, 55000));
            repository.save(new Car("Honda", "Civic", "Gray", 2022, 28000));
            repository.save(new Car("Tesla", "Model 3", "White", 2023, 48000));
            repository.save(new Car("Audi", "A4", "Black", 2022, 52000));

            System.out.println("Sample cars loaded into database!");
        };
    }
}
