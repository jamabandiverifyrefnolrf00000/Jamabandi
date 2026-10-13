
    document.addEventListener('change', function (event) {
        if (event.target.classList.contains('custom-file-input_dc')) {
        let fileName = event.target.files[0]?.name || "Choose file";
    event.target.nextElementSibling.textContent = fileName;
        }
    });
    document.addEventListener('change', function (event) {
        if (event.target.classList.contains('custom-file-input_wa')) {
        let fileName = event.target.files[0]?.name || "Choose file";
    event.target.nextElementSibling.textContent = fileName;
        }
         });
    document.addEventListener('change', function (event) {
        if (event.target.classList.contains('custom-file-input_ap')) {
        let fileName = event.target.files[0]?.name || "Choose file";
    event.target.nextElementSibling.textContent = fileName;
        }
    });
