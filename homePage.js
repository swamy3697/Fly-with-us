var globslIndex = 0;
var response = null;
console.log("webpage started");


function setContent(apiResponse,index)
{



     if (apiResponse['data'][index]['flight']['number']) {
        $("#flightNumber").text(apiResponse['data'][index]['flight']['number']);
      }

      if (apiResponse['data'][index]['airline']['name']) {
        $("#airline").text(apiResponse['data'][index]['airline']['name']);
      }

      if (apiResponse['data'][index]['flight_date']) {
        $("#flightDate").text(apiResponse['data'][index]['flight_date']);
      }

      if (apiResponse['data'][index]['flight_status']) {
        $("#flightStatus").text(apiResponse['data'][index]['flight_status']);
      }



  /*  $("#flightNumber").text(apiResponse['data'][index]['flight']['number']);
    $("#airline").text(apiResponse['data'][index]['airline']['name']);
    $("#flightDate").text(apiResponse['data'][index]['flight_date']);
    $("#flightStatus").text(apiResponse['data'][index]['flight_status']);

    */




     if (apiResponse['data'][index]['arrival']['airport']) {
        $("#flightNumber").text(apiResponse['data'][index]['flight']['number']);
      }

      if (apiResponse['data'][index]['airline']['name']) {
        $("#airline").text(apiResponse['data'][index]['airline']['name']);
      }

      if (apiResponse['data'][index]['flight_date']) {
        $("#flightDate").text(apiResponse['data'][index]['flight_date']);
      }

      if (apiResponse['data'][index]['flight_status']) {
        $("#flightStatus").text(apiResponse['data'][index]['flight_status']);
      }




       if (apiResponse['data'][index]['arrival']['airport']) {
        $("#airport").text(apiResponse['data'][index]['arrival']['airport']);
      }

      if (apiResponse['data'][index]['arrival']['iata']) {
        $("#ataCode").text(apiResponse['data'][index]['arrival']['iata']);
      }

      if (apiResponse['data'][index]['arrival']['icao']) {
        $("#icaoCode").text(apiResponse['data'][index]['arrival']['icao']);
      }

      if (apiResponse['data'][index]['arrival']['scheduled']) {
        $("#scheduledArrival").text(apiResponse['data'][index]['arrival']['scheduled']);
      }

      if (apiResponse['data'][index]['arrival']['estimated']) {
        $("#estimatedArrival").text(apiResponse['data'][index]['arrival']['estimated']);
      }
      

      if (apiResponse['data'][index]['departure']['airport']) {
        $("#departureAirport").text(apiResponse['data'][index]['departure']['airport']);
      }

      if (apiResponse['data'][index]['departure']['iata']) {
        $("#departureAta").text(apiResponse['data'][index]['departure']['iata']);
      }

      if (apiResponse['data'][index]['departure']['icao']) {
        $("#departureiaco").text(apiResponse['data'][index]['departure']['icao']);
      }

      if (apiResponse['data'][index]['departure']['terminal']) {
        $("#departureTerminal").text(apiResponse['data'][index]['departure']['terminal']);
      }

      if (apiResponse['data'][index]['departure']['gate']) {
        $("#departureGate").text(apiResponse['data'][index]['departure']['gate']);
      }

      if (apiResponse['data'][index]['departure']['scheduled']) {
        $("#departureSchedule").text(apiResponse['data'][index]['departure']['scheduled']);
      }

      if (apiResponse['data'][index]['departure']['estimated']) {
        $("#departureEstimated").text(apiResponse['data'][index]['departure']['estimated']);
      }





    //alert("content set");


}


$.ajax({
  url: 'https://api.aviationstack.com/v1/flights',
  data: {
    access_key: '54004886ee4d254b8867b819ba5924f4'
    
  },
  dataType: 'json',
  success: function(api_Response) 
  {
    response=api_Response;

    alert("Response found");
       console.log("found");
    setContent(api_Response,globslIndex)

   }

});



function disablePre() {
  $("#preBtn").addClass("disable");
        //alert("Button clicked!");
}
function enablePre() {
$("#preBtn").removeClass("disable");
        //alert("Button clicked!");

}





$(document).ready(function() {
  disablePre();
  animateCounters(function() {
    $('#flightsCount').text("22.2+ M");
    $('#airportsCount').text("41,700+");
    $('#AirlinesCount').text("5000+");
    $('#RoutesCount').text("63,667+");
    $('#RevenueCount').text("803+ B");
    $('#EmployiesCount').text("11.3+ M");


    


  });


  $("#preBtn").click(function() {


  	 if (globslIndex > 0) {
            globslIndex--;
            setContent(response, globslIndex);
            if (globslIndex === 0) {
                disablePre();
            }
        }



  });

  $("#nxtBtn").click(function() 
    {
       if (response !== null && globslIndex <=100) {
            globslIndex++;
            setContent(response, globslIndex);
            enablePre();
        } else {
        	console.log(response);
        	console.log(globslIndex);
            alert("Response not found or end of data reached.");
        }
    });
});

// Animation function
function animateCounters(callback) {

  function animateCounter(elementId, targetValue, duration) {
    var startValue = 0;
    var startTime = Date.now();

    function updateCounter() {
      var currentTime = Date.now();
      var elapsedTime = currentTime - startTime;
      var progress = Math.min(1, elapsedTime / duration);
      var currentValue = startValue + (targetValue - startValue) * progress;

      $(elementId).text(currentValue.toFixed(1));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        callback();
      }
    }

    updateCounter();
  }
  animateCounter("#flightsCount", 22.2, 3000);
  animateCounter("#airportsCount", 41700, 3000);
  animateCounter("#AirlinesCount", 5000, 3000);
  animateCounter("#RoutesCount", 63667, 3000);
  animateCounter("#RevenueCount", 803, 3000);
  animateCounter("#EmployiesCount", 11.3, 3000);
}

