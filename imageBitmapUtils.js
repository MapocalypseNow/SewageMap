import{b as a}from"./index.js";async function n(e,r){try{return await createImageBitmap(e)}catch(t){throw new a("request:server",`Unable to load ${r}`,{url:r,error:t})}}export{n as e};
