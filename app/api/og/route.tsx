import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export async function GET(request: Request) {
  const interExtrabold = fetch(
    new URL('../../../public/Inter-ExtraBold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  try {
    const { searchParams } = new URL(request.url)
 
    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'BlueSkies Advocates'
 
    return new ImageResponse(
      (
        <div
          tw="h-full w-full flex flex-col align-start justify-center py-10 px-20"
          style={{
            backgroundImage: 'url(https://weareblueskies.com/social-card-bg.png)',
            backgroundSize: '100% 100%',
            fontFamily: 'Inter',
          }}
        >
          <div
            tw="text-6xl font-extrabold text-white tracking-tight leading-none mb-6 whitespace-pre-wrap"
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: await interExtrabold,
            style: 'normal',
            weight: 800,
          },
        ],        
      },
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}