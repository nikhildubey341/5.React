function getbread(callback) {
    setTimeout(() => {
      const bread = "🍞";
      console.log("here we got the bread", bread);
      callback(bread);
    }, 2000);
  }
  
  function maketikki(bread, callback) {
    setTimeout(() => {
      const tikki = bread + "🥯";
      console.log("tikki is ready ", tikki);
      callback(tikki);
    }, 1000);
  }
  
  function addsouce(bread, tikki, callback) {
    setTimeout(() => {
      const souce = bread + tikki + "🍼";
      console.log("burger is ready", souce);
      callback(souce);
    }, 2000);
  }
  
  getbread((bread) => {
    maketikki(bread, (tikki) => {
      addsouce(bread, tikki, (souce) => {
        console.log("berger is Served");
      });
    });
  });