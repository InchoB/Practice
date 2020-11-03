import React from 'react';

// function Detail(props) {
//     console.log(props);
//     return <span>hello</span>;
// }

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.stalte === undefined) {
            history.push('/');
        }
    }
    render() {
        const { location } = this.props;
        if (location.stalte) {
            return <span>{location.stalte.title}</span>;
        } else {
            return null;
        }
    }
}

export default Detail;
