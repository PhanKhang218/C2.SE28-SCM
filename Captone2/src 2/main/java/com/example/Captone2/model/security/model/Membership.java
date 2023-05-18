package com.example.Captone2.model.security.model;

import lombok.Builder;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Membership {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long MembershipID;

    Long ClassID;
    String MembershipName;
    String ClassAddress;
    String RegisterDate;
    String EndDate;
    String DayOfWeek;
    String ExpireDate;

    @ManyToMany(mappedBy = "membershipList")
    private List<Member> members = new ArrayList<>();

    public Membership(){}

    public Membership(Long membershipID, Long classID, String membershipName, String classAddress, String registerDate, String endDate, String dayOfWeek, String expireDate) {
        MembershipID = membershipID;
        ClassID = classID;
        MembershipName = membershipName;
        ClassAddress = classAddress;
        RegisterDate = registerDate;
        EndDate = endDate;
        DayOfWeek = dayOfWeek;
        ExpireDate = expireDate;
    }

    public Long getMembershipID() {
        return MembershipID;
    }

    public void setMembershipID(Long membershipID) {
        MembershipID = membershipID;
    }

    public Long getClassID() {
        return ClassID;
    }

    public void setClassID(Long classID) {
        ClassID = classID;
    }

    public String getMembershipName() {
        return MembershipName;
    }

    public void setMembershipName(String membershipName) {
        MembershipName = membershipName;
    }

    public String getClassAddress() {
        return ClassAddress;
    }

    public void setClassAddress(String classAddress) {
        ClassAddress = classAddress;
    }

    public String getRegisterDate() {
        return RegisterDate;
    }

    public void setRegisterDate(String registerDate) {
        RegisterDate = registerDate;
    }

    public String getEndDate() {
        return EndDate;
    }

    public void setEndDate(String endDate) {
        EndDate = endDate;
    }

    public String getDayOfWeek() {
        return DayOfWeek;
    }

    public void setDayOfWeek(String dayOfWeek) {
        DayOfWeek = dayOfWeek;
    }

    public String getExpireDate() {
        return ExpireDate;
    }

    public void setExpireDate(String expireDate) {
        ExpireDate = expireDate;
    }

    public List<Member> getMembers() {
        return members;
    }

    public void setMembers(List<Member> members) {
        this.members = members;
    }

    @Override
    public String toString() {
        // TODO Auto-generated method stub
        return "Membership{" +
                "MembershipID= " + MembershipID +
                ",ClassID= " + ClassID +
                ",MembershipName=  " + MembershipName +
                ",ClassAddress=  " + ClassAddress +
                ",RegisterDate= " + RegisterDate +
                ",EndDate=  " + EndDate +
                ",DayOfWeek=  " + DayOfWeek +
                ",ExpireDate=  " + ExpireDate +
                "}";
    }
}
