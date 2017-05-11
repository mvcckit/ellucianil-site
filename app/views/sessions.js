// ## SessionsView
//
// Represents the Sessions view.
//
app.SessionsView = new miner.View(
 	function(el, data) {
 		miner.include("/templates/sessions.html", el, function(data) {
 			// Converts sessions.md to HTML.
 			//
 			app.showSessions(document.getElementById("markdown"));
 			
	 		// Used to apply background styles.
	 		//
	 		$("body").attr("data-view", "sessions");
 		});

 		return el.innerHTML; 		
 	}
);

// Add the view to the router.
//
app.Router.add("#/sessions",
	function() {
		app.SessionsView.render(document.getElementById("main"));
	}
);