package com.example.Captone2.model.security.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long BookingId;

    Long ClassId;

    Long RoomID;

    Long MemberID;

    String DateFrom;
    String DateTo;
    String Price;

    public Booking(){}

    public Booking(Long classId, Long roomID, Long memberID) {

        ClassId = classId;
        RoomID = roomID;
        MemberID = memberID;
    }

    public Long getClassId() {
        return ClassId;
    }

    public void setClassId(Long classId) {
        ClassId = classId;
    }

    public Long getRoomID() {
        return RoomID;
    }

    public void setRoomID(Long roomID) {
        RoomID = roomID;
    }

    public Long getMemberID() {
        return MemberID;
    }

    public void setMemberID(Long memberID) {
        MemberID = memberID;
    }

    public Booking(Long bookingId,Boolean isBooking,String dateFrom,String dateTo,String price){
        BookingId = bookingId;
        DateFrom = dateFrom;
        DateTo = dateTo;
        Price = price;
    }

    public Long getBookingId() {
        return BookingId;
    }

    public void setBookingId(Long bookingId) {
        BookingId = bookingId;
    }

    public String getDateFrom() {
        return DateFrom;
    }

    public void setDateFrom(String dateFrom) {
        DateFrom = dateFrom;
    }

    public String getDateTo() {
        return DateTo;
    }

    public void setDateTo(String dateTo) {
        DateTo = dateTo;
    }

    public String getPrice() {
        return Price;
    }

    public void setPrice(String price) {
        Price = price;
    }

    @Override
    public String toString() {
        // TODO Auto-generated method stub
        return "Booking{" +
                "BookingID= " + BookingId +
                "ClassID= " + ClassId +
                ",RoomID= " + RoomID +
                ",MemberID=" + MemberID +
                ",DateFrom=  " + DateFrom +
                ",DateTo= " + DateTo +
                ",Price=  " + Price +
                "}";
    }
}
