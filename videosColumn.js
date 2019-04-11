import React from 'react';
import {connect} from 'react-redux'; 
import {fetchVideos} from '../actions/videoActions';
import TableRowVideo from './tablerowvideo';
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
     
<center><h1>les dernières vidéos d'actualité de youtube </h1></center>
 {listVideos}   
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


