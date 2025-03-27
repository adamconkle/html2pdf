        // Load HTML File as Text
        function loadFile() {
            const fileInput = document.getElementById("fileInput");
            const contentDiv = document.getElementById("content");

            if (fileInput.files.length === 0) {
                alert("Please select an HTML file first.");
                return;
            }

            const file = fileInput.files[0];
            const reader = new FileReader();

            reader.onload = function(event) {
                contentDiv.innerHTML = event.target.result; // Show HTML content
            };

            reader.readAsText(file);
        }

        // Load Pasted HTML as Text
        function loadPastedHTML() {
            const htmlInput = document.getElementById("htmlInput").value;
            const contentDiv = document.getElementById("content");

            if (!htmlInput.trim()) {
                alert("Please paste valid HTML code.");
                return;
            }

            contentDiv.innerHTML = htmlInput; // Show HTML content
        }

        // Convert to PDF
        document.getElementById("download").addEventListener("click", () => {
            const content = document.getElementById("content"); // Get HTML content (not text)

            // Setup options for html2pdf
            const options = {
                margin: 10, // Set margins (in mm)
                filename: "converted.pdf",
                image: { type: "jpeg", quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
            };

            // Generate PDF from the content
            html2pdf().from(content).set(options).save();

        });
