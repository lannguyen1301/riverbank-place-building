export default function SidebarModule() {
  var sidebars = document.querySelectorAll(".sidebar");

  if (sidebars) {
    sidebars.forEach((sidebar) => {
      var sidebarBtn = sidebar.querySelector(".sidebar-btn");
      sidebarBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
      });
      document.addEventListener("click", function (event) {
        var isClickInsidesidebarBtnJss = sidebarBtn.contains(event.target);
        var isClickInsidesidebarBdyJs = sidebar.contains(event.target);
        if (!isClickInsidesidebarBtnJss && !isClickInsidesidebarBdyJs) {
          sidebar.classList.remove("active");
        }
      });

      // remove class active when click item
      const eztocpages = document.querySelectorAll(".ez-toc-page-1");
      eztocpages.forEach((eztocpage) => {
        eztocpage.addEventListener("click", () => {
          sidebar.classList.remove("active");
        });
      });
    });
  }
  //  const newsSide = document.querySelector('.newsdt-side');
  //  if (newsSide) {
  //      const sidebar = newsSide.querySelector('.sidebar');
  //      const sidebarnewsdt = newsSide.querySelector('.newsdt-side-bar');

  //      // Hàm kiểm tra điều kiện
  //      const checkVisibility = () => {
  //          const rect = sidebarnewsdt.getBoundingClientRect();
  //          const isCompletelyOutOfView = (
  //              rect.bottom <= 0 || // Hoàn toàn ra khỏi trên
  //              rect.top >= window.innerHeight // Hoàn toàn ra khỏi dưới
  //          );

  //          if (isCompletelyOutOfView) {
  //              // Khi sidebarnewsdt hoàn toàn ra khỏi view
  //              sidebar.classList.add('open');
  //          } else {
  //              // Khi sidebarnewsdt trở lại view
  //              sidebar.classList.remove('open');
  //              sidebar.classList.remove('active');
  //          }
  //      };

  //      // Theo dõi sự kiện cuộn trang
  //      window.addEventListener('scroll', checkVisibility);
  //      window.addEventListener('resize', checkVisibility); // Để kiểm tra khi thay đổi kích thước cửa sổ

  //      // Gọi hàm một lần để xác định trạng thái ban đầu
  //      checkVisibility();
  //  }
}
