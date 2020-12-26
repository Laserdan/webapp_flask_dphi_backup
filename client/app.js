function getGenderValue() {
  var uiGender = document.getElementsByName("uiGender");
  for(var i in uiGender) {
    if(uiGender[i].checked) {
        return uiBathrooms[i];
    }
  }
  return -1; // Invalid Value
}

function getMarriedValue() {
  var uiMarried = document.getElementsByName("uiMarried");
  for(var i in uiMarried) {
    if(uiMarried[i].checked) {
        return uiMarried[i];
    }
  }
  return -1; // Invalid Value
}

function getDependentsValue() {
  var uiDep = document.getElementsByName("uiDep");
  for(var i in uiDep) {
    if(uiDep[i].checked) {
        return uiDep[i];
    }
  }
  return -1; // Invalid Value
}

function getEducationValue() {
  var uiEducation = document.getElementsByName("uiEducation");
  for(var i in uiEducation) {
    if(uiEducation[i].checked) {
        return uiEducation[i];
    }
  }
  return -1; // Invalid Value
}

function getSelfEmployedValue() {
  var uiSelfEmp = document.getElementsByName("uiSelfEmp");
  for(var i in uiSelfEmp) {
    if(uiSelfEmp[i].checked) {
        return uiSelfEmp[i];
    }
  }
  return -1; // Invalid Value
}

function getCreditHistoryValue() {
  var uiCredit = document.getElementsByName("uiCredit");
  for(var i in uiCredit) {
    if(uiCredit[i].checked) {
        return uiCredit[i];
    }
  }
  return -1; // Invalid Value
}

function getPropertyAreaValue() {
  var uiCredit = document.getElementsByName("uiArea");
  for(var i in uiArea) {
    if(uiArea[i].checked) {
        return uiArea[i];
    }
  }
  return -1; // Invalid Value
}

function onClickedEstimatePrice() {
  console.log("Estimated price button clicked");
  var gender = getGenderValue()
  var married = getMarriedValue()
  var dependents = getDependentsValue()
  var education = getEducationValue()
  var selfemployed = getSelfEmployedValue()
  var applicantincome = document.getElementById("uiAppInc")
  var coapplicantincome = document.getElementById("uiCoappInc")
  var loanammount = document.getElementById("uiLoanAmmount")
  var loanammountterm = document.getElementById("uiLoanAmmountTerm")
  var credithistory = getCreditHistoryValue()
  var propertyarea = getPropertyAreaValue()

  var url = "http://127.0.0.1:5000/predict_loan";

  $.post(url, {
    gender: gender,
    married: married,
    dependents: dependents,
    education: education,
    selfemployed: selfemployed,
    applicantincome: applicantincome,
    coapplicantincome: coapplicantincome,
    loanammount: loanammount,
    loanammountterm: loanammountterm,
    credithistory: credithistory,
    propertyarea: propertyarea,
    
},function(data, status) {
    console.log(data.estimated_price);
    estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
    console.log(status);
});

}



function onClickedEstimatePrice() {
  console.log("Estimate price button clicked");
  var sqft = document.getElementById("uiSqft");
  var bhk = getBHKValue();
  var bathrooms = getBathValue();
  var location = document.getElementById("uiLocations");
  var estPrice = document.getElementById("uiEstimatedPrice");

  // var url = "http://127.0.0.1:5000/predict_home_price"; //Use this if you are NOT using nginx which is first 7 tutorials
  var url = "/api/predict_home_price"; // Use this if  you are using nginx. i.e tutorial 8 and onwards

  $.post(url, {
      total_sqft: parseFloat(sqft.value),
      bhk: bhk,
      bath: bathrooms,
      location: location.value
  },function(data, status) {
      console.log(data.estimated_price);
      estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
      console.log(status);
  });
}

