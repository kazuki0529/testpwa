import USERLOCATION from '@/events/userlocation'

const GEOLOCATION_OPTION = {
  'enableHighAccuracy': true,
  'timeout': 8000,
  'maximumAge': 5000
}

let _instance = null

export function loadUserLocationAPI (bus) {
  if (_instance == null) {
    _instance = new UserLocationAPI(bus)
  }
}

class UserLocationAPI {
  constructor (bus) {
    this.bus = bus

    this._getLocation()
    this._watchLocation()
  }

  _getLocation () {
    window.navigator.geolocation.getCurrentPosition(
      position => this._onLocationSuccess(position),
      error => this._onLocationFailure(error),
      GEOLOCATION_OPTION
    )
  }

  _watchLocation () {
    this.watchId = window.navigator.geolocation.watchPosition(
      position => this._onLocationSuccess(position),
      error => this._onLocationError(error),
      GEOLOCATION_OPTION
    )
  }

  _clearWatchLocation () {
    if (this.watchId) {
      window.navigator.geolocation.clearWatch(this.watchId)
      this.watchId = null
    }
  }

  _onLocationSuccess (position) {
    this.bus.$emit(USERLOCATION.CHANGED, position)
  }

  _onLocationFailure (error) {
    this.bus.$emit(USERLOCATION.ERROR, error)
  }
}
