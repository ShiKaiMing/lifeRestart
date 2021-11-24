function clone(value) {
    switch(typeof value) {
        case 'object':
            if(Array.isArray(value)) return value.map(v=>clone(v));
            const newObj = {};
            for(const key in value) newObj[key] = clone(value[key]);
            return newObj;
        default: return value;
    }
}

function max(...arr) {
    return Math.max(...arr.flat());
}

function min(...arr) {
    return Math.min(...arr.flat());
}

function sum(...arr) {
    let s = 0;
    arr.flat().forEach(v=>s+=v);
    return s;
}

function average(...arr) {
    const s = sum(...arr);
    return s / arr.flat().length;
}

function weightRandom(list) {
    let totalWeights = 0;
    for(const [, weight] of list)
        totalWeights += weight;

    let random = Math.random() * totalWeights;
    for(const [id, weight] of list)
        if((random-=weight)<0)
            return id;
    return list[list.length-1];
}

function listRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function getListValuesMap(list, fn) {
    const map = {};
    list.forEach(key=>map[key] = fn(key));
    return map;
}

function mapConvert(map, fn) {
    for(const key in map)
        map[key] = fn(key, map[key]);
}

function getConvertedMap(map, fn) {
    const newMap = {};
    for(const key in map)
        newMap[key] = fn(key, map[key]);
    return newMap;
}

function mapSet(target, source) {
    for(const key in source)
        target[key] = source[key];
}

export { clone, max, min, sum, average, weightRandom, listRandom, getListValuesMap, mapConvert, getConvertedMap, mapSet };