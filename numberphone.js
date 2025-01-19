import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider, signInWithCredential } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js';

// Cấu hình Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA9A9P-IVNuOLZGelOuXO-heX9fK7I_h4Q",
  authDomain: "ca-ro-ba810.firebaseapp.com",
  projectId: "ca-ro-ba810",
  storageBucket: "ca-ro-ba810.firebasestorage.app",
  messagingSenderId: "403742231694",
  appId: "1:403742231694:web:652615ceb958aff07dcddf",
  measurementId: "G-PCEKDMHBFX"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Biến lưu trữ verificationId từ Firebase
let verificationId;

// Hàm gửi OTP
window.sendOTP = function() {
  const phoneNumber = document.getElementById("phoneNumber").value;

  if (!phoneNumber) {
    alert("Vui lòng nhập số điện thoại.");
    return;
  }

  // Khởi tạo ReCAPTCHA verifier
  const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
    size: 'invisible',
    callback: (response) => {
      // Khi người dùng tương tác và trả lời đúng CAPTCHA
    }
  }, auth);

  // Render ReCAPTCHA
  recaptchaVerifier.render().then((widgetId) => {
    // Xác minh số điện thoại và gửi OTP qua SMS
    signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
      .then((confirmationResult) => {
        // Lưu lại verificationId để dùng khi xác minh OTP
        verificationId = confirmationResult.verificationId;
        document.getElementById("otpSection").style.display = "block";
        alert("OTP đã được gửi đến số điện thoại của bạn.");
      })
      .catch((error) => {
        console.error("Lỗi khi gửi OTP:", error);
        alert("Đã xảy ra lỗi khi gửi OTP. Vui lòng thử lại.");
      });
  });
};

// Hàm xác minh OTP
window.verifyOTP = function() {
  const otp = document.getElementById("otp").value;

  if (!otp) {
    alert("Vui lòng nhập mã OTP.");
    return;
  }

  const credential = PhoneAuthProvider.credential(verificationId, otp);

  // Đăng nhập với OTP
  signInWithCredential(auth, credential)
    .then((result) => {
      alert("Đăng nhập thành công!");
      window.location.href = "test.html";
    })
    .catch((error) => {
      console.error("Lỗi xác minh OTP:", error);
      alert("Mã OTP không đúng. Vui lòng kiểm tra lại.");
    });
};
