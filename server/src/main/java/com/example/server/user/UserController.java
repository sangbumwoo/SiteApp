package com.example.server.user;

import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api-v1/users")
public class UserController {

    // @Autowired
    private final UserService service;
    
    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping
    // public ResponseEntity<List<User>> getAllUsers() {
    public List<User> getAllUsers() {        
        return service.listAll();
    }
}
