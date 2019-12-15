class Wheather {
  constructor() {
    this.secretKey = 'b8d95bd0e3e6c7c5fda14f71d6e367f2';
    this.proxy = 'https://cors-anywhere.herokuapp.com/';
  }
  async getWheather(logi, lati) {
    const wheatherDetails = await fetch(`${this.proxy}https://api.darksky.net/forecast/${this.secretKey}/${logi},${lati}`);
    const wheatherData = await wheatherDetails.json();
    return wheatherData;
  }
}