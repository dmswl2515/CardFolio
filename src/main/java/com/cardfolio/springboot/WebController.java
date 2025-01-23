package com.cardfolio.springboot;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {
	@GetMapping({"/", "/chart", "/card", "/company"})
	public String forwardReact() {
		return "forward:/index.html";
	}
}
