// ## ConfirmView
//
// Represents the Confirm view.
//
app.ConfirmView = new miner.View(
 	function(el, data) {
 		miner.include("/templates/confirm.html", el, function(data) {
	 		// Used to apply background styles.
	 		//
	 		$("body").attr("data-view", "confirm");
 		});

 		return el.innerHTML; 		
 	}
);

// Add the view to the router.
//
app.Router.add("#/confirm",
	function() {
		app.ConfirmView.render(document.getElementById("main"));
	}
);