package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFound;
import net.javaguides.springboot.model.student;
import net.javaguides.springboot.repository.studentrepo;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/v1/")
public class studentController {
	@Autowired
	private studentrepo StudentRepo;

	
	@GetMapping("/student")
	@CrossOrigin(origins="http://localhost:4200")
	public List<student> getstudent(){
		return StudentRepo.findAll();
	}
	
	@PostMapping("/student")
	public student addstudent (@RequestBody student Student) {
		return StudentRepo.save(Student);
	}
	
	@GetMapping("/student/{id}")
	public ResponseEntity<student> getStudentById(@PathVariable Long id) {
		student Student = StudentRepo.findById(id).orElseThrow(()->new ResourceNotFound("student not exist with id : " + id));
		return ResponseEntity.ok(Student);
	}
	
	
	@PutMapping("/student/{id}")
	public ResponseEntity<student> updatestudent(@PathVariable Long id,@RequestBody student StudentDetail){
		student Student = StudentRepo.findById(id).orElseThrow(()->new ResourceNotFound("student not exist with id : " + id));
		
		Student.setStd_name(StudentDetail.getStd_name());
		Student.setStd_Class(StudentDetail.getStd_Class());
		Student.setStd_Address(StudentDetail.getStd_Address());
		Student.setPhone_no(StudentDetail.getPhone_no());
		Student.setStd_fees(StudentDetail.getStd_fees());
		
		
		student updatedstudent=StudentRepo.save(Student);
		return ResponseEntity.ok(updatedstudent);
	}
	
	@DeleteMapping("/student/{id}")
	public ResponseEntity<Map<String,Boolean>> deletestudent(@PathVariable Long id){
		student Student=StudentRepo.findById(id).orElseThrow(()->new ResourceNotFound("student not exist with id : "+id));
		
		StudentRepo.delete(Student);
		Map<String,Boolean> response=new HashMap<>();
		response.put("deleted", Boolean.TRUE);
            return ResponseEntity.ok(response);
	}
}



