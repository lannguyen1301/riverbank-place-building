{
  document.addEventListener("DOMContentLoaded", function () {
    const iframes = document.querySelectorAll('iframe[src*="youtube.com/embed"]');

    iframes.forEach((iframe) => {
      if (iframe.classList.contains('cus_short_clip')) return;

      const src = iframe.getAttribute('src');
      const videoIdMatch = src.match(/embed\/([a-zA-Z0-9_-]+)/);
      if (!videoIdMatch || !videoIdMatch[1]) return;

      const videoId = videoIdMatch[1];
      const thumbUrl = 'https://img.youtube.com/vi/' + videoId + '/0.jpg';

      const p_inline = document.createElement('p');
      p_inline.setAttribute('style', 'text-align: center; margin: 0; padding: 0;');

      const wrapper = document.createElement('div');
      wrapper.className = 'youtube-wrapper';
      wrapper.setAttribute('data-src', src);
      wrapper.style.maxWidth = '100%';

      const thumb = document.createElement('img');
      thumb.src = thumbUrl;
      thumb.alt = "YouTube thumbnail";
      thumb.style.width = '760px';
      thumb.style.height = 'auto';
      thumb.style.display = 'block';
      thumb.title = 'Nhấn để xem video';
      thumb.style.cursor = 'pointer';
      thumb.style.borderRadius = '8px';
      thumb.style.textAlign = 'center';
      thumb.style.margin = 'auto';
      thumb.setAttribute('loading', 'lazy');
      thumb.setAttribute('width', '760');
      thumb.setAttribute('height', 'auto');

      if (iframe.classList.contains('pageKhachhangdanhgia')) {
        thumb.style.width = '620px';
        thumb.style.height = 'auto';
        thumb.setAttribute('width', '620');
        thumb.setAttribute('height', 'auto');
        thumb.setAttribute('style', 'margin: 2rem; border-radius: 8px;');
      }


      const playBtn = document.createElement('div');
      playBtn.className = 'play-btn';
      playBtn.title = 'Nhấn để xem video';

      iframe.style.display = 'none';

      iframe.parentNode.insertBefore(wrapper, iframe);
      wrapper.appendChild(thumb);
      wrapper.appendChild(playBtn);
      wrapper.appendChild(iframe);

      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            thumb.loading = "lazy";
            observer.unobserve(wrapper);
          }
        });
      }, { threshold: 0.1 });
      observer.observe(wrapper);

      wrapper.addEventListener('click', function () {
        const modal = document.getElementById('yt-modal');
        const frame = document.getElementById('yt-frame');
        frame.src = src + '?autoplay=1';
        modal.style.display = 'flex';
      });
    });

    const modal = document.getElementById('yt-modal');
    const frame = document.getElementById('yt-frame');

    modal.addEventListener('click', function () {
      frame.src = "";
      modal.style.display = 'none';
    });

    document.querySelector('.yt-modal-content').addEventListener('click', function (e) {
      e.stopPropagation();
    });

    document.getElementById('yt-close').addEventListener('click', function () {
      frame.src = "";
      modal.style.display = 'none';
    });
  });
}

{
  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById('yt-modal');
    const frame = document.getElementById('yt-frame');

    const ytLinks = document.querySelectorAll('a[href*="https://www.youtube.com/embed/"]');

    ytLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const videoUrl = this.getAttribute('href');

        const videoIdMatch = videoUrl.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/);
        if (!videoIdMatch || !videoIdMatch[1]) return;

        frame.src = videoUrl + '?autoplay=1';
        modal.style.display = 'flex';
      });
    });

    modal.addEventListener('click', function () {
      frame.src = "";
      modal.style.display = 'none';
    });

    document.querySelector('.yt-modal-content').addEventListener('click', function (e) {
      e.stopPropagation();
    });

    document.getElementById('yt-close').addEventListener('click', function () {
      frame.src = "";
      modal.style.display = 'none';
    });
  });
}

{
  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById('yt-modal');
    const frame = document.getElementById('yt-frame');
    const modalContent = document.querySelector('.yt-modal-content');
    const closeBtn = document.getElementById('yt-close');

    function openModal(linkHref, fullScreen = false) {
      frame.src = linkHref;
      modal.style.display = 'flex';

      if (fullScreen) {
        modalContent.style.maxWidth = '100%';
        modalContent.style.width = '100%';
        frame.style.width = '100%';
        frame.style.height = 'calc(100vh - 60px)';
        frame.style.marginTop = '40px';
      } else {
        modalContent.style.maxWidth = '800px';
        modalContent.style.width = '90%';
        frame.style.width = '100%';
        frame.style.height = '526px';
      }
    }

    function closeModal() {
      frame.src = "";
      modal.style.display = 'none';
    }

    document.querySelectorAll('a[href*="/360/"]').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        openModal(this.getAttribute('href'), true);
      });
    });

    document.querySelectorAll('a[href*="https://www.youtube.com/embed/"]').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        openModal(this.getAttribute('href'), false);
      });
    });

    modal.addEventListener('click', closeModal);

    closeBtn.addEventListener('click', closeModal);

    modalContent.addEventListener('click', function (e) {
      e.stopPropagation();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });
  });
}

