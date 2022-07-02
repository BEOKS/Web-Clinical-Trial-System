package com.example.clinicaltrialsystem.User.User;

import javax.persistence.*;

@Entity
public class UserProfile {
    protected String name;
    @Column(unique = true)
    protected String email;
    @Id
    private Long id;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
