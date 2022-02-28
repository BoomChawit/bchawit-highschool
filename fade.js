function fade()
{
    let body = document.querySelector('#fade');
    if (body.style.visibility === 'hidden')
    {
        body.style.visibility = 'visible';
    }
    else
    {
        body.style.visibility = 'hidden';
    }
}
window.setInterval(fade, 500);