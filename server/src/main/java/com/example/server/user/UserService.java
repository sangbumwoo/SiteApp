package com.example.server.user;

import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserService {
    // @Autowired
    private final UserRepository repo;
    
    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    public List<User> listAll() {
        return repo.findAll();
    }

    // POST일경우, Http Response로 201을 response 하는 것이 좋음. 
    // @ResponseStatus(HttpStatus.CREATED)
    /*
    
    ResponseEntity 타입은 Http Auth 등의 추가 정보를 담을때 사용한다. 

     */
}
