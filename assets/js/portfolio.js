(function() {
  'use strict';

  var iso = new Isotope( '.grid', {
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

  console.log(iso);

  // bind filter button click
  var filtersElem = document.querySelector('.filters-button-group');
  console.log(filtersElem);

  filtersElem.addEventListener( 'click', function( event ) {
    // only work with buttons
    console.log('clicked');
    if ( !matchesSelector( event.target, 'button' ) ) {
      return;
    }
    var filterValue = event.target.getAttribute('data-filter');
    // console.log(filterValue);
    // use matching filter function
    filterValue = filterValue;
    iso.arrange({ filter: filterValue });
  });

  // change is-checked class on buttons
  var buttonGroups = document.querySelectorAll('.button-group');
  for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
    var buttonGroup = buttonGroups[i];
    radioButtonGroup( buttonGroup );
  }

  function radioButtonGroup( buttonGroup ) {
    buttonGroup.addEventListener( 'click', function( event ) {
      // only work with buttons
      if ( !matchesSelector( event.target, 'button' ) ) {
        return;
      }
      buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
      event.target.classList.add('is-checked');
    });
  }

}());