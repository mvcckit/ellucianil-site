// # App
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
