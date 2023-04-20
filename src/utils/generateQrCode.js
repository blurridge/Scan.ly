import { ref, uploadString } from "firebase/storage";
import { storage } from "../firebase/config";
import QRCode from "qrcode";

const STARTING_URL = "http://localhost:3000/products/";
export const generateQrCode = async (id) => {
  const url = STARTING_URL + id;
  const storageRef = ref(storage, `${id}-qr.jpg`);
  try {
    const qr = await QRCode.toDataURL(url);
    uploadString(storageRef, qr, "data_url").then((snapshot) => {
      console.log("QR Code uploaded!");
    });
  } catch (err) {
    console.error(err);
  }
};
