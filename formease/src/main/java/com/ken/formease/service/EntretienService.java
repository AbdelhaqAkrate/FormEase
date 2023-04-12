package com.ken.formease.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.ken.formease.entities.Entretien;
import com.ken.formease.repository.EntretienRepository;

public interface EntretienService {
    public List<Entretien> getAllEntretiens();
    public Entretien getEntretienById(Long id);
}
