document.getElementById("downloadPdf").addEventListener("click", function () {
  const element = document.getElementById("content-to-convert");

  // Configuration for html2pdf
  const options = {
    margin: 0,
    filename: "shoaib-hamza-resume.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 3 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    pagebreak: { mode: "avoid-all" },
  };

  html2pdf().from(element).set(options).save();

  // const downloadButton = document.getElementById("downloadPdf");
  // downloadButton.style.display = "none";

  // const el = document.createElement("a");
  // el.href = "shoaib-hamza-resume.pdf";
  // el.download = "Shoaib-Hamza-Resume-Frontend.pdf";
  // document.body.appendChild(el);

  // el.click();
  // document.body.removeChild(el);
  // downloadButton.style.display = "none";
});
