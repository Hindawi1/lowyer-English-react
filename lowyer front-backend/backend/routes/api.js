useEffect(() => {
    fetch('/api/some-endpoint')
      .then(response => response.json())
      .then(data => {
        // Use the data in state
        setData(data);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
      });
  }, []);
  