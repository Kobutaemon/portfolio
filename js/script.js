$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });


  // スクロールフェードイン
  $(window).scroll(function () {
    $(".fade-out").each(function () {
      var imgPos = $(this).offset().top; //documentから見た要素の位置
      var scroll = $(window).scrollTop(); //現在の画面スクロールの位置取得、$()の中に入れたもののスクロール位置を取得するらしい。
      var windowHeight = $(window).height(); //ウィンドウの高さ取得
      if (scroll > imgPos - windowHeight + windowHeight / 6) { //scroll > imgPosだけだと画面の一番上に来た時にフェードインしてしまうので、遅い。そこで基準となるimgPosの数値を小さくすることで、画面の一番上から少し下に要素が来たときにフェードインするようになる。
        $(this).addClass("fade-in");
      }
    });
  });
});
