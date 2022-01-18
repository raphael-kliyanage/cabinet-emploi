package com.lg3.dsi.ap122021.cabinet.backend.repository;

import org.springframework.data.repository.CrudRepository;
import com.lg3.dsi.ap122021.cabinet.backend.model.Message;

public interface MessageRepository extends CrudRepository<Message, Integer> {

}
