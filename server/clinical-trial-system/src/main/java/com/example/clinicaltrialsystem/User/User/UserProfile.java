package com.example.clinicaltrialsystem.User.User;


import javax.persistence.*;

@Entity
public class UserProfile {
 0a1c58c (Feat :Project Controller Test Code):server/clinical-trial-system/src/main/java/com/example/clinicaltrialsystem/User/User/User.java
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
