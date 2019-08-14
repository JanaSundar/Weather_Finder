import React from "react";



export default function Forecast({fore}){

return(
<div className="mt-4 text-center">

{fore && <h4>{fore.city+","+ fore.state}</h4>}

</div>
);
}