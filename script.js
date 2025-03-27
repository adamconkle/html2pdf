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
        document.getElementById("download").addEventListener("click", () => {
            const content = document.getElementById("content").textContent; // Get raw text
            const pdfContainer = document.createElement("pre");
            pdfContainer.textContent = content; // Ensure it's printed as text
            document.body.appendChild(pdfContainer);
            
            html2pdf().from(pdfContainer).save("converted.pdf");

            setTimeout(() => document.body.removeChild(pdfContainer), 500); // Cleanup
        });
