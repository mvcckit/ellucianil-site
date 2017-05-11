// ## SubscribeView
//
// Represents the Subscribe view.
//
app.SubscribeView = new miner.View(
 	function(el, data) {
 		miner.include("/templates/subscribe.html", el, function(data) {
	 		// Used to apply background styles.
	 		//
	 		$("body").attr("data-view", "subscribe");
 		});

 		return el.innerHTML; 		
 	}
);

// Add the view to the router.
//
app.Router.add("#/subscribe",
	function() {
		app.SubscribeView.render(document.getElementById("main"));
	}
);