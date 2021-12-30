var loadFile = function (event) {
    var image = document.getElementById('output');
    image_ = event.target.files[0];
    image.src = URL.createObjectURL(event.target.files[0]);
};