package com.example.application.services;

import com.example.application.person.Person;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import org.springframework.stereotype.Service;

@Service
@BrowserCallable
@AnonymousAllowed
public class LoginService {

    public boolean isLoggedIn() {
        return true;
    }

        public boolean logout() {
            return true;
        }
        public Person loginPerson(Person person) {
            System.out.println(person.toString());
            return person;
        }
}
