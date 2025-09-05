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
      results.forEach(r => {
        const div = document.createElement("div");
        div.classList.add("result");
        div.innerHTML = `<span class="keyword">#${r.keyword}</span><br>${r.content}`;
        resultsDiv.appendChild(div);
      });
    } else {
      resultsDiv.innerHTML = "<p>❌ Không tìm thấy format phù hợp</p>";
    }
  }
});
