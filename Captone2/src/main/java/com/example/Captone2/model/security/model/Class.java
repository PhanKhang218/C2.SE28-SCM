package com.example.Captone2.model.security.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Getter
@Setter

@Entity
public class Class {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long ClassId;

    String ClassName;
    String DayOfWeek;
    String Phone;
    String Price;

    String Star;

    String Description;

    String ClassAddress;
    String OpenTime;
    String CloseTime;
    String Capacity;

    String ClassImage;



    public Class(){}

    public Class(Long classId, String className, String dayOfWeek, String phone, String price, String star, String description, String classAddress, String openTime, String closeTime, String capacity, String classImage) {
        ClassId = classId;
        ClassName = className;
        DayOfWeek = dayOfWeek;
        Phone = phone;
        Price = price;
        Star = star;
        Description = description;
        ClassAddress = classAddress;
        OpenTime = openTime;
        CloseTime = closeTime;
        Capacity = capacity;
        ClassImage = classImage;
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
                ",Start=  " + Star +
                ",Capacity=  " + Capacity +
                ",ClassImage=  " + ClassImage +
                "}";
    }
}
