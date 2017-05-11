// # miner
//
// The core methods and properties.
//
var app = {
    // Declare the router.
    //
    Router: new miner.Router(),    
    // **init**
    //
    // Initialize the app.
    //
    init: function() {
        this.Router.listen("#/home");
    },
    // **sessions**
    //
    // Read the sessions markdown file.
    //
    showSessions: function(el) {
        miner.request("GET", "/markdown/sessions.md", null, {"content-type": "text/markdown"}, 
            function(response, status, xhr) {
                el.innerHTML = new showdown.Converter().makeHtml(response);
            }
        );
    }
};

// ## Settings
//
// Represents the Settings model.
//
app.Settings = new miner.Model(
	{
		"college": 		"Moraine Valley Community College",
		"register": 	"https://www.eventbrite.com/e/ellucian-il-tickets-32605371544",
		"directions": 	"https://goo.gl/maps/Y2LcmaLCPxG2"
	}
);
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