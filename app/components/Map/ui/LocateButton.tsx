import { LatLngExpression } from 'leaflet'
import { LocateFixed } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

import { AppConfig } from '@/app/utils/AppConfig'
import { Category } from '@/app/utils/MarkerCategories'

import { CustomMarker } from '../LeafletMarker'
import useMapContext from '../useMapContext'

export const LocateButton = () => {
  const { map } = useMapContext()
  const [userPosition, setUserPosition] = useState<LatLngExpression | undefined>(undefined)

  const handleClick = useCallback(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        setUserPosition([position.coords.latitude, position.coords.longitude])
      })
    } else {
      setUserPosition(undefined)
    }
  }, [])

  useEffect(() => {
    if (userPosition) {
      map?.flyTo(userPosition)
    }
  }, [map, userPosition])

  return (
    <>
      <button
        type="button"
        style={{ zIndex: 400 }}
        className="button absolute top-16 right-3 rounded bg-white p-2 text-blue-500 shadow-md"
        onClick={() => handleClick()}
      >
        <LocateFixed size={AppConfig.ui.mapIconSize} />
      </button>
      {userPosition && (
        <CustomMarker
          place={{
            id: 0,
            title: 'Your location',
            information: 'You are here',
            position: userPosition,
            category: Category.LOCATE,
            website: '#',
            favicon: '',
            altText: ''
          }}
        />
      )}
    </>
  )
}