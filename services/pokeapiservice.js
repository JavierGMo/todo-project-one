const reqPokapi = async (id) => {
    try {
        const req = await fetch("dasdjlaksd.com");
        const toJSon = await req.json();
        const text = await req.text();
        //do something  
    } catch (error) {
        console.error("asdas");
        //mas codigo
    }finally{
        //mas codigo
    }
    return {
        idpokemon: 1
    }
  };