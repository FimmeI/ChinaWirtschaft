const sidebar = document.querySelector('.sidebar');
const navItems = document.querySelectorAll('nav .nav-item');
const toggle = document.querySelector('.sidebar .toggle');

const faqs = document.querySelectorAll('.faq');

var popupOpen = false;

navItems.forEach(navItem => {

  navItem.addEventListener('click', () => {

    if (!popupOpen) {
      if(navItem.id === '') {
      navItems.forEach(navItem => {
          navItem.classList.remove('active');
      });

        navItem.classList.add('active');
    }
    }
  });

});

/*document.getElementById('content').addEventListener('click', () => {
    sidebar.classList.remove('open');
});

document.getElementById('side').addEventListener('click', () => {
  sidebar.classList.add('open');
});*/

document.getElementById('side').addEventListener('mouseenter', () => {
  if (!popupOpen)
    sidebar.classList.add('open');
});

document.getElementById('side').addEventListener('mouseleave', () => {
  if (!popupOpen)
    sidebar.classList.remove('open');
});


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


function getDateTime() {
  var now     = new Date(); 
  var year    = now.getFullYear();
  var month   = now.getMonth()+1; 
  var day     = now.getDate();
  var hour    = now.getHours();
  var minute  = now.getMinutes();
  var second  = now.getSeconds(); 
  if(month.toString().length == 1) {
       month = '0'+month;
  }
  if(day.toString().length == 1) {
       day = '0'+day;
  }   
  if(hour.toString().length == 1) {
       hour = '0'+hour;
  }
  if(minute.toString().length == 1) {
       minute = '0'+minute;
  }
  if(second.toString().length == 1) {
       second = '0'+second;
  }   
  var dateTime = day+'.'+month+'.'+year+' '+hour+':'+minute+':'+second;   
   return dateTime;
}

const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');

function updateProgressBar(percentage) {
  progressBar.style.width = percentage + '%';
  progressText.innerText = `Upload image: ${percentage}%`;
}