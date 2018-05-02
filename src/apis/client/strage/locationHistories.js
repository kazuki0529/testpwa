import LOCATION_HISTORIES from '@/events/locationhistories'
import moment from 'moment'

const STRAGE_KEY_USER_LOCATION = 'locationhistories'

let _instance = null

export function loadLocationHistoriesAPI (bus) {
  if (_instance == null) {
    _instance = new LocationHistoriesAPI(bus)
  }
}

class LocationHistoriesAPI {
  constructor (bus) {
    this.bus = bus
    this.storage = window.localStorage
    this.storageKey = STRAGE_KEY_USER_LOCATION

    this.bus.$on(LOCATION_HISTORIES.PUSH, histories => this._pushLocationHistory(histories))

    this._loadLocationHistories()
  }

  _loadLocationHistories () {
    const strageLocation = this.storage.getItem(this.storageKey)

    if (strageLocation) {
      this.histories = JSON.parse(strageLocation)
      this.bus.$emit(LOCATION_HISTORIES.CHANGED, this.histories)
    } else {
      this.histories = []
    }
  }

  _pushLocationHistory (location) {
    this.histories.push({
      position: {
        lat: location.coords.latitude,
        lng: location.coords.longitude
      },
      infoWindow: {
        opend: true,
        options: {
          content: moment(location.timestamp).format('YYYY/MM/DD HH:mm:ss時点')
        }
      },
      timestamp: location.timestamp
    })
    this.histories = this.histories
      .sort(function (a, b) { return a.timestamp < b.timestamp })
      .slice(0, 10)

    this.storage.setItem(this.storageKey, JSON.stringify(this.histories))
    this.bus.$emit(LOCATION_HISTORIES.CHANGED, this.histories)
  }
}
