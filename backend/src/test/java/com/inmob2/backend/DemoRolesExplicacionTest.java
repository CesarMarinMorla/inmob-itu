package com.inmob2.backend;

import com.inmob2.backend.model.entity.PersonaFisica;
import com.inmob2.backend.model.entity.roles.Inquilino;
import com.inmob2.backend.model.entity.roles.Propietario;
import com.inmob2.backend.model.entity.enums.CondicionIva;
import org.junit.jupiter.api.Test;

public class DemoRolesExplicacionTest {

    @Test
    public void demostrarCicloDeVidaDeRoles() {
        System.out.println("=== 1. CREANDO A LA PERSONA (Aún no tiene roles) ===");
        PersonaFisica cesar = new PersonaFisica();
        cesar.setPrimerNombre("César");
        cesar.setPrimerApellido("Marín");
        cesar.setNumDocumento("38123456");
        
        System.out.println("Persona creada: " + cesar.getPrimerNombre() + " " + cesar.getPrimerApellido());
        System.out.println("Cantidad de Roles actuales: " + cesar.getRoles().size()); // Debería ser 0

        System.out.println("\n=== 2. CESAR COMPRA UNA CASA Y SE VUELVE PROPIETARIO ===");
        // Creamos la "credencial" de Propietario
        Propietario rolPropietario = new Propietario();
        rolPropietario.setCuitCuil("20-38123456-1");
        rolPropietario.setCondicionIva(CondicionIva.MONOTRIBUTISTA);
        
        // Le asignamos la credencial a la Persona
        cesar.addRol(rolPropietario);
        
        System.out.println("Se le inyectó el rol de Propietario.");
        System.out.println("Cantidad de Roles actuales: " + cesar.getRoles().size()); // Debería ser 1
        
        // Verificamos de qué tipo es el Rol que tiene adentro
        System.out.println("El Rol 0 es de tipo: " + cesar.getRoles().get(0).getClass().getSimpleName());


        System.out.println("\n=== 3. CESAR ALQUILA UNA OFICINA Y SE VUELVE INQUILINO ===");
        // Creamos otra "credencial" diferente para la misma persona
        Inquilino rolInquilino = new Inquilino();
        rolInquilino.setOcupacionPrincipal("Desarrollador de Software");
        rolInquilino.setIngresosMensuales(500000.0);
        
        // Le asignamos esta segunda credencial
        cesar.addRol(rolInquilino);

        System.out.println("Se le inyectó el rol de Inquilino.");
        System.out.println("Cantidad de Roles actuales: " + cesar.getRoles().size()); // Debería ser 2
        
        System.out.println("\n=== RESUMEN FINAL ===");
        System.out.println("Persona: " + cesar.getPrimerNombre() + " (DNI: " + cesar.getNumDocumento() + ")");
        System.out.println("Roles asignados:");
        cesar.getRoles().forEach(rol -> {
            System.out.println("- " + rol.getClass().getSimpleName());
            // Demostrando el polimorfismo: Si el rol es Inquilino, mostramos su ingreso.
            if (rol instanceof Inquilino) {
                System.out.println("   (Ocupación: " + ((Inquilino) rol).getOcupacionPrincipal() + ")");
            }
            // Si el rol es Propietario, mostramos su CUIT.
            if (rol instanceof Propietario) {
                System.out.println("   (CUIT: " + ((Propietario) rol).getCuitCuil() + ")");
            }
        });
    }
}
