// Gọi hàm khi trang tải xong
window.onload = function() {
    showVipModal(); // Hiển thị modal khi trang tải xong
    doiMat();
};

// Hiển thị modal khi cần
function showVipModal() {
    const modal = document.getElementById('vip-modal');
    modal.classList.add('show');
}

// Đóng modal khi nhấn vào nút đóng
document.getElementById('close-modal').addEventListener('click', function() {
    const modal = document.getElementById('vip-modal');
    modal.classList.remove('show');
});
// Hàm "Chơi ngay" chuyển đến trang yêu cầu nạp VIP
function playNow() {
    window.location.href = "test.html"; // Chuyển hướng đến trang yêu cầu nạp VIP
}
// Đóng modal khi nhấn nút đóng
function closeVIPModal() {
    document.getElementById('vip-modal').style.display = 'none';
    window.location.href = 'mobile.html';  // Chuyển hướng đến trang login
}
// Cập nhật trạng thái VIP trong localStorage
function updateVIPStatus(isVIP) {
    localStorage.setItem("hasVIP", isVIP);  // Lưu trạng thái VIP vào localStorage
}

// Xử lý nút "Chơi ngay" khi nhấn vào
document.getElementById("play-now-btn").addEventListener("click", playNow);
// Xử lý sự kiện cho form đăng nhập
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn gửi form mặc định
    checkVIP(); // Kiểm tra tài khoản và mật khẩu
});
