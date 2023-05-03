package com.example.Captone2.model.security.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long RoomId;

    Long ClassID;
    String RoomName;
    String RoomType;
    Boolean IsBooking;
    String Price;

    public Room(){}

    public Room(Long classID) {
        ClassID = classID;
    }

    public Long getClassID() {
        return ClassID;
    }

    public void seClassID(Long classID) {
        ClassID = classID;
    }
    public Room(Long roomId,String roomName,String roomType,Boolean isBooking,String price){
        RoomId = roomId;
        RoomName = roomName;
        RoomType = roomType;
        IsBooking = isBooking;
        Price = price;
    }

    public Long getRoomId() {
        return RoomId;
    }

    public void setRoomId(Long roomId) {
        RoomId = roomId;
    }

    public String getRoomName() {
        return RoomName;
    }

    public void setRoomName(String roomName) {
        RoomName = roomName;
    }

    public String getRoomType() {
        return RoomType;
    }

    public void setRoomType(String roomType) {
        RoomType = roomType;
    }

    public Boolean getBooking() {
        return IsBooking;
    }

    public void setBooking(Boolean booking) {
        IsBooking = booking;
    }

    public String getPrice() {
        return Price;
    }

    public void setPrice(String price) {
        Price = price;
    }
    public String toString() {
        // TODO Auto-generated method stub
        return "Room{" +
                "RoomID= " + RoomId +
                "ClassID= " + ClassID +
                ",RoomName= " + RoomName +
                ",RoomType= " + RoomType +
                ",IsBooking=  " + IsBooking +
                ",Price= " + Price +
                "}";
    }
}
