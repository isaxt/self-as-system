document.addEventListener("DOMContentLoaded", function () {
    const siteSelect = document.getElementById("site");

    siteSelect.addEventListener("change", function () {
        const selectedURL = siteSelect.value;
        if (selectedURL) {
            window.location.href = selectedURL;
        }
    });
});