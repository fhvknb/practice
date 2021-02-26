export default  function sum(...vals: number[]): number {
    return vals.reduce( (total, val) => {
        return total += val
    });
}   