// coding implementation
// end coding implementation

function sub_email(email) {
    return (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(email);
}

function sub_rate(rate) {
    return rate.match(/^(10|[0-9])$/);
}

document.getElementsByTagName('form')[0].addEventListener('submit', sub);

function sub(e) {
    let emaill = document.getElementById('email').value;
    let ratee = document.getElementById('rate').value;
    let cmt = document.getElementById('com').value;
    if (!sub_email(emaill)) {
        alert('Invalid email address!');
        e.preventDefault();
        return;
    }
    if (cmt == '') {
        alert('Comment must not be blank!');
        e.preventDefault();
        return;
    }
    if (!sub_rate(ratee)) {
        alert('Rating must be between 0 and 10!');
        e.preventDefault();
        return;
    }
    alert('Submit successfully!')
}