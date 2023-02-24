const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (email === '' || password === '') {
        alert('Pleas fill in all the fields!');
        return;
    }

    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, name) => {
        data[name] = value.trim();
    });

    console.log(data);
    form.reset();
};
