// ## AgendaView
//
// Represents the Agenda view.
//
app.AgendaView = new miner.View(
 	function(el, data) {
 		miner.include("/templates/agenda.html", el, function(data) {
 			miner.JsonRepeaterControl.render(document.getElementById("agenda-list"), 
 				{
 					url: "/collections/agenda.json"
 				}
 			); 	 			
	 		// Used to apply background styles.
	 		//
	 		$("body").attr("data-view", "agenda");
 		});

 		return el.innerHTML; 		
 	}
);

// Add the view to the router.
//
app.Router.add("#/agenda",
	function() {
		app.AgendaView.render(document.getElementById("main"));
	}
);