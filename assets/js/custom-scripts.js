(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var links = Array.prototype.slice.call(document.querySelectorAll('.site-nav__link[href*="#"]'));
    if (!links.length) return;

    var items = links.map(function (link) {
      var href = link.getAttribute('href') || '';
      var hash = href.split('#')[1];
      if (!hash) return null;
      var target = document.getElementById(hash);
      if (!target) return null;
      return { link: link, target: target };
    }).filter(Boolean);

    if (!items.length) return;

    function setActive(activeLink) {
      links.forEach(function (link) {
        link.classList.toggle('nav-active', link === activeLink);
      });
    }

    function updateActiveLink() {
      var scrollY = window.scrollY + 120;
      var active = items[0].link;

      items.forEach(function (item) {
        if (item.target.offsetTop <= scrollY) {
          active = item.link;
        }
      });

      setActive(active);
    }

    links.forEach(function (link) {
      link.addEventListener('click', function () {
        setActive(link);
      });
    });

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();
  });
})();

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var socialLinks = Array.prototype.slice.call(document.querySelectorAll('.author__social-link'));
    if (!socialLinks.length) return;

    socialLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        socialLinks.forEach(function (item) {
          item.classList.remove('is-selected');
        });
        link.classList.add('is-selected');
      });
    });
  });
})();
