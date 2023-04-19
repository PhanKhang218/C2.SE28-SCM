package com.example.Captone2.model.security.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Class {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long ClassId;

    String ClassName;
    String Phone;
    String Price;
    String OpenTime;
    String CloseTime;
    String ClassAddress;
    String DayOfWeek;
    String Description;

    public Class(){}



    public Class(Long classId, String className, String phone, String price, String openTime, String closeTime, String classAddress, String dayOfWeek, String description) {
        ClassId = classId;
        ClassName = className;
        Phone = phone;
        Price = price;
        OpenTime = openTime;
        CloseTime = closeTime;
        ClassAddress = classAddress;
        DayOfWeek = dayOfWeek;
        Description = description;
    }


    public Long getClassId() {
        return ClassId;
    }

    public void setClassId(Long classId) {
        ClassId = classId;
    }

    public String getClassName() {
        return ClassName;
    }

    public void setClassName(String className) {
        ClassName = className;
    }

    public String getPhone() {
        return Phone;
    }

    public void setPhone(String phone) {
        Phone = phone;
    }

    public String getPrice() {
        return Price;
    }

    public void setPrice(String price) {
        Price = price;
    }

    public String getOpenTime() {
        return OpenTime;
    }

    public void setOpenTime(String openTime) {
        OpenTime = openTime;
    }

    public String getCloseTime() {
        return CloseTime;
    }

    public void setCloseTime(String closeTime) {
        CloseTime = closeTime;
    }

    public String getClassAddress() {
        return ClassAddress;
    }

    public void setClassAddress(String classAddress) {
        ClassAddress = classAddress;
    }

    public String getDayOfWeek() {
        return DayOfWeek;
    }

    public void setDayOfWeek(String dayOfWeek) {
        DayOfWeek = dayOfWeek;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }


    @Override
    public String toString() {
        // TODO Auto-generated method stub
        return "Class{" +
                "ClassId= " + ClassId +
                ",ClassName= " + ClassName +
                ",Phone= " + Phone +
                ",Price=  " + Price +
                ",OpenTime=  " + OpenTime +
                ",CloseTime= " + CloseTime +
                ",ClassAddress= " + ClassAddress +
                ",DayOfWeek=  " + DayOfWeek +
                ",Description=  " + Description +
                "}";
    }
}
