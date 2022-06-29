function _(elem) {
    return document.querySelector(`${elem}`)
}

function __(elem) {
    return document.querySelectorAll(`${elem}`)
}


window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll('.tel'), function (input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) - ___ - __ - __",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substring(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = ""
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)

    });

});

const checkbox = _("#checkbox");
var submitBtn = _(".forms__submit");
checkbox.addEventListener('click', () =>
    submitBtn.toggleAttribute("disabled")
)

const poap__open = _('.schedule__btn');
const poap__wrapper = _('.poap__wrapper');
const poap__body = _('.poap');
const btn__closed = _('.btn__closed');


poap__open.addEventListener('click', () => {
    openPoap();
});

function openPoap() {
    poap__wrapper.style.cssText = `
        display: flex;
        display: -webkit-flex;
        opacity: 0;
    `;
    setTimeout(() => {
        poap__wrapper.style.opacity = "1";
        poap__body.style.opacity = "1";
    }, 100);
}

btn__closed.addEventListener('click', () => {
    closePoap();
});

function closePoap() {
    ``
    poap__wrapper.style.opacity = "0";
    poap__body.style.opacity = "0";
    setTimeout(() => {
        poap__wrapper.removeAttribute('style');
    }, 400);
}

const text_toUp_sidebar = _('.item__text-btn');
const sidebar = _('.sidebar');


_('.sidebar__btn ').addEventListener('click', () => {
    _('.sidebar__btn').classList.toggle('active');
    _('.sidebar').classList.toggle('active');
})