import { useEffect, useState } from 'react'
import { getHashParams } from './helper.js'

export const useFetchReleases = () => {
  const [releases, setReleases] = useState({items: []})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  let headers;
  if (window.location.hash.length > 0) {
      const info = getHashParams(window.location.hash)
      headers = {
      headers: {
        'Authorization': 'Bearer ' + info.access_token
      }
    }
  }
  useEffect(() => {
    setLoading(true)
    setError(null)

    // Change the apiUrl according to the search string
    fetch('https://api.spotify.com/v1/browse/new-releases?limit=50', headers)
      .then(res => res.json())
      .then(json => {
        setLoading(false)
        if (json.albums) {
          console.log(json);

          setReleases(json.albums)
        } else {
          setReleases([])
        }
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { releases, loading, error }
}
