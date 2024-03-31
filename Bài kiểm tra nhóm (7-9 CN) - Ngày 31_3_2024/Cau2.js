document.getElementById('myForm').addEventListener('submit', function(event) {
    // Ngăn chặn hành vi mặc định của form
    event.preventDefault();
  
    // Lấy dữ liệu từ form
    var email = document.getElementById('email').value;
    var description = document.getElementById('description').value;
  
    // Tạo một đối tượng Date để lấy thời gian hiện tại
    var now = new Date();
    var timeString = now.toLocaleString();
  
    // Tạo một phần tử div mới để chứa đánh giá
    var reviewDiv = document.createElement('div');
    reviewDiv.innerHTML = '<p><strong>Email:</strong> ' + email + '</p>' +
                          '<p><strong>Thời gian:</strong> ' + timeString + '</p>' +
                          '<p><strong>Đánh giá:</strong> ' + description + '</p>';
  
    // Thêm đánh giá mới vào phần tử #reviews
    document.getElementById('reviews').appendChild(reviewDiv);
  });
  