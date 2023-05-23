function clickButton(target) {
  let result = document.getElementById("result");
  let target_value = target.innerHTML;
  let operator = ["+","-","*","/"];
    
  if (target_value == "AC") {
    result.innerHTML = "0";
  } else if (target_value == "=") {
    result.innerHTML = eval(result.innerHTML);
  } else {
    if (result.innerHTML == "0" && target_value == "0") {
      result.innerHTML = "0";
    } else if (result.innerHTML == "0" && target_value == "00") {
      result.innerHTML = "0";
    } else if (result.innerHTML == "0" && target_value == ".") {
      result.innerHTML = "0.";
    } else if (result.innerHTML.slice(-1) == "." && target_value == ".") {
      result.innerHTML = (result.innerHTML + target_value).slice(0,-1);
    } else if (operator.includes(result.innerHTML.slice(-1)) && operator.includes(target_value)) {
      result.innerHTML = result.innerHTML.slice(0,-1) + target_value;
    } else if (result.innerHTML == "0") {
      result.innerHTML = target_value;
    } else {
      result.innerHTML += target_value;
    }
  }
}

$(function(){
  let btn = $("button");
  btn.click(function(){
    btn.removeClass("active");
    $(this).addClass("active");
  });
});