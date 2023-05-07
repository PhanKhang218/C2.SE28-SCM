package com.example.Captone2.respositories;

import com.example.Captone2.model.security.model.Booking;
import com.example.Captone2.model.security.model.Class;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    Booking getById(Long id);
}
