//fetch().then(data=>data.json()).then(data=>{/**hacer algo */}).catch(e=>console.error(e));
//Lo de arriba es igual a lo de abajo
async function funAsyn(params) {
    //Azucar sintactica de then and catch
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
}

funAsyn().catch(e=>console.error(e));



/*modules.export = Object
modules.export = {
    SomeObject,
    AnyObject,
}
=

export function SomeObkect(params) {
    
}*/
