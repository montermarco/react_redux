import React from "react";

// <> </> = Fragment - div invisible
export default ({ name, image }) => (
	<>
        <img className="img-contact" alt="" src={image}/>
		<h3>{name}</h3>
	</>
);
