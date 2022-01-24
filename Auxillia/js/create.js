const form=document.querySelector("form")
const title = document.querySelector('#blog-title')
const body = document.querySelector('#blog-body')
const image = document.querySelector('blog-image')
const error = document.querySelector('.error');
const titleError = document.querySelector('.title-error');
const bodyError = document.querySelector('.body-error');

let regex = /^[A-Z]{12,}$/
error.style.display = 'none';
form.addEventListener('create', e => {
        e.preventDefault();
        let validTitle = regex.test(title.value.trim())
        
        
        if (!validTitle) {
                error.style.display = 'block'
                titleError.innerHTML = 'title is required'
                title.classList.add('fail')
                return false
        } else {
                title.classList.remove('fail')
                title.classList.add('success')
                titleError.innerHTML = ''
        } if (!email.value.trim()) {
                error.style.display = 'block'
                emailError.innerHTML = 'Please add an email'
                email.classList.add('fail')
                return false
        } else {
                email.classList.remove('fail')
                email.classList.add('success')
                emailError.innerHTML = ''
        } if (mail === false) {
                error.style.display = 'block'
                emailError.innerHTML = 'Invalid email'
                email.classList.add('fail')
                return false
        } else {
                email.classList.remove('fail')
                email.classList.add('success')
                emailError.innerHTML = ''
        } if (!password.value.trim()) {
                error.style.display = 'block'
                passwordError.innerHTML = 'Please add a password'
                password.classList.add('fail')
                return false
        } else {
                password.classList.remove('fail')
                password.classList.add('success')
                passwordError.innerHTML = ''
        } if (password.value.trim().length < 8) {
                error.style.display = 'block'
                passwordError.innerHTML = 'Password is too short'
                password.classList.add('fail')
                return false
        } else {
                password.classList.remove('fail')
                password.classList.add('success')
                passwordError.innerHTML = ''
        } if (!confirm.value.trim()) {
                error.style.display = 'block'
                confirmError.innerHTML = 'Confirm password'
                confirm.classList.add('fail')
                return false
        } else {
                confirm.classList.remove('fail')
                confirm.classList.add('success')
                confirmError.innerHTML = ''
        } if (confirm.value.trim() !== password.value.trim()) {
                error.style.display = 'block'
                confirmError.innerHTML = 'Password do not match'
                confirm.classList.add('fail')
                return false
        } else {
                confirmError.innerHTML = '';
                confirm.classList.remove('fail')
                confirm.classList.add('success')
                let id = Math.floor(Math.random() * 1000)
                let accounts = JSON.parse(localStorage.getItem('users'));
                const user = {
                        'id': id,
                        'names': names.value.trim(),
                        'email': email.value.trim(),
                        'password': password.value.trim()
                }
                if (!accounts) localStorage.setItem('users', JSON.stringify([user]));
                else localStorage.setItem('users', JSON.stringify([...accounts, user]));
                form.reset()
                location.href = '../html/login.html'
                return true
        }
})