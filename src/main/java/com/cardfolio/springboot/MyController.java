package com.cardfolio.springboot;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MyController {
	
	@RequestMapping("/")
	public String redirect() {
		return "forward:/index.html";
	}
	
	@RequestMapping("main.do")
		public String main() {
			return "main";
		}

}

