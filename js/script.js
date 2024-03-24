const sidebar = document.querySelector('.sidebar');
const navItems = document.querySelectorAll('nav .nav-item');
const toggle = document.querySelector('.sidebar .toggle');

const faqs = document.querySelectorAll('.faq');

var popupOpen = false;

/*document.getElementById('content').addEventListener('click', () => {
    sidebar.classList.remove('open');
});

document.getElementById('side').addEventListener('click', () => {
  sidebar.classList.add('open');
});*/

// Funktion zum Überwachen der Änderungen in der Sidebar
function observeSidebarChanges() {
    var sidebar = document.querySelector('.sidebar');
    var general = document.querySelector('.general');

    // Überwachung der Änderungen in der Klasse der Sidebar
    var observer = new MutationObserver(function(mutationsList) {
        for (var mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                if (sidebar.classList.contains('show-sidebar')) {
                    general.style.marginLeft = '150px';
                } else {
                    general.style.marginLeft = '350px';
                }
            }
        }
    });

    // Konfiguration des Observers und Starten der Überwachung
    var config = { attributes: true };
    observer.observe(sidebar, config);
}

// Aufruf der Funktion zum Starten der Überwachung
observeSidebarChanges();



/*=============== SHOW SIDEBAR ===============*/
const showSidebar = (toggleId, sidebarId, mainId) =>{
   const toggle = document.getElementById(toggleId),
   sidebar = document.getElementById(sidebarId),
   main = document.getElementById(mainId)

   if(toggle && sidebar){
       toggle.addEventListener('click', ()=>{
           /* Show sidebar */
           sidebar.classList.toggle('show-sidebar')
       })
   }
}
showSidebar('header-toggle','sidebar', 'main')

/*=============== LINK ACTIVE ===============*/
const sidebarLink = document.querySelectorAll('.sidebar__link')

function linkColor(){
    sidebarLink.forEach(l => l.classList.remove('active-link'))
    this.classList.add('active-link')
}

sidebarLink.forEach(l => l.addEventListener('click', linkColor))

faqs.forEach(faq => {
  const title = faq.querySelector('.faq-title');
  const arrow = faq.querySelector('.faq-arrow');
  const answer = faq.querySelector('.faq-answer');

  title.addEventListener('click', () => {
    if (faq.classList.contains('active')) {
      faq.classList.remove('active');
      arrow.style.transform = 'translateY(-50%) rotate(-45deg)';
      answer.style.maxHeight = null;
    } else {
      // Schließen Sie alle anderen FAQs, wenn das aktuelle geöffnet wird
      faqs.forEach(faq => {
        faq.classList.remove('active');
        faq.querySelector('.faq-arrow').style.transform = 'translateY(-50%) rotate(-45deg)';
        faq.querySelector('.faq-answer').style.maxHeight = null;
      });

      faq.classList.add('active');
      arrow.style.transform = 'translateY(-50%) rotate(45deg)';
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });

  /*title.addEventListener('mouseenter', () => {
    if (faq.classList.contains('active')) {
      faq.classList.remove('active');
      arrow.style.transform = 'translateY(-50%) rotate(-45deg)';
      answer.style.maxHeight = null;
    } else {
      // Schließen Sie alle anderen FAQs, wenn das aktuelle geöffnet wird
      faqs.forEach(faq => {
        faq.classList.remove('active');
        faq.querySelector('.faq-arrow').style.transform = 'translateY(-50%) rotate(-45deg)';
        faq.querySelector('.faq-answer').style.maxHeight = null;
      });

      faq.classList.add('active');
      arrow.style.transform = 'translateY(-50%) rotate(45deg)';
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });

  title.addEventListener('mouseleave', () => {
    if (faq.classList.contains('active')) {
      faq.classList.remove('active');
      arrow.style.transform = 'translateY(-50%) rotate(-45deg)';
      answer.style.maxHeight = null;
    } else {
      // Schließen Sie alle anderen FAQs, wenn das aktuelle geöffnet wird
      faqs.forEach(faq => {
        faq.classList.remove('active');
        faq.querySelector('.faq-arrow').style.transform = 'translateY(-50%) rotate(-45deg)';
        faq.querySelector('.faq-answer').style.maxHeight = null;
      });

      faq.classList.add('active');
      arrow.style.transform = 'translateY(-50%) rotate(45deg)';
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });*/
});