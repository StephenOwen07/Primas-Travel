function ShowMoreBtn() {
  // Show more Button
  (function () {
    
    var showMoreBtns = document.querySelectorAll('.show-more-btn');

    showMoreBtns.forEach(function (btn) {

      btn.addEventListener('click', function () {
        var showMoreContent = btn.previousElementSibling;
        var shouldOpen = !showMoreContent.classList.contains('show-more-open');

        if (shouldOpen) {
          showMoreContent.classList.add('show-more-open');
          btn.innerHTML = '<span>Show less</span> <i class="fa fa-caret-up" aria-hidden="true"></i>';
        } else {
          showMoreContent.classList.remove('show-more-open');
          btn.innerHTML = '<span>Show more</span> <i class="fa fa-caret-down" aria-hidden="true"></i>';
        }
      });
    });

  })();
    
}

module.exports = ShowMoreBtn;
