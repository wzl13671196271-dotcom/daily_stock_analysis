/* =========================================================
   华夏集团控股有限公司 — 仿写站点交互
   ========================================================= */
(function () {
  'use strict';

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  /* ---------------------------------------------------------
     数据
     --------------------------------------------------------- */
  var WORKS = [
    { id: 1,  title: '倚天屠龙记', year: '2019', type: 'tv',   tags: ['wuxia'],   img: 'work-01.jpg', desc: '华夏视听与企鹅影视联合出品，蒋家骏执导，曾舜晞、陈钰琪、祝绪丹领衔主演的金庸武侠剧。' },
    { id: 2,  title: '凤囚凰',     year: '2018', type: 'tv',   tags: ['costume'], img: 'work-02.jpg', desc: '华夏视听与欢娱影视联合出品，关晓彤、宋威龙主演，爱奇艺单平台播放量突破 28 亿。' },
    { id: 3,  title: '封神演义',   year: '2019', type: 'tv',   tags: ['costume'], img: 'work-03.jpg', desc: '芒果影视、华夏视听、东阳三尚联合出品的神话巨制，王丽坤、罗晋领衔主演。' },
    { id: 4,  title: '神雕侠侣',   year: '2014', type: 'tv',   tags: ['wuxia'],   img: 'work-04.jpg', desc: '新版《神雕侠侣》由华夏视听投资，于正编剧，陈晓、陈妍希主演。' },
    { id: 5,  title: '笑傲江湖',   year: '2013', type: 'tv',   tags: ['wuxia'],   img: 'work-05.jpg', desc: '2013 年版《笑傲江湖》由于正工作室与华夏视听联合出品，霍建华、陈乔恩主演。' },
    { id: 6,  title: '像火花像蝴蝶', year: '2013', type: 'tv', tags: ['drama'],   img: 'work-06.jpg', desc: '改编自著名作家毕飞宇小说《上海往事》，由华夏视听出品，再现旧上海的爱与命运。' },
    { id: 7,  title: '夜幕下的哈尔滨', year: '2007', type: 'tv', tags: ['drama'], img: 'work-07.jpg', desc: '华夏视听与鑫宝源影视联合出品，改编自陈玙同名小说，讲述特殊年代的家国抉择。' },
    { id: 8,  title: '一夜惊喜',   year: '2013', type: 'film', tags: ['romance'], img: 'work-08.jpg', desc: '金依萌执导，范冰冰、李治廷主演的都市爱情喜剧电影。' },
    { id: 9,  title: '宫锁沉香',   year: '2013', type: 'film', tags: ['costume'], img: 'work-09.jpg', desc: '电影版《宫》，潘安子执导，周冬雨、陈晓主演，2013 年 8 月 13 日上映。' },
    { id: 10, title: '碧血剑',     year: '2007', type: 'tv',   tags: ['wuxia'],   img: 'work-10.jpg', desc: '根据金庸原著改编，由华夏视听出品的古装武侠剧。' },
    { id: 11, title: '神雕侠侣',   year: '2006', type: 'tv',   tags: ['wuxia'],   img: 'work-11.jpg', desc: '改编自金庸同名小说，华夏视听参与出品，刘亦菲、黄晓明主演。' },
    { id: 12, title: '鹿鼎记',     year: '2008', type: 'tv',   tags: ['wuxia'],   img: 'work-12.jpg', desc: '2008 版《鹿鼎记》由华夏视听与华谊兄弟出品，黄晓明、钟汉良主演。' },
    { id: 13, title: '倚天屠龙记', year: '2009', type: 'tv',   tags: ['wuxia'],   img: 'work-13.jpg', desc: '张纪中监制、于敏执导，邓超、安以轩主演的金庸武侠剧。' },
    { id: 14, title: '射雕英雄传', year: '2008', type: 'tv',   tags: ['wuxia'],   img: 'work-14.jpg', desc: '改编自金庸同名武侠小说，胡歌、林依晨主演。' },
    { id: 15, title: '天龙八部',   year: '2003', type: 'tv',   tags: ['wuxia'],   img: 'work-15.jpg', desc: '改编自金庸同名小说，胡军、林志颖、高虎主演。' },
    { id: 16, title: '大唐游侠传', year: '2008', type: 'tv',   tags: ['wuxia'],   img: 'work-16.jpg', desc: '由中央电视台文艺中心影视部与华夏视听联合出品。' },
    { id: 17, title: '红拂女',     year: '2005', type: 'tv',   tags: ['costume'], img: 'work-17.jpg', desc: '由北京东王文化与华夏视听联合出品，舒淇、霍建华主演。' }
  ];

  var NEWS = [
    {
      date: '2020.10.30', tag: '集团动态', title: '南京传媒学院元年开启新征程',
      body: [
        '迈入南京传媒学院元年，学校用一份实力答卷翻开了 2020 学年新的篇章。招生规模再创新高，学科建设与人才培养持续升级。',
        '从课程体系到创作实践，学校继续以产业需求为导向，完善传媒与艺术专业布局，为学生提供更开放、更多元的成长路径。'
      ]
    },
    {
      date: '2020.07.15', tag: '集团要闻', title: '华夏集团控股有限公司成功于香港联交所主板挂牌上市',
      body: [
        '2020 年 7 月 15 日，华夏集团控股有限公司在香港联合交易所主板挂牌上市，股票代码 01981.HK。',
        '上市标志着集团发展进入新阶段。集团将继续以影视制作与传媒及艺术高等教育为双支柱，稳健经营，持续为股东与社会创造长期价值。'
      ]
    },
    {
      date: '2020.06.12', tag: '作品资讯', title: '《别叫我酒神》爆笑上线，宋晓峰千杯不倒逆袭成酒神',
      body: [
        '喜剧电影《别叫我酒神》正式上线，影片以轻松幽默的方式讲述小人物在时代变化中的逆袭故事。',
        '华夏视听持续拓展内容类型，在古装、武侠等优势题材之外，探索更多贴近当下观众审美的喜剧表达。'
      ]
    },
    {
      date: '2019.02.27', tag: '作品资讯', title: '新版《倚天屠龙记》2.27 开播，风云再起',
      body: [
        '由华夏视听与企鹅影视联合出品的新版《倚天屠龙记》于 2 月 27 日开播，再现金庸笔下的江湖风云。',
        '该剧由蒋家骏执导，曾舜晞、陈钰琪、祝绪丹领衔主演，在尊重原著的基础上以更年轻的视听语言重塑经典。'
      ]
    },
    {
      date: '2018.04.20', tag: '作品资讯', title: '精准洞察用户观剧需求，爱奇艺《凤囚凰》超 28 亿收官',
      body: [
        '《凤囚凰》在爱奇艺单平台播放量突破 28 亿，以亮眼成绩收官。',
        '华夏视听与欢娱影视联合出品，关晓彤、宋威龙主演。剧集以细腻的人物关系和鲜明的东方美学获得广泛关注。'
      ]
    },
    {
      date: '2016.05.01', tag: '作品资讯', title: '新《神雕侠侣》将播，陈晓陈妍希演绎狂爱武侠',
      body: [
        '新版《神雕侠侣》由华夏视听投资，于正编剧，陈晓、陈妍希主演。',
        '剧集在保留经典人物关系的同时，以更唯美的影像风格呈现杨过与小龙女之间的旷世之恋。'
      ]
    }
  ];

  var esc = function (str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  };

  /* ---------------------------------------------------------
     焦点图
     --------------------------------------------------------- */
  var hero = $('.hero');
  if (hero) {
    var slides = $$('.hero-slide', hero);
    var dots = $$('.hero-dots button', hero);
    var currentEl = $('#heroCurrent');
    var progressEl = $('#heroProgress');
    var heroIndex = 0;
    var heroTimer = null;
    var HERO_DELAY = 7000;

    var restartProgress = function () {
      if (!progressEl) return;
      progressEl.classList.remove('is-running');
      void progressEl.offsetWidth;
      progressEl.classList.add('is-running');
    };

    var showSlide = function (next) {
      heroIndex = (next + slides.length) % slides.length;
      slides.forEach(function (slide, i) { slide.classList.toggle('is-active', i === heroIndex); });
      dots.forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === heroIndex);
        dot.setAttribute('aria-selected', i === heroIndex ? 'true' : 'false');
      });
      if (currentEl) currentEl.textContent = ('0' + (heroIndex + 1)).slice(-2);
      restartProgress();
    };

    var startTimer = function () {
      clearInterval(heroTimer);
      heroTimer = setInterval(function () { showSlide(heroIndex + 1); }, HERO_DELAY);
    };

    var goTo = function (i, userAction) {
      showSlide(i);
      if (userAction !== false) startTimer();
    };

    $('.hero-prev') && $('.hero-prev').addEventListener('click', function () { goTo(heroIndex - 1); });
    $('.hero-next') && $('.hero-next').addEventListener('click', function () { goTo(heroIndex + 1); });
    dots.forEach(function (dot, i) { dot.addEventListener('click', function () { goTo(i); }); });

    hero.addEventListener('mouseenter', function () { clearInterval(heroTimer); });
    hero.addEventListener('mouseleave', function () { restartProgress(); startTimer(); });

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        clearInterval(heroTimer);
      } else {
        restartProgress();
        startTimer();
      }
    });

    restartProgress();
    startTimer();
  }

  /* ---------------------------------------------------------
     导航 / 滚动状态
     --------------------------------------------------------- */
  var header = $('#siteHeader');
  var nav = $('#siteNav');
  var navToggle = $('.nav-toggle');
  var backTop = $('#backTop');

  var closeNav = function () {
    if (!nav || !navToggle) return;
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', '打开导航菜单');
    $$('.has-sub.is-open', nav).forEach(function (li) { li.classList.remove('is-open'); });
  };

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      navToggle.setAttribute('aria-label', open ? '关闭导航菜单' : '打开导航菜单');
    });
  }

  $$('.sub-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (window.innerWidth > 980) return;
      var li = btn.parentElement;
      var open = li.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  $$('.site-nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      if (window.innerWidth <= 980) closeNav();
    });
  });

  var onScroll = function () {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    if (header) header.classList.toggle('is-scrolled', y > 12);
    if (backTop) backTop.classList.toggle('is-visible', y > 640);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (backTop) {
    backTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* 导航高亮 */
  var sectionIds = ['home', 'about', 'business', 'news', 'investor', 'contact'];
  var navLinks = $$('.site-nav > ul > li > a.nav-link');
  var sectionObserver = null;
  if ('IntersectionObserver' in window) {
    sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        navLinks.forEach(function (link) {
          link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sectionIds.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });
  }

  /* ---------------------------------------------------------
     滚动显现
     --------------------------------------------------------- */
  var revealEls = $$('.reveal');
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------------------------------------------------------
     影视作品：筛选 / 加载更多 / 弹窗
     --------------------------------------------------------- */
  var workGrid = $('#workGrid');
  var workMore = $('#workMore');
  var workCount = $('#workCount');
  var filterBtns = $$('.filter-btn');
  var currentFilter = 'all';
  var PAGE_SIZE = 8;
  var shown = PAGE_SIZE;
  var modal = $('#modal');
  var modalBody = $('#modalBody');
  var modalPanel = $('.modal-panel');
  var lastFocus = null;

  var filterWorks = function () {
    return WORKS.filter(function (work) {
      if (currentFilter === 'all') return true;
      if (currentFilter === 'wuxia') return work.tags.indexOf('wuxia') > -1;
      return work.type === currentFilter;
    });
  };

  var openModal = function (html, lightbox) {
    if (!modal) return;
    modalBody.className = 'modal-body' + (lightbox ? ' is-lightbox' : '');
    modalBody.innerHTML = html;
    lastFocus = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    var closeBtn = $('.modal-close', modal);
    if (closeBtn) closeBtn.focus();
  };

  var closeModal = function () {
    if (!modal || !modal.classList.contains('is-open')) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  };

  var workModal = function (work) {
    openModal(
      '<div class="modal-media"><img src="assets/img/' + work.img + '" alt="' + esc(work.title) + '剧集海报"></div>' +
      '<div class="modal-content">' +
        '<p class="modal-kicker">' + (work.type === 'film' ? 'FILM' : 'TELEVISION') + ' · ' + work.year + '</p>' +
        '<h3 class="modal-title" id="modalTitle">' + esc(work.title) + '</h3>' +
        '<p class="modal-date">' + (work.type === 'film' ? '电影' : '电视剧') + ' · 华夏视听出品</p>' +
        '<div class="modal-text"><p>' + esc(work.desc) + '</p></div>' +
        '<div class="modal-actions"><button type="button" class="btn btn-outline" data-close>关闭</button></div>' +
      '</div>'
    );
  };

  var renderWorks = function () {
    if (!workGrid) return;
    var list = filterWorks();
    var visible = list.slice(0, shown);

    workGrid.innerHTML = visible.map(function (work, i) {
      return (
        '<article class="work-card reveal" data-work="' + work.id + '" style="--i:' + (i % 8) + '" tabindex="0" role="button" aria-label="查看作品：' + esc(work.title) + '">' +
          '<div class="work-poster">' +
            '<img src="assets/img/' + work.img + '" alt="' + esc(work.title) + '海报" loading="lazy">' +
            '<span class="work-badge">' + (work.type === 'film' ? '电影' : '剧集') + '</span>' +
            '<div class="work-hover"><p>' + esc(work.desc) + '</p><span>查看详情</span></div>' +
          '</div>' +
          '<div class="work-meta"><h3>' + esc(work.title) + '</h3><span>' + work.year + '</span></div>' +
        '</article>'
      );
    }).join('');

    requestAnimationFrame(function () {
      $$('.work-card', workGrid).forEach(function (card) { card.classList.add('is-in'); });
    });

    if (workCount) workCount.textContent = '共 ' + list.length + ' 部作品 · 已显示 ' + visible.length + ' 部';
    if (workMore) workMore.hidden = visible.length >= list.length;
  };

  if (workGrid) {
    renderWorks();

    workGrid.addEventListener('click', function (e) {
      var card = e.target.closest('.work-card');
      if (!card) return;
      var work = WORKS.filter(function (w) { return w.id === Number(card.getAttribute('data-work')); })[0];
      if (work) workModal(work);
    });

    workGrid.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      var card = e.target.closest('.work-card');
      if (!card) return;
      e.preventDefault();
      var work = WORKS.filter(function (w) { return w.id === Number(card.getAttribute('data-work')); })[0];
      if (work) workModal(work);
    });

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        currentFilter = btn.getAttribute('data-filter');
        shown = PAGE_SIZE;
        renderWorks();
      });
    });

    if (workMore) {
      workMore.addEventListener('click', function () {
        shown += PAGE_SIZE;
        renderWorks();
      });
    }
  }

  /* ---------------------------------------------------------
     新闻弹窗
     --------------------------------------------------------- */
  var newsModal = function (index) {
    var item = NEWS[index];
    if (!item) return;
    openModal(
      '<div class="modal-media"><img src="assets/img/hero-4.jpg" alt="' + esc(item.title) + '"></div>' +
      '<div class="modal-content">' +
        '<p class="modal-kicker">' + esc(item.tag) + '</p>' +
        '<h3 class="modal-title" id="modalTitle">' + esc(item.title) + '</h3>' +
        '<p class="modal-date">' + item.date + '</p>' +
        '<div class="modal-text">' + item.body.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</div>' +
        '<div class="modal-actions"><button type="button" class="btn btn-outline" data-close>关闭</button></div>' +
      '</div>'
    );
  };

  $$('[data-news]').forEach(function (el) {
    var open = function () { newsModal(Number(el.getAttribute('data-news'))); };
    el.addEventListener('click', open);
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });

  /* ---------------------------------------------------------
     图片灯箱（宣传片 / IP）
     --------------------------------------------------------- */
  $$('[data-lightbox]').forEach(function (el) {
    el.addEventListener('click', function () {
      var src = el.getAttribute('data-lightbox');
      var title = el.getAttribute('data-title') || '';
      var desc = el.getAttribute('data-desc') || '';
      openModal(
        '<div class="modal-media"><img src="' + esc(src) + '" alt="' + esc(title) + '"></div>' +
        '<div class="modal-content">' +
          '<p class="modal-kicker">CATHAY MEDIA</p>' +
          '<h3 class="modal-title" id="modalTitle">' + esc(title) + '</h3>' +
          '<div class="modal-text"><p>' + esc(desc) + '</p></div>' +
          '<div class="modal-actions"><button type="button" class="btn btn-outline" data-close>关闭</button></div>' +
        '</div>',
        true
      );
    });
  });

  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target.closest('[data-close]')) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'Tab' && modal.classList.contains('is-open')) {
        var focusable = $$('a[href], button:not([disabled]), img[tabindex], [tabindex]:not([tabindex="-1"])', modal)
          .filter(function (el) { return el.offsetParent !== null; });
        if (!focusable.length) return;
        var first = focusable[0];
        var last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

  /* ---------------------------------------------------------
     语言切换提示
     --------------------------------------------------------- */
  var toast = $('#toast');
  var toastTimer = null;
  var showToast = function (msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('is-visible'); }, 2400);
  };

  $$('[data-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      showToast('演示站点：暫未提供' + btn.getAttribute('data-lang') + '完整版本');
    });
  });

  /* ---------------------------------------------------------
     窗口尺寸变化时关闭移动菜单
     --------------------------------------------------------- */
  var resizeTimer = null;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (window.innerWidth > 980) closeNav();
    }, 160);
  });
})();
