import { jsPDF } from "jspdf";

export const generateProductTag = (product) => {
    console.log(product);
  const doc = new jsPDF({
    orientation: "vertical",
    unit: "in",
    format: [2, 3],
  });
  doc.setFontSize(12);
  console.log(product.qrData)
  const splitTitle = doc.splitTextToSize(product.name, 1);
  doc.addImage(product.qrData, "JPEG", 0.5, 0.3, 1, 1);
  doc.text(0.5, 1.7, splitTitle);
  doc.text(0.5, 2.3, `PHP ${product.price}`);
  doc.save(`${product.id}_tag.pdf`);
};
