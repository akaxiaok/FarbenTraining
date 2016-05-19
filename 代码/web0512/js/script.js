/**
 * Created by lenovo on 2016/5/16.
 */
var map = new AMap.Map('container', {
    zoom:16,
    center: [113.9397347, 22.52533692],
});
var marker = new AMap.Marker({
    position: [113.9397347, 22.52533692],
    map:map
});
var marker = new AMap.Marker();
marker.setMap(map);