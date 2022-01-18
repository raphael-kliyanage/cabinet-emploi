package com.lg3.dsi.ap122021.cabinet.backend.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lg3.dsi.ap122021.cabinet.backend.model.Message;
import com.lg3.dsi.ap122021.cabinet.backend.service.MessageService;

@RestController
@RequestMapping("/api")
public class MessageController {
	@Autowired
	MessageService messageService;
	
	@GetMapping("/messages")
	private List<Message> getAllMessages() {
		return messageService.getAllMessages();
	}
	
	//creating a get mapping that retrieves the detail of a specific message
	@GetMapping("/message/{idMessage}")
	private Message getMessage(@PathVariable("idMessage") int idMessage) {
		return messageService.getMessageById(idMessage);
	}
	
	//creating a delete mapping that deletes a specified message
	@DeleteMapping("/message/delete/{idMessage}")
	private void deleteMessage(@PathVariable("idMessage") int idMessage) {
		messageService.delete(idMessage);
	}
	
	//creating post mapping that post the message detail in the database
	@PostMapping("/message/save")
	private int saveMessage(@RequestBody Message message) {
		messageService.saveOrUpdate(message);
		return message.getIdMessage();
	}
	
	//creating put mapping that updates the message detail 
	@PutMapping("/message")
	private Message update(@RequestBody Message message) {
		messageService.saveOrUpdate(message);
		return message;
	}
}
