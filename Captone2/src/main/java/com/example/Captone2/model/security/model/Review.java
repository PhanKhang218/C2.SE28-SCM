package com.example.Captone2.model.security.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
    Date Time;


    public Review(){}

    public Review(Long idReview, Long rate, String comment, Date time) {
        IdReview = idReview;
        Rate = rate;
        Comment = comment;
        Time = time;
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
