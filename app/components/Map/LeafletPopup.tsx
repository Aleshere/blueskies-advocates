import { X } from 'lucide-react'
import dynamic from 'next/dynamic'
import { Popup, PopupProps } from 'react-leaflet'

import { AppConfig } from '@/app/utils/AppConfig'
import { MarkerCategoriesValues } from '@/app//utils/MarkerCategories'
import { PlaceValues } from '@/app//utils/Places'

const PopupIcon = dynamic(() => import('./PopupIcon'))
const Button = dynamic(() => import('@/app//utils/Button'))

interface LeafletPopupProps extends PopupProps {
  handlePopupClose: (active?: boolean) => void
  handleOpenLocation: () => void
  item: PlaceValues
  color: MarkerCategoriesValues['color']
  icon: MarkerCategoriesValues['icon']
}

const LeafletPopup = ({
  handlePopupClose,
  handleOpenLocation,
  color,
  icon,
  item,
  ...props
}: LeafletPopupProps) => {
  const { title, information, website, favicon, altText} = item

  return (
    <Popup {...props}>
      <div
        className="absolute bg-white shadow rounded-md"
        style={{
          marginLeft: `calc(-150px + ${AppConfig.ui.markerIconSize + 12}px)`,
          marginTop: -1,
        }}
      >
        <div className="flex flex-row justify-center pt-3" style={{ width: '300px' }}>
          <Button
            className="absolute right-3 top-3 inline-block text-dark"
            onClick={() => handlePopupClose(false)}
            small
          >
            <X size={AppConfig.ui.markerIconSize} />
          </Button>
          <div className="absolute left-0 top-0 mt-5 flex w-full justify-center">
            <PopupIcon favicon={favicon} altText={altText} />
          </div>
          <div
            className="flex w-full flex-col justify-center p-3 pt-6 text-center"
            style={{ marginTop: AppConfig.ui.markerIconSize * 2 + 8 }}
          >
            <h3 className="m-0 text-lg font-bold leading-none">{title}</h3>
            <p className="m-0 text-secondary text-base">{information}</p>
            <div className="mb-2 flex justify-center align-middle p-2">
              <Button link={`https://${website}`} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:hover:transition ease-in-out duration-500' >More Info</Button>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  )
}

export default LeafletPopup