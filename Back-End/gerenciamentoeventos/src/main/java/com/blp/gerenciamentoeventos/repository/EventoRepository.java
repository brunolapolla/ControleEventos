package com.blp.gerenciamentoeventos.repository;

import com.blp.gerenciamentoeventos.model.Evento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventoRepository extends JpaRepository<Evento, Long>{

}
