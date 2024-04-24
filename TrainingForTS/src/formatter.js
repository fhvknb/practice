
/**
 * 描述
 * @author xiangchao
 * @date 2021-07-20
 * @param {string} thing
 * @param {number} cost
 * @returns {void}
 */
export function coastFormatter(thing, cost) {
    writeMessage(`The ${thing} costs $${cost.toFixed(2)}`)
}

export function writeMessage(msg) {
    console.log(msg)
}
