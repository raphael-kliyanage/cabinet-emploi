package com.lg3.dsi.ap122021.cabinet.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table
public class Message {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int idMessage;
	
	@Column
	private String lastname;
	
	@Column
	private String firstname;
	
	@Column
	private String email;
	
	@Column
	private int cellPhone;
	
	@Column
	private String subject;
	
	@Column
	private String messageContent;
	
	public int getIdMessage() {
		return idMessage;
	}
	public void setIdMessage(int id) {
		this.idMessage = id;
	}
	
	public String getLastname() {
		return this.lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	
	public String getFirstname() {
		return this.firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	
	public String getEmail() {
		return this.email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public int getCellPhone() {
		return this.cellPhone;
	}
	public void setCellPhone(int number) {
		this.cellPhone = number;
	}
	
	public String getSubject() {
		return this.subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	
	public String getMessage() {
		return this.messageContent;
	}
	public void setMessage(String message) {
		this.messageContent = message;
	}
}
