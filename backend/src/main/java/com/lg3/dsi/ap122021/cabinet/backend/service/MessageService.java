package com.lg3.dsi.ap122021.cabinet.backend.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.lg3.dsi.ap122021.cabinet.backend.model.Message;
import com.lg3.dsi.ap122021.cabinet.backend.repository.MessageRepository;

@Service
public class MessageService {
	@Autowired
	MessageRepository messageRepository;
	public List<Message> getAllMessages() {
		List<Message> messages = new ArrayList<Message>();
		messageRepository.findAll().forEach(message1 -> messages.add(message1));
		return messages;
	}

	public Message getMessageById(Integer id) {
		return messageRepository.findById(id).get();
	}

	public void saveOrUpdate(Message message) {
		messageRepository.save(message);
	}

	public void delete(int id) {
		messageRepository.deleteById(id);
	}
	
	//updating a record
	public void update(Message message, Integer messageid) {
		messageRepository.save(message);
	}
}
