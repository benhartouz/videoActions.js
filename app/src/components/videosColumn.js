import React from 'react';
import {connect} from 'react-redux'; 
import {fetchVideos} from '../actions/videoActions';
import TableRowVideo from './tablerowvideo';
import TableHeadVideo from './tableHeadvideo';
var listVideos
class videos extends React.Component { 
constructor() {
super(); 
}

componentDidMount() { this.props.fetchVideos(); }

render() { 
   
        listVideos = this.props.videos.map(video => 
            <TableRowVideo key={video._id} video={video}/>

);
          
        
             

 
return (
     
<div>
    <table>
<TableHeadVideo />
<tbody> {listVideos} </tbody>
  
 </table> 
</div>
)

}
} 

const mapStateToProps = (state, ownProps) => {
return {
clients : state.clients,
videos: state.videos
};
}

const mapDispatchToProps = (dispatch) => {
return {
    fetchVideos :()=> dispatch(fetchVideos())
};
}

export default connect(mapStateToProps, mapDispatchToProps)(videos);
