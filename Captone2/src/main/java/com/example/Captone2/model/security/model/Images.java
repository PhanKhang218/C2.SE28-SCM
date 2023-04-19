package com.example.Captone2.model.security.model;

import javax.persistence.*;

@Entity
public class Images {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    String image;

    @Column(name = "MembershipID")
    Long MembershipID;

    public Images(){}

    public Images(Integer id, String image, Long membershipID) {
        this.id = id;
        this.image = image;
        MembershipID = membershipID;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Long getMembershipID() {
        return MembershipID;
    }

    public void setMembershipID(Long membershipID) {
        MembershipID = membershipID;
    }
}
