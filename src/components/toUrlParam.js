function toUrlParam(name) {
    return name.toLowerCase().replace(/\s+/g, '-');
}


export default toUrlParam