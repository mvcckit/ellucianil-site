// ## VendorsView
//
// Represents the Vendors view.
//
app.VendorsView = new miner.View(
 	function(el, data) {
 		miner.include("/templates/vendors.html", el, function(data) {
 			miner.JsonRepeaterControl.render(document.getElementById("vendors-list"), 
 				{
 					url: "/collections/vendors.json"
 				}
 			); 			
	 		// Used to apply background styles.
	 		//
	 		$("body").attr("data-view", "vendors");
 		});

 		return el.innerHTML; 		
 	}
);

// Add the view to the router.
//
app.Router.add("#/vendors",
	function() {
		app.VendorsView.render(document.getElementById("main"));
	}
);