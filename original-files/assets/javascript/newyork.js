	// This is our API key. Add your own API key between the ""
    var APIKey = "5c83be52792b4987abf19bbfa4fb148a";

    // Here we are building the URL we need to query the database
    var queryURL = "http://api.nytimes.com/svc/archive/v1/2016/11.json?api-key=" + APIKey;
    console.log(queryURL);


	// function acessQuery (numbarticles, queryURL)
    // We then created an AJAX call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(nyTimesData) {
    	console.log(nyTimesData)


	var searchTerm= " ";
	var numbRecord= 0;
	var startYear= 0;
	var endYear= 0;

	$'#searchBtn'.on('click', function) {

		queryTerm = $('searchBtn').val().trim();
		var newURL= queryURLBase + "&q=" + queryTerm;
		console.log(newURL)
		runQuery (5, "");


	//get the start year and end year
	startYear= $('#startYear').val().trim();

	endYear= $('#endYear').val().trim();

		return false;
}



