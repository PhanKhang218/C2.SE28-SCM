package com.example.Captone2.respositories;


import com.example.Captone2.model.security.DAOUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<DAOUser, Long> {
}
