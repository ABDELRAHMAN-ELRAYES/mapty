'strict mode';
let typeSelect = document.getElementById('type');
let cadence = document.querySelector('.cadence-div');
let elevation = document.querySelector('.elevation-div');
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      let { latitude, longitude } = position.coords;

      var map = L.map('map').setView([latitude, longitude], 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([latitude, longitude])
        .addTo(map)
        .bindPopup(
          L.popup({
            autoClose: false,
            closeOnClick: false,
            className: 'popup-marker running-record',
          })
        )
        .setPopupContent('Hi')
        .openPopup();
      map.on('click', event => {
        let { lat, lng } = event.latlng;
        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(
            L.popup({
              autoClose: false,
              closeOnClick: false,
              className: 'popup-marker walking-record',
            })
          )
          .setPopupContent('Hi')
          .openPopup();
      });
    },
    () => {
      alert("Location can't be determined");
    }
  );
}

//change the form input according to the selection type

typeSelect.addEventListener('change', () => {
  cadence.classList.toggle('deactivate');
  elevation.classList.toggle('deactivate');
});
