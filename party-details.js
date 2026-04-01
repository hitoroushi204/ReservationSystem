const modal = document.getElementById('rsvp-modal');
const btn = document.getElementById('rsvp-btn');
const span = document.querySelector('.rsvp-modal .close');
const form = document.getElementById('rsvp-form');
const successMsg = document.getElementById('rsvp-success');

btn.onclick = function(e){
  e.preventDefault();
  modal.style.display = 'block';

  form.scrollIntoView({ behavior: 'smooth', block: 'start' });

  form.querySelector('input[name="name"]').focus();
}

span.onclick = function(){
  modal.style.display = 'none';
}

window.onclick = function(event){
  if(event.target == modal) modal.style.display = 'none';
}

form.onsubmit = function(e){
  e.preventDefault();
  form.style.display = 'none';
  successMsg.style.display = 'block';
}