$(".faq-a").slideUp(0);
$("#faq-a-1").slideDown(0);

$("#faq-q-1").on("click", function () {
  var item = $("#faq-a-1");
  if (item.is(":hidden")) {
    item.slideDown();
    $("#faq-btn-1").attr("src", "./assets/images/icon-minus.svg");
  } else {
    item.slideUp();
    $("#faq-btn-1").attr("src", "./assets/images/icon-plus.svg");
  }
});

$("#faq-q-2").on("click", function () {
  var item = $("#faq-a-2");
  if (item.is(":hidden")) {
    item.slideDown();
    $("#faq-btn-2").attr("src", "./assets/images/icon-minus.svg");
  } else {
    item.slideUp();
    $("#faq-btn-2").attr("src", "./assets/images/icon-plus.svg");
  }
});

$("#faq-q-3").on("click", function () {
  var item = $("#faq-a-3");
  if (item.is(":hidden")) {
    item.slideDown();
    $("#faq-btn-3").attr("src", "./assets/images/icon-minus.svg");
  } else {
    item.slideUp();
    $("#faq-btn-3").attr("src", "./assets/images/icon-plus.svg");
  }
});

$("#faq-q-4").on("click", function () {
  var item = $("#faq-a-4");
  if (item.is(":hidden")) {
    item.slideDown();
    $("#faq-btn-4").attr("src", "./assets/images/icon-minus.svg");
  } else {
    item.slideUp();
    $("#faq-btn-4").attr("src", "./assets/images/icon-plus.svg");
  }
});

$(".faq-q > h3").hover(
  function () {
    $(this).addClass("change-color");
    console.log(this);
  },
  function () {
    $(this).removeClass("change-color");
    console.log(this);
  }
);
