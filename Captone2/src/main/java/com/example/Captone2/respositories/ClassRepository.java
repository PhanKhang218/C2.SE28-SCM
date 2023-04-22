package com.example.Captone2.respositories;

import com.example.Captone2.model.security.model.Class;
import com.example.Captone2.model.security.model.Membership;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClassRepository extends JpaRepository<Class, Long> {

    Class getById(Long id);
}
