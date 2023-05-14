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
public class Sport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long sportId;

    String sportName;
    String sportImage;
    String sportGroup;

    public Sport(){}

    public Sport(Long sportId, String sportName, String sportImage, String sportGroup) {
        this.sportId = sportId;
        this.sportName = sportName;
        this.sportImage = sportImage;
        this.sportGroup = sportGroup;
    }

    @Override
    public String toString() {
        // TODO Auto-generated method stub
        return "Spot{" +
                "sportId= " + sportId +
                "sportName= " + sportName +
                ",sportImage= " + sportImage +
                ",sportGroup=" + sportGroup +
                "}";
    }
}
