import React from 'react';
import { Link } from 'react-router-dom'
class TableRowVideo extends React.Component {
constructor() {
super();

}

render() {
return (
<tr id={this.props.video._id}>
<td >
<img alt={this.props.video.title} src={`${this.props.video.imgUrl}`} width='100' height='100'/>
</td>
<td>
{this.props.video.title}
</td> 


<td>
<h5>{this.props.video.description}</h5>
</td> 

<td>
<a href={`${this.props.video.url}`} >
lien
</a>
</td> 

<td>
{this.props.video.publishedAt}
</td> 
</tr>


);
}
}

export default TableRowVideo;