{
  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById('yt-modal');
    const frame = document.getElementById('yt-frame');
    const modalContent = document.querySelector('.yt-modal-content');
    const closeBtn = document.getElementById('yt-close');

    document.querySelectorAll('.open-link-modal').forEach(el => {
      if (!el.querySelector('.play-btn')) {
        const playBtn = document.createElement('div');
        playBtn.className = 'play-btn';
        el.appendChild(playBtn);
      }

      el.addEventListener('click', function (e) {
        e.preventDefault();

        const url = el.getAttribute('data-href');
        if (!url) return;

        const idMatch = url.match(/(?:v=|\/embed\/)([a-zA-Z0-9_-]+)/);
        if (!idMatch || !idMatch[1]) return;

        const videoId = idMatch[1];
        const embedUrl = 'https://www.youtube.com/embed/' + videoId;

        frame.src = embedUrl + '?autoplay=1';
        frame.removeAttribute('width');
        frame.removeAttribute('height');
        frame.style.width = '100%';
        frame.style.height = '100%';
        modal.style.display = 'flex';
        modalContent.style.maxWidth = '800px';
        modalContent.style.width = '90%';
      });
    });

    modal.addEventListener('click', function () {
      frame.src = "";
      modal.style.display = 'none';
    });

    modalContent.addEventListener('click', function (e) {
      e.stopPropagation();
    });

    closeBtn.addEventListener('click', function () {
      frame.src = "";
      modal.style.display = 'none';
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        frame.src = "";
        modal.style.display = 'none';
      }
    });
  });
}

{
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    if (img.getAttribute('alt') === "") {
      img.setAttribute('alt', 'image description');
    }

    if (!img.hasAttribute('width') || img.getAttribute('width') === "") {
      img.setAttribute('width', 'auto');
    }
    if (!img.hasAttribute('height') || img.getAttribute('height') === "") {
      img.setAttribute('height', 'auto');
    }

    if (!img.hasAttribute('loading') || img.getAttribute('loading') === "") {
      img.setAttribute('loading', 'lazy');
    }
  });

  const iframes = document.querySelectorAll('iframe');
  iframes.forEach((iframe) => {
    if (!iframe.hasAttribute('loading') || iframe.getAttribute('loading') === "") {
      iframe.setAttribute('loading', 'lazy');
    }
  });

  const videos = document.querySelectorAll('video');
  videos.forEach((video) => {
    if (!video.hasAttribute('loading') || video.getAttribute('loading') === "") {
      video.setAttribute('loading', 'lazy');
    }
  });

  const audios = document.querySelectorAll('audio');
  audios.forEach((audio) => {
    if (!audio.hasAttribute('loading') || audio.getAttribute('loading') === "") {
      audio.setAttribute('loading', 'lazy');
    }
  });

  const embeds = document.querySelectorAll('embed');
  embeds.forEach((embed) => {
    if (!embed.hasAttribute('loading') || embed.getAttribute('loading') === "") {
      embed.setAttribute('loading', 'lazy');
    }
  });


}


{
  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("yt-modal");
    const modalContent = document.querySelector(".yt-modal-content");
    const iframe = document.getElementById("yt-frame");
    const closeBtn = document.getElementById("yt-close");

    document.addEventListener("click", function (e) {
      const target = e.target.closest("a.js-open-modal");

      if (target) {
        const href = target.getAttribute("data-href");

        if (href && (href.includes("/360/") || href.includes("youtube.com"))) {
          e.preventDefault();
          iframe.src = href;
          modal.style.display = "flex";

          const fullScreen = href.includes("/360/");
          if (fullScreen) {
        
            modalContent.style.maxWidth = '100%';
            modalContent.style.width = '100%';
            iframe.style.width = '100%';
            iframe.style.height = 'calc(100vh - 60px)';
            iframe.style.marginTop = '100px';
          } else {
            modalContent.style.maxWidth = '800px';
            modalContent.style.width = '90%';
            iframe.style.width = '100%';
            iframe.style.height = '526px';
            iframe.style.marginTop = '0';
          }
        }
      }
    });

    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
      iframe.src = "";
    });
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
        iframe.src = "";
      }
    });
  });
}