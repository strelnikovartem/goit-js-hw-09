const formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', onFeedbackFormInput);
feedbackForm.addEventListener('submit', onFeedbackFormSubmit);

populateForm();

function onFeedbackFormInput(evt) {
  formData[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFeedbackFormSubmit(evt) {
  evt.preventDefault();
  const emailValue = feedbackForm.elements.email.value.trim();
  const messageValue = feedbackForm.elements.message.value.trim();
  if (emailValue === '' || messageValue === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  feedbackForm.reset();
}

function populateForm() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!savedData) return;
  formData.email = savedData.email || '';
  formData.message = savedData.message || '';

  feedbackForm.elements.email.value = savedData.email || '';
  feedbackForm.elements.message.value = savedData.message || '';
  console.log(formData);
}
