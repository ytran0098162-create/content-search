// Danh sách format content
const formats = [
  { keyword: "giới thiệu", content: "Format Giới thiệu: [Tên] + [Điểm nổi bật] + [CTA]" },
  { keyword: "minigame", content: "Format Minigame: Đặt câu hỏi + Quy tắc + Phần thưởng" },
  { keyword: "chào hàng", content: "Format Chào hàng: Chào khách + Nêu lợi ích + Giá + Lời kêu gọi" },
  { keyword: "feedback", content: "Format Feedback: Trích dẫn lời khách hàng + Hình ảnh + Cảm ơn" },
];

// Hàm tìm kiếm
document.getElementById("searchBox").addEventListener("input", function() {
  const query = this.value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (query.length > 0) {
    const results = formats.filter(f => f.keyword.toLowerCase().includes(query));
    if (results.length > 0) {
      results.forEach((r, index) => {
        const div = document.createElement("div");
        div.classList.add("result");

        // Tạo nội dung + nút Copy
        div.innerHTML = `
          <span class="keyword">#${r.keyword}</span><br>
          <span class="content" id="content-${index}">${r.content}</span><br><br>
          <button onclick="copyToClipboard('content-${index}')">📋 Copy</button>
        `;
        resultsDiv.appendChild(div);
      });
    } else {
      resultsDiv.innerHTML = "<p>❌ Không tìm thấy format phù hợp</p>";
    }
  }
});

// Hàm copy
function copyToClipboard(elementId) {
  const text = document.getElementById(elementId).innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("✅ Đã copy nội dung!");
  });
}
