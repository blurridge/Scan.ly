import { ref, uploadString } from "firebase/storage";
import { storage } from "../firebase/config";
import QRCode from "qrcode";

const STARTING_URL = "https://scanly-app.vercel.app/products/";
export const generateQrCode = async (id) => {
  const url = STARTING_URL + id;
  const storageRef = ref(storage, `${id}-qr.jpg`);
  try {
    const qr = await QRCode.toDataURL(url);
    uploadString(storageRef, qr, "data_url").then((snapshot) => {
      console.log("QR Code uploaded!");
    });
    return qr;
  } catch (err) {
    console.error(err);
  }
};
