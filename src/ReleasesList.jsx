import React from 'react'
import { useFetchReleases } from './hooks'

const ReleasesList = (props) => {

  // use your own hook to load the data you need
  const { releases, loading, error } = useFetchReleases(props.headers)

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className="flex flex-wrap">
      {releases.items.length > 0 &&
        releases.items.map(item =>
          <div key={item.id} className="flex-grow m-6">
            <div className="max-w-2 m-6 mx-auto">
              <div className="flex items-center justify-center">
                  <div className=" w-full">
                    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                      <div className="bg-cover bg-center m-2 p-4">
                        <a
                          href={item.external_urls.spotify}
                          className="text-black"
                          target="_blank"
                          rel="noopener noreferrer">
                        <img className="max-w-full" width="640px" src={item.images[0].url} alt="" />
                          {item.name}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
      }
    </div>
  )
}

export default ReleasesList
