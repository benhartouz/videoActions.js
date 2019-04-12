import React from 'react';


class TableHeadVideo extends React.Component { 
render() {
 
return (<table border="2" width="40%">
<tr >
<td colSpan="1" rowSpan="1"> 1 </td>
<td colSpan="5" rowSpan="1">  </td>
</tr>
<tr >
<td colSpan="1" rowSpan="1"> <img width='30' height='30' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhrcdyfxQY4gHhOBtU0ifCMnt9M59hWcrySGaXsXWKHM7a1xOibw"/> </td>
<td colSpan="1" rowSpan="1" > <center> <input  type="text" name="query" required value='' /></center>  </td>
</tr>
</table>
);
}
}

export default TableHeadVideo;
