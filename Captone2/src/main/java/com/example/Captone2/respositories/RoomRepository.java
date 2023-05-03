package com.example.Captone2.respositories;

import com.example.Captone2.model.security.model.Class;
import com.example.Captone2.model.security.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RoomRepository extends JpaRepository<Room, Long> {

//    @Query("select r from Room r where r.RoomId=:RoomId")
//    Room findByRoomId(Long RoomId);
    Room getById(Long id);
}
