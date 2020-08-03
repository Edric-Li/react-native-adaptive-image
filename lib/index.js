import React, {Component} from 'react';
import {Image, Dimensions} from 'react-native';
import PropTypes from 'prop-types';

let BASE_URL = '';

function setBaseUrl(url) {
    BASE_URL = url;
}

function getBaseUrl() {
    return BASE_URL;
}

class AdaptedImage extends Component {
    static defaultProps = {
        maxWidth: Dimensions.get('window').width
    };
    state = {
        width: 0,
        height: 0,
        display: false
    };

    componentDidMount() {
        Image.getSize(this.getUrl(), this.setWidthAndHeight.bind(this));
    }

    getUrl() {
        const {url} = this.props;
        if (url.startsWith('http')) {
            return url;
        }
        return BASE_URL + url;
    }

    setWidthAndHeight(width, height) {
        const {maxWidth} = this.props;
        let proportion = 1;
        if (width > maxWidth) {
            proportion = width / maxWidth;
        }
        this.setState({width: width / proportion, height: height / proportion, display: true});
    }

    render() {
        const {width, height, display} = this.state;
        if (display) {
            return (<Image source={{uri: this.getUrl()}} style={{width, height: this.props.height || height}}/>);
        }
        return null;
    }
}

AdaptedImage.propTypes = {
    url: PropTypes.string,
    maxWidth: PropTypes.number,
    height: PropTypes.number,
};

export {setBaseUrl, getBaseUrl}

export default AdaptedImage;
