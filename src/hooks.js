import { useEffect, useState } from 'react'

export const useFetchReleases = (headers) => {
  const [releases, setReleases] = useState({items: []})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    // Change the apiUrl according to the search string
    fetch('https://api.spotify.com/v1/browse/new-releases', headers)
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
