package com.example.Captone2.model.security.model;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@Entity

public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long IdReview;


    Long Rate;
    String Comment;
    String Time;


    @ManyToOne
    @JoinColumn(name = "MemberId")
    private Member memberR;
    @ManyToOne
    @JoinColumn(name = "RoomId")
    private Member roomR;
    public Review(){}

    public Review(Long idReview, Long rate, String comment, String time) {
        IdReview = idReview;
        Rate = rate;
        Comment = comment;
        Time = time;
    }

    public Member getRoomR() {
        return roomR;
    }

    public void setRoomR(Member roomR) {
        this.roomR = roomR;
    }

    public Long getIdReview() {
        return IdReview;
    }

    public void setIdReview(Long idReview) {
        IdReview = idReview;
    }

    public Long getRate() {
        return Rate;
    }

    public void setRate(Long rate) {
        Rate = rate;
    }

    public String getComment() {
        return Comment;
    }

    public void setComment(String comment) {
        Comment = comment;
    }

    public String getTime() {
        return Time;
    }

    public void setTime(String time) {
        Time = time;
    }

    public Member getMemberR() {
        return memberR;
    }

    public void setMemberR(Member memberR) {
        this.memberR = memberR;
    }

    @Override
    public String toString() {
        // TODO Auto-generated method stub
        return "Review{" +
                "IdReview= " + IdReview +
                "Rate= " + Rate +
                ",Comment= " + Comment +
                ",Time=" + Time +
                "}";
    }
}
