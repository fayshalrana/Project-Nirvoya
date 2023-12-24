import React from 'react'
import { Link } from 'react-router-dom'

const CommingSoon = () => {

//  // Set the date we're counting down to
//  var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

//  // Update the countdown every 1 second
//  var x = setInterval(function() {

//      // Get today's date and time
//      var now = new Date().getTime();

//      // Find the distance between now and the count down date
//      var distance = countDownDate - now;

//      // Time calculations for days, hours, minutes and seconds
//      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//      // Display the result in the corresponding elements
//      document.getElementById("days").textContent = days + "d";
//      document.getElementById("hours").textContent = hours + "h";
//      document.getElementById("minutes").textContent = minutes + "m";
//      document.getElementById("seconds").textContent = seconds + "s";


//      // If the count down is over, write some text 
//      if (distance < 0) {
//          clearInterval(x);
//          document.getElementById("countdown").innerHTML = "EXPIRED";
//      }
//  }, 1000);

  return (
<div className="flex flex-col items-center justify-center h-screen px-4">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1>
    <p className="text-gray-600 text-lg mb-8">We're working hard to bring you an amazing new website. Stay tuned!</p>
    <div className="flex space-x-4">
        <Link to="/"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow-lg transition duration-300">Home</Link>
        <Link  to="/contact"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-full shadow-lg transition duration-300">contact</Link>
    </div>
</div>
  )
}

export default CommingSoon
