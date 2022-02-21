// show or hide hidden block
function fixOpacity(nameBlock){
  opacityEl = document.querySelector(nameBlock).classList
  if(!opacityEl.contains('visible')){
    opacityEl.add('visible')
  }
  else {
    opacityEl.remove('visible')
  }
}

function fixDisplay(nameBlock1, nameBlock2){
  let classListEl1 = document.querySelector(nameBlock1).classList
  let classListEl2 = document.querySelector(nameBlock2).classList
  if(!classListEl1.contains('display-none')){
    classListEl1.add('display-none')
    classListEl2.remove('display-none')
  }
  else {
    classListEl1.remove('display-none')
    classListEl2.add('display-none')
  }
}

// add or delete class
function add_delete_class(name_el, name_class){
  document.querySelector(name_el).classList.toggle(name_class)
}

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.menu__burger').addEventListener('click', () => {
    fixOpacity('.menu__nav')
    fixDisplay('.menu__burger-open', '.menu__burger-close')
  })

  window.addEventListener('resize', () => {
    let classListEl1 = document.querySelector('.menu__burger-open').classList,
        classListEl2 = document.querySelector('.menu__burger-close').classList,
        nav = document.querySelector('.menu__nav').classList
    if(classListEl1.contains('display-none')){
      classListEl1.remove('display-none')
      classListEl2.add('display-none')
      nav.remove('visible')
    }
  });

  document.querySelectorAll('.nav-list__link').forEach(function(el){
    el.addEventListener('click', function(event){
      if(window.outerWidth <= 575){
        add_delete_class('.menu__nav', 'visible')
        add_delete_class('.menu__burger-close', 'display-none')
        add_delete_class('.menu__burger-open', 'display-none')
      }

    })
  })
})
