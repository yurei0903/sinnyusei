const index_onoff=document.querySelectorAll('.onoff');
const index_link=document.querySelectorAll(".pop");
const copy_button=document.querySelectorAll(".copy");
index_onoff.forEach((element) => {
    element.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        if (targetElement.style.display === "block") {
            targetElement.style.display = "none";
        } else {
            targetElement.style.display = "block";
        }
    });
});


copy_button.forEach((element) => {
    element.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        navigator.clipboard.writeText(targetElement.innerText).then(() => {
            alert("Code copied to clipboard!");
        }).catch(err => {
            console.error('Error copying text: ', err);
        });
    });
});