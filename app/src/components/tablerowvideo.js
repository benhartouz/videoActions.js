import React from 'react';
import { Link } from 'react-router-dom'
class TableRowVideo extends React.Component {
constructor() {
super();

}

render() {
return (<table border="2"  width="40%">
    
<tr id={this.props.video._id}  >
<td colSpan="2" rowSpan="3">
<img alt={this.props.video.title} src={`${this.props.video.imgUrl}`} width='95' height='95'/>
</td>
<td colSpan="3" rowSpan="1">
{this.props.video.title}
</td> 
</tr>

<tr>
<td colSpan="3" rowSpan="1" >
<h5>{this.props.video.description}</h5>
</td> 
</tr>
<tr>
<td colSpan="1" rowSpan="1">
<a href={`${this.props.video.url}`} >
lien
</a>
</td> 

<td colSpan="2" rowSpan="1">
{this.props.video.publishedAt}
</td> 
</tr>


</table>

);
}
}

export default TableRowVideo;
