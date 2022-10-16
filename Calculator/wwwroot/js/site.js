// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const handleInput = () => {
    const input1 = document.getElementById("num1");
    const input2 = document.getElementById("num2");
    const input3 = document.getElementById("num3");
    if (input1.value && input2.value) {
        input3.value = parseInt(input1.value) + parseInt(input2.value);
    }
    else {
        input3.value = 0;
    }
}