document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search");
    const goButton = document.querySelector(".go");
    const items = document.querySelectorAll(".nd");

    if (!searchInput || !goButton || items.length === 0) {
        console.error("Could not find one or more elements with the specified classes.");
        return;
    }

    goButton.addEventListener("click", () => {
        const searchText = searchInput.value.trim().toLowerCase(); // Lấy từ khóa tìm kiếm và chuẩn hóa nó

        items.forEach(item => {
            const itemText = item.textContent.trim().toLowerCase(); // Lấy nội dung của mỗi phần tử và chuẩn hóa nó
            if (itemText.includes(searchText)) {
                item.classList.add("highlight");  // Thêm lớp CSS để nhấp nháy
            } else {
                item.classList.remove("highlight");   // Xóa lớp CSS để ngừng nhấp nháy
            }
        });
    });
});