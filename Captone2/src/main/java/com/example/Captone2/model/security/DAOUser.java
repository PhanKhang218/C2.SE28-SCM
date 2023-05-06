package com.example.Captone2.model.security;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "user")
public class DAOUser {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private String username;
	@Column
	@JsonIgnore
	private String password;


	private String role;

	private String email;

	private String confirmPassword;

	private String phone;

	public DAOUser(){}
	public DAOUser(long id, String username, String password, String role, String email, String confirmPassword, String phone) {
		this.id = id;
		this.username = username;
		this.password = password;
		this.role = role;
		this.email = email;
		this.confirmPassword = confirmPassword;
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}

	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}


	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "Infor{" +
				"id= " + id +
				"username= " + username +
				",password= " + password +
				",role=" + role +
				",email= " + email +
				",confirmPassword=  " + confirmPassword +
				",phone=  " + phone +
				"}";
	}

}