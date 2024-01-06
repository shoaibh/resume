document.getElementById("downloadPdf").addEventListener("click", function () {
  // const element = document.getElementById("content-to-convert");

  // // Configuration for html2pdf
  // const options = {
  //   margin: 0,
  //   filename: "converted-document.pdf",
  //   image: { type: "jpeg", quality: 1 },
  //   html2canvas: { scale: 3 },
  //   jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  //   pagebreak: { mode: "avoid-all" },
  // };

  // html2pdf().from(element).set(options).save();

  const el = document.createElement("a");
  el.href = "shoaib-hamza-resume.pdf";
  el.download = "shoaib-hamza-resume.pdf";
  document.body.appendChild(el);

  el.click();
  document.body.removeChild(el);
});
