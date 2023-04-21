package com.example.Captone2.controller;

import com.example.Captone2.model.security.ResponseObject;
import com.example.Captone2.model.security.model.Class;
import com.example.Captone2.model.security.model.Member;
import com.example.Captone2.respositories.ClassRepository;
import com.example.Captone2.respositories.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("class")
public class ClassController {

    @Autowired
    private ClassRepository classRepository;

    @GetMapping("")
    public ResponseEntity<List<Class>> getMember() {

        return ResponseEntity.status(HttpStatus.OK).header("Access-Control-Allow-Origin","*").body(
                classRepository.findAll()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Class> get(@PathVariable Long id) {

        return ResponseEntity.status(HttpStatus.OK).header("Access-Control-Allow-Origin","*").body(
                classRepository.findById(id).get()
        );
    }

<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
    @PostMapping("/insert")
    ResponseEntity<ResponseObject> insertContent (@RequestBody Class newC){
        // content.setId(locationRepositiry.findByLoctionId());
        return ResponseEntity.status(HttpStatus.OK).header("Access-Control-Allow-Origin","*").body(
                new ResponseObject("Ok", "Insert Class successfully", classRepository.save(newC))
        );
    }

<<<<<<< Updated upstream
=======
    @PutMapping("put/{id}")
    ResponseEntity<ResponseObject> updateClas(@RequestBody Class newClass, @PathVariable Long id) {
        Class updateClass = classRepository.findById(id)
                .map(Class -> {

                    Class.setClassAddress(newClass.getClassAddress());
                    Class.setClassName(newClass.getClassName());
                    Class.setClassId(newClass.getClassId());
                    Class.setDescription(newClass.getDescription());
                    Class.setDayOfWeek(newClass.getDayOfWeek());
                    Class.setPhone(newClass.getPhone());
                    Class.setCloseTime(newClass.getCloseTime());
                    Class.setPrice(newClass.getPrice());
                    Class.setOpenTime(newClass.getOpenTime());


                    return classRepository.save(Class);
                }).orElseGet(() -> {
                    newClass.setClassId(id);
                    return classRepository.save(newClass);
                });
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("ok", "Update Class successfully", updateClass)
        );
    }

>>>>>>> Stashed changes
    @DeleteMapping("delete/{id}")
    ResponseEntity deleteMember(@PathVariable Long id) {
        boolean exists = classRepository.existsById(id);
        if(exists) {
            classRepository.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK).header("Access-Control-Allow-Origin","*").body(
                    new ResponseObject("ok", "Delete Class successfully", "")
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).header("Access-Control-Allow-Origin","*").body(
                new ResponseObject("failed", "Cannot find Class to delete", "")
        );
    }

}