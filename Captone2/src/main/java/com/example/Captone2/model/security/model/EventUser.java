package com.example.Captone2.model.security.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class EventUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long EvenMembertld ;

    Long Memberld;
    Long Employeeld;
    String EvenName;
    String startTime;
    String doneTime;
    String Decription;

    public EventUser(Long evenMembertld, Long memberld, Long employeeld, String evenName, String startTime, String doneTime, String decription) {
        EvenMembertld = evenMembertld;
        Memberld = memberld;
        Employeeld = employeeld;
        EvenName = evenName;
        this.startTime = startTime;
        this.doneTime = doneTime;
        Decription = decription;
    }

    public EventUser() {

    }

    public Long getEvenMembertld() {
        return EvenMembertld;
    }

    public void setEvenMembertld(Long evenMembertld) {
        EvenMembertld = evenMembertld;
    }

    public Long getMemberld() {
        return Memberld;
    }

    public void setMemberld(Long memberld) {
        Memberld = memberld;
    }

    public Long getEmployeeld() {
        return Employeeld;
    }

    public void setEmployeeld(Long employeeld) {
        Employeeld = employeeld;
    }

    public String getEvenName() {
        return EvenName;
    }

    public void setEvenName(String evenName) {
        EvenName = evenName;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getDoneTime() {
        return doneTime;
    }

    public void setDoneTime(String doneTime) {
        this.doneTime = doneTime;
    }

    public String getDecription() {
        return Decription;
    }

    public void setDecription(String decription) {
        Decription = decription;
    }


    @Override
    public String toString() {
        // TODO Auto-generated method stub
        return "Event{" +
                "EvenMembertld= " + EvenMembertld +
                "Memberld= " + Memberld +
                ",Employeeld= " + Employeeld +
                ",EvenName=" + EvenName +
                ",startTime= " + startTime +
                ",doneTime=  " + doneTime +
                ",Decription=  " + Decription +
                "}";
    }
}
