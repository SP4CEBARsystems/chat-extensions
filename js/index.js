
document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello");
    generateSVG();
});

function generateSVG() {
    // Generate SVG string
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="80">
        <text x="10" y="40" font-size="24">Hello!</text>
    </svg>
    `;

    // Create a blob URL
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    // Use it
    // document.querySelector("img").src = url;
    // or open in new tab
    // window.open(url, "_blank");

    if (new URLSearchParams(window.location.search).get("image") === "0") {
        window.location.href = url;
    }
}