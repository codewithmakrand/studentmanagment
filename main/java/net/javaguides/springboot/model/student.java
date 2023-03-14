package net.javaguides.springboot.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="students")
public class student {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long std_id;
	
	@Column(name="std_name")
	private String std_name;
	
	@Column(name="std_Class")
	private long std_Class;
	
	@Column(name="std_Address")
	private String std_Address;
	
	@Column(name="Phone_no")
	private String Phone_no;
	
	@Column(name="std_fees")
	private long std_fees;
	
	
	public student() {
		
	}
	
	public student(String std_name, long std_Class, String std_Address, String phone_no, long std_fees) {
		super();
		this.std_name = std_name;
		this.std_Class = std_Class;
		this.std_Address = std_Address;
		Phone_no = Phone_no;
		this.std_fees = std_fees;
	}
	
	public long getStd_id() {
		return std_id;
	}
	public void setStd_id(long std_id) {
		this.std_id = std_id;
	}
	public String getStd_name() {
		return std_name;
	}
	public void setStd_name(String std_name) {
		this.std_name = std_name;
	}
	public long getStd_Class() {
		return std_Class;
	}
	public void setStd_Class(long std_Class) {
		this.std_Class = std_Class;
	}
	public String getStd_Address() {
		return std_Address;
	}
	public void setStd_Address(String std_Address) {
		this.std_Address = std_Address;
	}
	public String getPhone_no() {
		return Phone_no;
	}
	public void setPhone_no(String phone_no) {
		Phone_no = phone_no;
	}
	public long getStd_fees() {
		return std_fees;
	}
	public void setStd_fees(long std_fees) {
		this.std_fees = std_fees;
	}
	
	
	
	
	

}
