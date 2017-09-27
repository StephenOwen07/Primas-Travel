function RoomSortDropDown() {

    var dropBtns = document.querySelectorAll('.room-sort-menu__dropdown');

    function closeOpenItems() {
      var openMenus = document.querySelectorAll('.room-sort-menu__drop-menu');
      openMenus.forEach(function (menus) {
        menus.classList.remove('show');
      });
    }

    dropBtns.forEach(function (btn) {

      btn.addEventListener('click', function (e) {
        var
          dropContent = btn.querySelector('.room-sort-menu__drop-menu'),
          shouldOpen = !dropContent.classList.contains('show');
        e.preventDefault();

        // First close all open items.
        closeOpenItems();
        // Check if the clicked item should be opened. It is already closed at this point so no further action is required if it should be closed.
        if (shouldOpen) {
          // Open the clicked item.
          dropContent.classList.add('show');
        }
        // prevent event bubbling
        e.stopPropagation();
      });


    });

    //   close menus when clicking outside of them
    window.addEventListener('click', function (event) {
      if (event.target != dropBtns) {
        // Moved the code here to its own function.
        closeOpenItems();
      }
    });
}

module.exports = RoomSortDropDown;