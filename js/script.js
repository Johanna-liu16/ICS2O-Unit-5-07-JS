// Copyright (c) 2020 Johanna Liu All rights reserved
//
// Created by: Johanna Liu
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

;("use strict")

/**
 * Input
 */
function myButtonClicked() {
  const counter = parseInt(document.getElementById("counter").value);
  let answer = 0;
    
    for (let addedNumber = 1; addedNumber <= counter; addedNumber++) {
      answer += addedNumber;
    }
            
  document.getElementById("answer").innerHTML = 
    "The sum is: " + answer;
}