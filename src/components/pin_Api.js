class Charger {
  constructor(data) {
    this.chargerId = data.chargerId;
    this.chargerType = data.chargerType;
    this.output = data.output;
    this.updatedAt = data.updatedAt;
  }
}

class ChargingStation {
  constructor(data) {
    this.stationId = data.stationId;
    this.name = data.name;
    this.kindDetail = data.kindDetail;
    this.address = data.address;
    this.lat = data.lat;
    this.lng = this.lng;
    this.operator = data.operator;
    this.connectorTypes = data.connectorTypes;
    this.chargers = data.chargers.map(chargerData => new Charger(chargerData));
  }
}

async function fetchChargingStationData() {
  try {
    const response = await fetch('https://www.syu-voltup.com/v1/stations/ACAC0001');
    const data = await response.json();
    return new ChargingStation(data.data);
  } catch (error) {
    console.error('API 호출 중 오류 발생:', error);
    throw new Error('API 호출 중 오류 발생');
  }
}

export { fetchChargingStationData };
