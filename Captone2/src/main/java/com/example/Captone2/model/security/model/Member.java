package com.example.Captone2.model.security.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.awt.*;

@Entity
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long MemberId;

    String Name;
    String Gender;
    String Age;
    String Phone;
    String DayOfBirth;

    String Image;

    Long AccountId;

    public Member(){}

    public Member(Long memberId, String name, String gender, String age, String phone, String dayOfBirth, String image, Long accountId) {
        MemberId = memberId;
        Name = name;
        Gender = gender;
        Age = age;
        Phone = phone;
        DayOfBirth = dayOfBirth;
        Image = image;
        AccountId = accountId;
    }

    public String getImage() {
        return Image;
    }

    public void setImage(String image) {
        Image = image;
    }

    public Long getMemberId() {
        return MemberId;
    }

    public void setMemberId(Long MemberId) {
        this.MemberId = MemberId;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getGender() {
        return Gender;
    }

    public void setGender(String gender) {
        Gender = gender;
    }

    public String getAge() {
        return Age;
    }

    public void setAge(String age) {
        Age = age;
    }

    public String getPhone() {
        return Phone;
    }

    public void setPhone(String phone) {
        Phone = phone;
    }

    public String getDayOfBirth() {
        return DayOfBirth;
    }

    public void setDayOfBirth(String dayOfBirth) {
        DayOfBirth = dayOfBirth;
    }

    public Long getAccountId() {
        return AccountId;
    }

    public void setAccountId(Long accountId) {
        AccountId = accountId;
    }

    @Override
    public String toString() {
        // TODO Auto-generated method stub
        return "Menber{" +
                "MemberId= " + MemberId +
                ",Name= " + Name +
                ",Gender= " + Gender +
                ",Age=  " + Age +
                ",Phone= " + Phone +
                ",DayOfBirth= " + DayOfBirth +
                // ",AccountId=  " + City +
                "}";
    }


}
