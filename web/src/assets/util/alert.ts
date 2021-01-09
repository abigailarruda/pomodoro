import Swal from "sweetalert2";

export default function showAlert(title: string, text: string, icon: any) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    width: 400,
    allowEscapeKey: true,
    allowOutsideClick: true,
    showCloseButton: true,
    showConfirmButton: false,
  });
}
