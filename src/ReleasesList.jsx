import React from 'react'
import { useFetchReleases } from './hooks'

const ReleasesList = (props) => {

  // use your own hook to load the data you need
  const { releases, loading, error } = useFetchReleases(props.headers)

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {releases.items &&
          releases.items.length > 0 &&
          releases.items.map(item =>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" key={item.id}>

              <article className="overflow-hidden rounded-lg shadow-lg bg-white">

                <a
                  href={item.external_urls.spotify}
                  className="text-black"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img className="max-w-full" width="640px" src={item.images[0].url} alt="" />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:px-4">
                  <h1 className=" text-lg text-left">
                    <a className="no-underline hover:underline text-black" href={item.external_urls.spotify}>
                      {item.name}
                    </a>
                  </h1>

                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a className="flex items-center no-underline hover:underline text-black" href={item.artists[0].external_urls.spotify}>
                    <p className="text-sm">
                      {item.artists[0].name}
                    </p>
                  </a>
                </footer>

              </article>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default ReleasesList
