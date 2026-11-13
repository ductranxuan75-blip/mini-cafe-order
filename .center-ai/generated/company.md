# Quy tắc & tri thức toàn công ty

- [decision] Code phải được ít nhất 1 người khác review và duyệt trước khi merge vào nhánh main. _(Decision — approved, 100% confidence)_
- [decision] Mọi secret/API key phải để trong biến môi trường (.env), tuyệt đối không hardcode vào source. Phát hiện là chặn merge. _(Decision — approved, 100% confidence)_
- [requirement] Mọi API gọi ra bên ngoài phải có timeout tối đa 10 giây và retry 3 lần với backoff — không để treo request. _(Requirement — approved, 20% confidence, có thể đã lỗi thời)_
