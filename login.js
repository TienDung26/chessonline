// JavaScript để xử lý sự kiện khi nhấn "Chơi ngay"
function checkVIP() {
    // Kiểm tra xem người dùng đã đồng ý điều khoản chưa
    const termsChecked = document.getElementById('terms-checkbox').checked;
    
    if (!termsChecked) {
        // Nếu chưa đồng ý, hiển thị thông báo yêu cầu đồng ý
        alert("Bạn cần đồng ý với Điều khoản và Điều kiện để tiếp tục.");
        return; // Dừng hành động và không chuyển hướng
    }

    // Giả sử người dùng không có VIP, hiển thị modal yêu cầu nạp VIP
    const hasVIP = false;  // Đây là ví dụ, bạn sẽ thay bằng kiểm tra thực tế (cookie, session, v.v.)

    if (!hasVIP) {
        // Hiển thị cửa sổ thông báo yêu cầu nạp VIP
        alert("Để vào trò chơi, bạn cần nạp VIP. Vui lòng tham khảo cách nạp VIP trong Điều khoản và Điều kiện của chúng tôi.");
        window.location.href = 'terms.html'; // Chuyển hướng đến trang Điều khoản và Điều kiện
    } else {
        // Nếu đã có VIP, chuyển hướng vào game
        window.location.href = 'game.html'; // Chuyển hướng đến trang game
    }
}

window.onload = function () {
    var audio = document.getElementById('welcome-sound');
    audio.loop = true;  // Thiết lập âm thanh tự động phát lại khi kết thúc
    audio.play();  // Bắt đầu phát âm thanh ngay khi trang được tải

    // Xóa dữ liệu tài khoản và mật khẩu khi tải lại trang
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    // Xóa thuộc tính tự động điền nếu trình duyệt lưu lại
    document.getElementById("username").setAttribute("autocomplete", "off");
    document.getElementById("password").setAttribute("autocomplete", "off");
};

// Hàm đăng nhập với Google
function loginWithGoogle() {
    // Thay thế YOUR_CLIENT_ID và YOUR_REDIRECT_URI bằng các giá trị thực tế
    window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=openid%20profile%20email';
    // Ẩn trường Account và Password
    checkVIP();
    document.getElementById('account-fields').style.display = 'none';
}

// Hàm đăng nhập với Facebook
function loginWithFacebook() {
    // Thêm client_id và redirect_uri vào URL của Facebook OAuth
    window.location.href = 'https://www.facebook.com/v12.0/dialog/oauth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=email,public_profile';
    // Ẩn trường Account và Password
    checkVIP();
    document.getElementById('account-fields').style.display = 'none';
}

// Hàm đăng nhập với Apple
function loginWithApple() {
    // Thêm client_id và redirect_uri vào URL của Apple OAuth
    window.location.href = 'https://appleid.apple.com/auth/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code id_token&scope=email';
    // Ẩn trường Account và Password
    checkVIP();
    document.getElementById('account-fields').style.display = 'none';
}
function dangNhap(){
// Xử lý form đăng nhập
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn gửi form mặc định

    // Lấy dữ liệu từ form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Kiểm tra tài khoản
    if (username === "admin" && password === "123456") {
        alert("Đăng nhập thành cônssg!");
        window.location.href = "test.html"; // Chuyển hướng sau khi đăng nhập thành công
    } else {
        alert("Sai tài khoản hoặc mật khẩu. Vui lòng thử lại.");
    }
})};
function doiMat(){
document.getElementById("toggle-password").addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    // Thay đổi biểu tượng
    this.textContent = type === "password" ? "👁️" : "🙈";
})};
