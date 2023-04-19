package com.example.Captone2.model.security.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Schedule_ID;

    private String DateOfWeek;
    private String Time;

    public Schedule(){}

    public Schedule(long schedule_ID, String dateOfWeek, String time) {
        Schedule_ID = schedule_ID;
        DateOfWeek = dateOfWeek;
        Time = time;
    }

    public long getSchedule_ID() {
        return Schedule_ID;
    }

    public void setSchedule_ID(long schedule_ID) {
        Schedule_ID = schedule_ID;
    }

    public String getDateOfWeek() {
        return DateOfWeek;
    }

    public void setDateOfWeek(String dateOfWeek) {
        DateOfWeek = dateOfWeek;
    }

    public String getTime() {
        return Time;
    }

    public void setTime(String time) {
        Time = time;
    }

    @Override
    public String toString() {
        // TODO Auto-generated method stub
        return "Schedule{" +
                "Schedule_ID= " + Schedule_ID +
                ",DateOfWeek= " + DateOfWeek +
                ",Time= " + Time +
                "}";
    }
}
