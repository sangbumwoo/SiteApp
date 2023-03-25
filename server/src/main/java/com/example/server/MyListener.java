package com.example.server;

import org.springframework.boot.context.event.ApplicationStartedEvent;
import org.springframework.context.ApplicationListener;

public class MyListener implements ApplicationListener<ApplicationStartedEvent>{

    @Override
    public void onApplicationEvent(ApplicationStartedEvent event) {
        System.out.println("-----------------------------------------------------------------------------");
        System.out.println("---------------------------- Application Started ----------------------------");
        System.out.println("-----------------------------------------------------------------------------");
    }
    
}
