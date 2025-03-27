        // Function to escape HTML characters
        function escapeHTML(html) {
            return html
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }

        // Load HTML File as Text
        function loadFile() {
            const fileInput = document.getElementById("fileInput");
            const contentPre = document.getElementById("content");

            if (fileInput.files.length === 0) {
                alert("Please select an HTML file first.");
                return;
            }

            const file = fileInput.files[0];
            const reader = new FileReader();

            reader.onload = function(event) {
                contentPre.textContent = event.target.result; // Show raw HTML
            };

            reader.readAsText(file);
        }

        // Load Pasted HTML as Text
        function loadPastedHTML() {
            const htmlInput = document.getElementById("htmlInput").value;
            const contentPre = document.getElementById("content");

            if (!htmlInput.trim()) {
                alert("Please paste valid HTML code.");
                return;
            }

            contentPre.textContent = htmlInput; // Show raw HTML
        }

        // Convert to PDF
    // Convert to PDF
    document.getElementById("download").addEventListener("click", () => {
        const content = document.getElementById("content").textContent; // Get raw text or innerHTML if HTML content
        const pdfContainer = document.createElement("div"); // Create a div instead of pre
        pdfContainer.textContent = content; // Ensure it's printed as text
        document.body.appendChild(pdfContainer);

        // Setup options for html2pdf
        const options = {
            margin: 10, // Set margins (in mm)
            filename: "converted.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
        };

        // Generate PDF
        html2pdf().from(pdfContainer).set(options).save("converted.pdf");

        setTimeout(() => document.body.removeChild(pdfContainer), 500); // Cleanup after PDF generation
    });
