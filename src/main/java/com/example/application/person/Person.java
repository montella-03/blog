package com.example.application.person;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import org.springframework.format.annotation.NumberFormat;

public record Person(
        @Email(message = "Please provide a valid email")
        String email,
        @Min(value = 6, message = "Password must be at least 6 characters")
        String password,
        @NotBlank(message = "Please provide a name")
        String name,
        @NotBlank(message = "Please provide a phone number")
        String phone)
{
}
