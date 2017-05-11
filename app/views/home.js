// ## HomeView
//
// Represents the Home view.
//
app.HomeView = new miner.View(
 	function(el, data) {
 		miner.include("/templates/home.html", el, function(data) {
 			// Read the app.settings model.
 			//
 			$("#js-college").html(app.Settings.get("college"));
 			$("#js-register").attr("href", app.Settings.get("register"));

	 		// Used to apply background styles.
	 		//
	 		$("body").attr("data-view", "home");
 		});

 		return el.innerHTML; 		
 	}
);

// Add the view to the router.
//
app.Router.add("#/home",
	function() {
		app.HomeView.render(document.getElementById("main"));
	}
);