export default function AddClassModule() {
    const btnShow = document.querySelector('.btn-show');
    const ctSubList = document.querySelector('.ct-sub-list');
    if (btnShow && ctSubList) {
      btnShow.addEventListener("click", () => {
        $(ctSubList).slidedown();
      })
    }

      var elementHeight = document.querySelector('.elementHeight');
      if(elementHeight){
        var elementHeightH = elementHeight.offsetHeight; // Lấy chiều cao của item1
    
        // Đặt giá trị --item1-height trong document root
        document.documentElement.style.setProperty('--element-height', elementHeightH + 'px');
      
      }
      var showJss = document.querySelectorAll('.ShowJS');
  
      if (showJss) {
          showJss.forEach(showJs => {
              var btnShowjss = showJs.querySelectorAll('.btnShow');
              var showClass = showJs.querySelector('.showClass');
              btnShowjss.forEach(btnShowjs => {
                btnShowjs.addEventListener("click", () => {
                  showClass.classList.toggle('open');
                  showJs.classList.toggle('active');
              });
              });
         
          });
      }
        $(document).ready(function() {
          var readURL = function(input) {
            if (input.files && input.files[0]) {
              var reader = new FileReader();
    
              reader.onload = function (e) {
                // Kiểm tra xem có thẻ img trong #imageContainer hay không
                var existingImage = $('.upload-button').find('.profile-pic');
    
                if (existingImage.length > 0) {
                  // Nếu có, chỉ cập nhật src
                  existingImage.attr('src', e.target.result);
                } else {
                  // Nếu không có, thêm một thẻ img mới
                  $(".upload-button").append('<img class="profile-pic" src="' + e.target.result + '" alt="Profile Picture">');
                }
              };
    
              reader.readAsDataURL(input.files[0]);
            }
          };
    
          $(".file-upload").on('change', function(){
            readURL(this);
          });
    
          $(".upload-button").on('click', function() {
            $(".file-upload").click();
          });
        });
        
  }