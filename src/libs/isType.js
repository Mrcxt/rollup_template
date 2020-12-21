import capitalize from 'lodash/capitalize'

/**
 * @description: 
 * @param {*} target
 * @param {String} type
 * @return {*}
 */
const isType = (target, type) => {

    if (typeof type !== 'string') {
        throw new Error(`${type} not String`)
    }

    const t = capitalize(type)
    return Object.prototype.toString.call(target) === `[object ${t}]`
}

export default isType;