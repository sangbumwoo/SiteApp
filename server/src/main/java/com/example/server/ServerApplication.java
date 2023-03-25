package com.example.server;

import org.springframework.boot.Banner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
		// SpringApplication.run(ServerApplication.class, args);
		SpringApplication application = new SpringApplication(ServerApplication.class);
		application.setBannerMode((Banner.Mode.OFF));
		application.addListeners(new MyListener());
		application.run(args);

	}
}
