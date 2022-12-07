function toggle(box, disable) {
    if (document.getElementById(disable).style.opacity == 1)
        document.getElementById(disable).style.opacity = 0
    if (document.getElementById(box).style.opacity != 1)
        document.getElementById(box).style.opacity = 1
    else document.getElementById(box).style.opacity = 0
}