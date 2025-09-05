// Danh sách format content (một keyword có nhiều lựa chọn)
const formats = [
  { 
    keyword: "comment", 
    content: [
      "敖瑞鹏是那个让我们觉得青春如此美好的人，能成为他的「小皮袄」，是我们青春岁月里的一份幸福。多年以后，每当回忆起这段时光，我们都会更加自豪于那段闪闪发光的青春。#敖瑞鹏陈一# #敖瑞鹏一点浩然气#",
      "敖瑞鹏是那个让我们觉得青春如此美好的人，能成为他的「小皮袄」，是我们青春岁月里的一份幸福。多年以后，每当回忆起这段时光，我们都会更加自豪于那段闪闪发光的青春。#敖瑞鹏李长寿# #敖瑞鹏师兄太稳健#",
      "敖瑞鹏是那个让我们觉得青春如此美好的人，能成为他的「小皮袄」，是我们青春岁月里的一份幸福。多年以后，每当回忆起这段时光，我们都会更加自豪于那段闪闪发光的青春。#敖瑞鹏燕迟 #敖瑞鹏朝雪录",
      "敖瑞鹏是那个让我们觉得青春如此美好的人，能成为他的「小皮袄」，是我们青春岁月里的一份幸福。多年以后，每当回忆起这段时光，我们都会更加自豪于那段闪闪发光的青春。#palladium帕拉丁品牌代言人敖瑞鹏# #72小时ao游计划#"
    ] 
  },
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
        if (Array.isArray(r.content)) {
          // Nếu 1 keyword có nhiều content
          r.content.forEach((c, i) => {
            const div = document.createElement("div");
            div.classList.add("result");
            div.innerHTML = `
              <span class="keyword">#${r.keyword} - lựa chọn ${i+1}</span><br>
              <span class="content" id="content-${index}-${i}">${c}</span><br><br>
              <button onclick="copyToClipboard('content-${index}-${i}')">📋 Copy</button>
            `;
            resultsDiv.appendChild(div);
          });
        } else {
          // Nếu chỉ có 1 content
          const div = document.createElement("div");
          div.classList.add("result");
          div.innerHTML = `
            <span class="keyword">#${r.keyword}</span><br>
            <span class="content" id="content-${index}">${r.content}</span><br><br>
            <button onclick="copyToClipboard('content-${index}')">📋 Copy</button>
          `;
          resultsDiv.appendChild(div);
        }
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
