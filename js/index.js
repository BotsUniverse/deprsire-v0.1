function after(func, time) {
  setTimeout(func, time);
}

function typeWhoAreWe(){
  var whoAreWeText = " Who Are We? ";
  var whoAreWeElem = document.getElementById("who-are-we-text");
  var new_interval = setInterval(function(){
    if (whoAreWeElem.innerHTML.length >= whoAreWeText.length) {
      clearInterval(new_interval);
    }
    var c = whoAreWeText.slice(whoAreWeElem.innerHTML.length, whoAreWeText.length)[0]
    console.log("Interval", c)
    if (c === undefined) return
    whoAreWeElem.innerHTML += c;
  }, 500)
}





// the window scroll listener
document.onscroll = (e) => {
  var top = -1* (document.body.getBoundingClientRect().top/window.innerHeight);
  var notWritten1 = true;
  if (top > .50 && notWritten1) {
    notWritten1 = false;
    typeWhoAreWe()
  }
}




function send_suggestion() {
  var uname, mail, tgname, sugg;
  uname = $("#uname").val();
  mail = $("#mail").val();
  tgname = $("#tgname").val();
  sugg = $("#sugg").val();
  $.ajax({
    type: "GET",
    url: "https://xk6rprajpm.herokuapp.com/a",
    data: {
      username: uname,
      mail: mail,
      tgname: tgname,
      suggestion: sugg
    },
    success: (data) => {
      console.log(data)
    }
  })
}



function toggleNav() {
  document.querySelector(".links").classList.toggle("hidden")
}



var check_backend = function (){
  $.ajax({
    type: "GET",
    url: "https://xk6rprajpm.herokuapp.com/",
    success: (data) => {
      console.log(data)
      $(".offline").hide()
      $(".online").show()
    },
    error: (error) => {
      console.log(error)
      $(".offline").show()
      $(".online").hide()
    }
  })
}

setInterval(function(){
  check_backend();
}, 5000)




$(document).ready(function(){
  check_backend();



  // the function to add the links to all the bot links in the page
  document.querySelectorAll('.chtsm').forEach(
    (item) => {
      var username = item.parentNode.parentNode.children[2].innerHTML;
      console.log(username)
      item.innerHTML = `<a class="chtsm-a" href="/docs#${username}">Click here to see more...</a>`
    }
  )
  // a func to add link to all usernames
  document.querySelectorAll(".username").forEach(
    (item) => {
      item.href = `https://telegram.me/${item.innerHTML.replace("@", '')}`
    }
  )

})