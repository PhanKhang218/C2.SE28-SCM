package com.example.Captone2.respositories;

import com.example.Captone2.model.security.model.Images;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface ImagesRepository extends JpaRepository<Images, Integer> {
   @Query("select m.image from Images m where m.MembershipID =:MembershipID")
    List<String> findByIdMembershipID(Long MembershipID);

    //Images findByImages(Long idDetail);

    @Query("select m from Images m where m.MembershipID =:MembershipID")
    List<Images> findByMembershipID(Long MembershipID);

//    @Modifying
//    @Transactional
//    @Query(value = "DELETE from Images m where m.idDetail=:idDetail")
//    Integer DeleteByLocationId(@Param("idDetail") Long idDetail);

}

