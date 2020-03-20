function postForm(shortcode, email_adress) {
  const url =
    "https://b16n2z66xl.execute-api.eu-west-1.amazonaws.com/dev/mailchimp/list/members";
  //"http://localhost:3000/mailchimp/list/members";

  const body = {
    email_address: email_adress,
    status: "subscribed",
    tags: ["requested-content"],
    domain: "hpskolan"
  };

  return fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (response.status === 500) {
        if (shortcode === "big") {
          var ele = document.getElementById("email-spinner-wrapper");
          var ele2 = document.getElementById("email-message-error");
          ele2.classList.remove("hide");
          ele.classList.add("hide");
        } else {
          var ele = document.getElementById("small-email-spinner-wrapper");
          var ele2 = document.getElementById("small-email-message-error");
          var ele4 = document.getElementById("small-email-button-text");
          ele2.classList.remove("hide");
          ele4.classList.remove("hide");
          ele.classList.add("hide");
        }
      } else if (response.status === 200) {
        if (shortcode === "big") {
          var ele = document.getElementById("email-spinner-wrapper");
          var ele2 = document.getElementById("email-message-success");
          ele2.classList.remove("hide");
          ele.classList.add("hide");
        } else {
          var ele = document.getElementById("small-email-spinner-wrapper");
          var ele2 = document.getElementById("small-email-message-success");
          var ele4 = document.getElementById("small-email-button-text");
          ele2.classList.remove("hide");
          ele4.classList.remove("hide");
          ele.classList.add("hide");
        }
      }
    })
    .catch(error => console.log(error));
}

window.onload = function() {
  document.getElementById("emailSubmit").onclick = function fun() {
    if (document.getElementById("toc-big").checked) {
      var ele = document.getElementById("email-spinner-wrapper");
      var ele2 = document.getElementById("email-message-error");
      var ele3 = document.getElementById("email-message-success");
      ele.classList.remove("hide");
      ele2.classList.add("hide");
      ele3.classList.add("hide");
      postForm("big", document.getElementById("email_address").value);
    } else {
      var ele2 = document.getElementById("email-message-error");
      ele2.classList.remove("hide");
    }
  };

  document.getElementById("emailSmallSubmit").onclick = function fun() {
    if (document.getElementById("toc-small").checked) {
      var ele = document.getElementById("small-email-spinner-wrapper");
      var ele2 = document.getElementById("small-email-message-error");
      var ele3 = document.getElementById("small-email-message-success");
      var ele4 = document.getElementById("small-email-button-text");
      ele.classList.remove("hide");
      ele2.classList.add("hide");
      ele3.classList.add("hide");
      ele4.classList.add("hide");
      postForm("small", document.getElementById("email_address_small").value);
    } else {
      var ele2 = document.getElementById("small-email-message-error");
      ele2.classList.remove("hide");
    }
  };
};
