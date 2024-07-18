import { LatLngExpression } from 'leaflet'

export const AppConfig = {
  minZoom: 0,
  maxZoom: 18, // max zoom level of CARTO: 18
  ui: {
    topBarHeight: 80,
    bigIconSize: 48,
    mapIconSize: 32,
    markerIconSize: 16,
    menuIconSize: 16,
    topBarIconSize: 24,
  },
  baseCenter: [0.000000, 0.000000] as LatLngExpression, // Center of the world
}

export enum NavMenuVariant {
  INTRO = 'vertical',
  TOPNAV = 'horizontal',
}