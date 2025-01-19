// Hàm kiểm tra người dùng đã đồng ý điều khoản
function checkTermsAgreement() {
    const termsChecked = document.getElementById("terms-checkbox").checked;
    const termsText = document.getElementById("terms-text");

    // Nếu người dùng chưa đồng ý, làm nổi bật và nháy văn bản điều khoản
    if (!termsChecked) {
        termsText.classList.add("terms-warning"); // Thêm lớp CSS làm nổi bật
        return false;
    } else {
        termsText.classList.remove("terms-warning"); // Loại bỏ lớp CSS nếu đã đồng ý
    }
    return true;
}
// Hàm kiểm tra tài khoản VIP
function isVIPAccount(username, password) {
    const vipAccounts = [
        { username: "vipUser", password: "vipPass" },
        { username: "admin", password: "123456" }
    ];
    return vipAccounts.some(account => account.username === username && account.password === password);
}

// Xử lý đăng nhập khi người dùng nhấn nút "Đăng nhập"
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn form gửi mặc định

    // Kiểm tra điều khoản trước khi xử lý đăng nhập
    if (!checkTermsAgreement()) {
        return; // Dừng lại nếu chưa đồng ý điều khoản
    }

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Ẩn thông báo lỗi nếu có
    const errorMessage = document.getElementById("password-error");
    errorMessage.style.display = "none";

    // Ẩn thông báo thành công nếu có
    const successMessage = document.getElementById("login-success");
    successMessage.style.display = "none";

    // Kiểm tra tài khoản VIP và đăng nhập
    if (isVIPAccount(username, password)) {
        // Hiển thị thông báo thành công dưới ô mật khẩu
        successMessage.textContent = "Đăng nhập thành công!";
        successMessage.style.display = "block"; // Hiển thị thông báo thành công
        window.location.href = "test.html"; // Chuyển hướng đến trang chơi game
    } else {
        // Hiển thị thông báo lỗi dưới ô mật khẩu
        errorMessage.textContent = "Tài khoản hoặc mật khẩu không đúng.";
        errorMessage.style.display = "block"; // Hiển thị thông báo lỗi
    }
});

// Hàm xử lý đăng nhập bằng số điện thoại
function phoneLogin() {
    // Kiểm tra điều khoản trước khi cho phép nhập số điện thoại
    if (!checkTermsAgreement()) {
        return; // Dừng lại nếu chưa đồng ý điều khoản
    }

    window.location.href = "phone-login.html"; // Chuyển đến tra
    if (phoneNumber) {
        alert(`Yêu cầu OTP đã được gửi đến số ${phoneNumber}. Vui lòng xác minh để tiếp tục.`);
        // Logic xử lý OTP tại đây, ví dụ sử dụng Firebase Authentication
        window.location.href = "checkvip.html"; // Chuyển đến trang yêu cầu nạp VIP sau khi xác minh
    } else {
        alert("Vui lòng nhập số điện thoại hợp lệ.");
    }
}

// Xử lý khi người dùng nhấn "Chơi ngay"
function playNow() {
    // Kiểm tra điều khoản trước khi cho phép chơi ngay
    if (!checkTermsAgreement()) {
        return; // Dừng lại nếu chưa đồng ý điều khoản
    }
    window.location.href = "checkvip.html"; // Chuyển hướng đến trang yêu cầu nạp VIP
}

// Hàm kiểm tra tài khoản VIP
function isVIPAccount(username, password) {
    const vipAccounts = [
        { username: "vipUser", password: "vipPass" },
        { username: "admin", password: "123456" }
    ];
    return vipAccounts.some(account => account.username === username && account.password === password);
}

// Đăng nhập với Google
function googleLogin() {
    if (!checkTermsAgreement()) {
        return; // Dừng lại nếu chưa đồng ý điều khoản
    }

    // Google login logic
    alert("Đăng nhập với Google...");
    // Sử dụng Google API hoặc Firebase để xử lý đăng nhập
    window.location.href = "test.html"; // Chuyển đến trang chơi game
}

// Đăng nhập với Facebook
function facebookLogin() {
    if (!checkTermsAgreement()) {
        return; // Dừng lại nếu chưa đồng ý điều khoản
    }

    // Facebook login logic
    alert("Đăng nhập với Facebook...");
    // Sử dụng Facebook SDK để xử lý đăng nhập
    window.location.href = "test.html"; // Chuyển đến trang chơi game
}

// Đăng nhập với Apple
function appleLogin() {
    if (!checkTermsAgreement()) {
        return; // Dừng lại nếu chưa đồng ý điều khoản
    }

    // Apple login logic
    alert("Đăng nhập với Apple...");
    // Sử dụng Apple SignIn SDK để xử lý đăng nhập
    window.location.href = "test.html"; // Chuyển đến trang chơi game
}
    document.getElementById("toggle-password").addEventListener("click", function () {
        const passwordInput = document.getElementById("password");
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
    
        // Thay đổi biểu tượng
        this.textContent = type === "password" ? "👁️" : "🙈";
    });