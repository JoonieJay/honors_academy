var mapOptions = {
  center: new naver.maps.LatLng(35.121549, 126.912702),
  zoom: 13,
  minZoom: 1,
  zoomControl: true,
  zoomControlOptions: {
    position: naver.maps.Position.TOP_RIGHT,
    style: naver.maps.ZoomControlStyle.SMALL
  }
};
var map = new naver.maps.Map("map", mapOptions);
var marker = new naver.maps.Marker({
  position: new naver.maps.LatLng(35.121475, 126.912534),
  map: map
});
