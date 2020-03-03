### Lưu ý

1. Để phục vụ việc chạy test song song thì ta nên **rải đều** (không phải một folder 1 file) các file test vào các thư mục khác nhau. Xem chi tiết tại [đây](https://docs.google.com/spreadsheets/d/1CQMpge3XATj-gJMdmnV_1Hgh7uJmx9pAHe9KOGwGTMg/edit#gid=1260801861)
2. Mỗi Test đều có quy tắc sinh mẫu ngẫu nhiên duy nhất.
3. Khi code thì tạo branch của riêng mình, sau khi push code thì tạo merge request vào master thì báo vào room pjqc.
4. Trước khi push code phải pull master để tránh conflict.
5. Commit rõ ràng để thuận tiện cho việc review và merge code.
6. Đặt tên file theo TEST. Ví dụ: _TEST1.spec.js_

### Command

1. Test 1 file bất kì

```shell
npx cypress run --spec /path/to/file
```
