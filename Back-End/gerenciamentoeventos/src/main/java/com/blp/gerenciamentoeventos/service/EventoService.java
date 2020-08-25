package com.blp.gerenciamentoeventos.service;

import com.blp.gerenciamentoeventos.repository.EventoRepository;
import com.blp.gerenciamentoeventos.model.Evento;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventoService {

    EventoRepository eventoRepository;

    @Autowired
    public EventoService(EventoRepository eventoRepository){
        this.eventoRepository = eventoRepository;
    }

    public Evento saveEvento(Evento evento){
        return eventoRepository.save(evento);
    }

    public List<Evento> findAll(){
        return eventoRepository.findAll();
    }

    public Optional<Evento> getByID(Long id){
        return eventoRepository.findById(id);
    }

    public Evento updateEvento(Evento evento){
        return eventoRepository.save(evento);
    }

    public void deleteByID(Long id){
        eventoRepository.deleteById(id);
    }

}
