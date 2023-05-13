package com.example.Captone2.controller;

import com.example.Captone2.model.security.ResponseObject;
import com.example.Captone2.model.security.model.Member;
import com.example.Captone2.respositories.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/member")
public class MemberController {

    @Autowired
    private MemberRepository memberRepository;

    @GetMapping("")
    public ResponseEntity<List<Member>> getMember() {

        return ResponseEntity.status(HttpStatus.OK).header("Access-Control-Allow-Origin","*").body(
                memberRepository.findAll()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Member> get(@PathVariable Long id) {

        return ResponseEntity.status(HttpStatus.OK).header("Access-Control-Allow-Origin","*").body(
                memberRepository.findById(id).get()
        );
    }

    @PutMapping("put/{id}")
    ResponseEntity<ResponseObject> updateMember(@RequestBody Member newMember, @PathVariable Long id) {
        Member updateMember = memberRepository.findById(id)
                .map(Member -> {
                    Member.setMemberId(newMember.getMemberId());
                    Member.setAge(newMember.getAge());
                    Member.setName(newMember.getName());
                    Member.setGender(newMember.getGender());
                    Member.setPhone(newMember.getPhone());
                    Member.setDayOfBirth(newMember.getDayOfBirth());
                    Member.setAccountId(newMember.getAccountId());
                    Member.setImage(newMember.getImage());
                    return memberRepository.save(Member);
                }).orElseGet(() -> {
                    newMember.setMemberId(id);
                    return memberRepository.save(newMember);
                });
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("ok", "Update Member successfully", updateMember)
        );
    }

    @PostMapping("/insert")
    ResponseEntity<ResponseObject> insertMember (@RequestBody Member newC){
        // content.setId(locationRepositiry.findByLoctionId());
        return ResponseEntity.status(HttpStatus.OK).header("Access-Control-Allow-Origin","*").body(
                new ResponseObject("Ok", "Insert Member successfully", memberRepository.save(newC))
        );
    }

    @DeleteMapping("delete/{id}")
    ResponseEntity deleteMember(@PathVariable Long id) {
        boolean exists = memberRepository.existsById(id);
        if(exists) {
            memberRepository.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK).header("Access-Control-Allow-Origin","*").body(
                    new ResponseObject("ok", "Delete member successfully", "")
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).header("Access-Control-Allow-Origin","*").body(
                new ResponseObject("failed", "Cannot find member to delete", "")
        );
    }


}
