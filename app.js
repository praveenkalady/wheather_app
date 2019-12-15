const wheather = new Wheather;
const ui = new Ui;
window.addEventListener('load', () => {
  let log;
  let lat;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      log = position.coords.longitude;
      lat = position.coords.latitude;
      wheather.getWheather(log, lat)
        .then(data => {
          console.log(data);
          ui.generateWheather(data);
          ui.generatetable(data);
        })
        .catch(err => {
          console.log(err);
        })
    })
  }
})