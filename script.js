function getMessage() {
    return "Hello from my DevOps project!";
}

if (typeof document !== "undefined") {
    document
        .getElementById("helloButton")
        .addEventListener("click", function () {
            document.getElementById("message").textContent = getMessage();
        });
}

module.exports = { getMessage };