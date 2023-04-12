package com.ken.formease.entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "role", nullable = false, unique = true)
    private String role;
    @OneToMany(mappedBy = "role", cascade = CascadeType.ALL)
    private List<User> users;
    
}
