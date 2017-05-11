// ## AboutView
//
// Represents the About view.
//
app.AboutView = new miner.View(
 	function(el, data) {
 		miner.include("/templates/about.html", el, function(data) {
 			miner.JsonRepeaterControl.render(document.getElementById("about-list"), 
 				{
 					url: "/collections/about.json"
 				}
 			);  	
 			
 			// Read the app.settings model.
 			// 			
 			$("#js-directions").attr("href", app.Settings.get("register")); 					
	 		
	 		// Used to apply background styles.
	 		//
	 		$("body").attr("data-view", "about");
 		});

 		return el.innerHTML; 		
 	}
);

// Add the view to the router.
//
app.Router.add("#/about",
	function() {
		app.AboutView.render(document.getElementById("main"));
	}
);