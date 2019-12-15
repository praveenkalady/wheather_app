class Ui {
  constructor() {
    this.timezone = document.getElementById('timezone');
    this.condition = document.getElementById('condition');
    this.temp = document.getElementById('temprature');
  }
  generateWheather(data) {
    const {
      temperature,
      summary
    } = data.currently;
    this.temp.innerHTML = `<h1 class="text-center">${temperature}</h1>`;
    this.timezone.textContent = data.timezone;
    this.condition.textContent = summary;
  }
  generatetable(data) {
    const {
      apparentTemperature,
      dewPoint,
      pressure,
      windSpeed
    } = data.currently;
    const table = document.getElementById('elems');
    table.innerHTML = ` <td>${apparentTemperature}</td>
     <td>${dewPoint}</td>
      <td>${pressure}</td>
    <td>${windSpeed}</td>`;
  }
}