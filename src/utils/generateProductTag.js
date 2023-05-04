import { jsPDF } from "jspdf";

export const generateProductTag = (product) => {
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PHP',
  });
  const doc = new jsPDF({
    orientation: "vertical",
    unit: "in",
    format: [2, 3],
  });
  doc.setFontSize(12);
  const splitTitle = doc.splitTextToSize(product.name, 1);
  doc.addImage(product.qrData, "JPEG", 0.5, 0.3, 1, 1);
  doc.text(0.5, 1.7, splitTitle);
  doc.text(0.5, 2.3, `${currencyFormatter.format(product.price).replace("₱", "PHP ")}`);
  doc.save(`${product.id}_tag.pdf`);
};
