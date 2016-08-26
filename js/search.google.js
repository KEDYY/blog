/* Google 站内搜索 */
function GoogleSearch() {
    var cx = '015581603728770773544:i2jpkhkjn6s';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
}
GoogleSearch();