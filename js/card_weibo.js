fetch('https://api.suyanw.cn//api/hotlist.php?type=微博')
  .then(data => data.json())
  .then(data => {
    let html = '<style>.weibo-new{background:#ff3852}.weibo-hot{background:#ff9406}.weibo-jyzy{background:#ffc000}.weibo-recommend{background:#00b7ee}.weibo-adrecommend{background:#febd22}.weibo-friend{background:#8fc21e}.weibo-boom{background:#bd0000}.weibo-topic{background:#ff6f49}.weibo-topic-ad{background:#4dadff}.weibo-boil{background:#f86400}#weibo-container{overflow-y:auto;-ms-overflow-style:none;scrollbar-width:none}#weibo-container::-webkit-scrollbar{display:none}.weibo-list-item{display:flex;flex-direction:row;justify-content:space-between;flex-wrap:nowrap}.weibo-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:auto}.weibo-num{float:right}.weibo-hotness{display:inline-block;padding:0 6px;transform:scale(.8) translateX(-3px);color:#fff;border-radius:8px}</style>';
    html += '<div class="weibo-list">';
    let hotness = {
      '爆': 'weibo-boom',
      '热': 'weibo-hot',
      '沸': 'weibo-boil',
      '新': 'weibo-new',
      '荐': 'weibo-recommend',
      '音': 'weibo-jyzy',
      '影': 'weibo-jyzy',
      '剧': 'weibo-jyzy',
      '综': 'weibo-jyzy'
    };

    let items = data.data || data; // 根据返回数据的格式选择正确的数组

    // 初始化排名计数器
    let rank = 1;

    for (let item of items) {
      html += '<div class="weibo-list-item"><div class="weibo-hotness ' + hotness[(item.hot || '荐')] + '">'
        + '<span class="weibo-rank">' + rank + '</span></div>'
        + '<span class="weibo-title"><a title="' + item.title + '" href="https://s.weibo.com/weibo?q=' + encodeURIComponent('#' + item.title + '#') + '&Refer=index" target="_blank" rel="external nofollow noreferrer">' + item.title + '</a></span>'
        + '<div class="weibo-num"><span class="weibo-hotness-number">' + (item.num || item.hot) + '</span></div></div>';

      rank++; // 增加排名计数器
    }

    html += '</div>';
    document.getElementById('weibo-container').innerHTML = html;
  })
  .catch(function (error) {
    console.log(error);
  });
