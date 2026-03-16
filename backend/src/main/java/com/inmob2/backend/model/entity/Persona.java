package com.inmob2.backend.model.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "persona")
@Inheritance(strategy = InheritanceType.JOINED)
@Getter
@Setter
@NoArgsConstructor
public abstract class Persona {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Relaciones 1 a N, mapeadas por la propiedad en las clases hijas
    @OneToMany(mappedBy = "persona", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<DireccionPersona> direcciones = new ArrayList<>();

    @OneToMany(mappedBy = "persona", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<TelefonoPersona> telefonos = new ArrayList<>();

    @OneToMany(mappedBy = "persona", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<MailPersona> mails = new ArrayList<>();

    // Métodos utilitarios (Helper Methods) para mantener sincronía lado Padre / Hijo
    public void addDireccion(DireccionPersona direccion) {
        direcciones.add(direccion);
        direccion.setPersona(this);
    }

    public void removeDireccion(DireccionPersona direccion) {
        direcciones.remove(direccion);
        direccion.setPersona(null);
    }

    public void addTelefono(TelefonoPersona telefono) {
        telefonos.add(telefono);
        telefono.setPersona(this);
    }

    public void removeTelefono(TelefonoPersona telefono) {
        telefonos.remove(telefono);
        telefono.setPersona(null);
    }

    public void addMail(MailPersona mail) {
        mails.add(mail);
        mail.setPersona(this);
    }

    public void removeMail(MailPersona mail) {
        mails.remove(mail);
        mail.setPersona(null);
    }
}
