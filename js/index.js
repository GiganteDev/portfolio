function toggle(title = 'Error', about = 'Error') {
    document.getElementById('popup-title').innerHTML = title;
    document.getElementById('popup-about').innerHTML = about;
    document.getElementById('popup').classList.toggle('active');
}